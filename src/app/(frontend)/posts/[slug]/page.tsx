import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import Link from 'next/link'

import type { Post } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import { formatDate } from '@/utilities/formatDate'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PostSummary } from '@/components/PostSummary/Component.client'
import '@/blocks/BlogPostsGrid/blogPostsGrid.scss'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  // Hard-coded to primary
  const mainColor = 'primary'

  return (
    <>
      <article>
        <PageClient />

        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />

        {draft && <LivePreviewListener />}

        <div id="postContent" className="container py-5">
          <div className="row g-4">
            <aside className="col-md-3 col-lg-4">
              <div className="position-sticky" style={{ top: '80px' }}>
                <div className="infraBox">
                  <span className={`summaryTitle`}>Sommaire de l&apos;article</span>
                  <PostSummary />
                </div>
              </div>
            </aside>
            <div className="col-md-9 col-lg-8 pb-5">
              <h1 className="fs-1 mb-1 ">{post.title}</h1>
              <small className="metadata d-block mb-3">
                Posté le <span>{formatDate(post.publishedAt)}</span>
              </small>
              {post.categories && post.categories.length > 0 && (
                <div className="badgeBox h5 mb-4">
                  {post.categories.map((category) => {
                    if (typeof category === 'object') {
                      const needsDarkText = ['warning', 'success', 'info', 'white'].includes(
                        mainColor,
                      )
                      return (
                        <span
                          key={category.id}
                          className={`badge rounded-pill bg-${mainColor}${needsDarkText ? ' text-dark' : ''}`}
                        >
                          {category.title}
                        </span>
                      )
                    }
                    return null
                  })}
                </div>
              )}
              {post.heroImage && typeof post.heroImage === 'object' && (
                <Media resource={post.heroImage} className="w-100 mb-4 roundedImg" />
              )}
              <div className="infraBox postContent">
                <RichText data={post.content} enableGutter={false} enableProse={false} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="boxedWidth" id="relatedPosts">
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <h4 className="text-center fw-500 text-white mb-0">
                  {post.relatedPostsTitle || 'Ces articles pourraient vous intéresser...'}
                </h4>
              </div>
              {post.relatedPosts.slice(0, 3).map((relatedPost, index) => {
                if (typeof relatedPost !== 'object') return null

                const firstCategory =
                  relatedPost.categories && relatedPost.categories.length > 0
                    ? typeof relatedPost.categories[0] === 'object'
                      ? relatedPost.categories[0].title
                      : ''
                    : ''

                const colorClass = `color${mainColor.charAt(0).toUpperCase() + mainColor.slice(1)}`

                return (
                  <div key={relatedPost.id || index} className="col-md-4">
                    <div className={`blogPost oneCol ${colorClass}`}>
                      <div className="row g-0 overflow-hidden position-relative">
                        <Link
                          href={`/posts/${relatedPost.slug}`}
                          className="position-absolute top-0 w-100 h-100 start-0 z-1"
                          aria-label={`Lire l'article: ${relatedPost.title}`}
                        />
                        <div className="col-8 p-3">
                          <div className="flexCSB">
                            {firstCategory && (
                              <strong className="d-inline-block fz14">{firstCategory}</strong>
                            )}
                            {relatedPost.publishedAt && (
                              <small>{formatDate(relatedPost.publishedAt)}</small>
                            )}
                          </div>
                          <h3 className="postBlogTitle">
                            <span>{relatedPost.title}</span>
                          </h3>
                          {relatedPost.meta?.description && (
                            <p className="card-text mb-3">{relatedPost.meta.description}</p>
                          )}
                          <span className="voirPlus">
                            Voir plus <i className="icon icon-arrow-right"></i>
                          </span>
                        </div>
                        <div className="col-4 h-100">
                          {relatedPost.heroImage &&
                            typeof relatedPost.heroImage === 'object' &&
                            relatedPost.heroImage.url && (
                              <div
                                className="bgi"
                                style={{ backgroundImage: `url(${relatedPost.heroImage.url})` }}
                              />
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
