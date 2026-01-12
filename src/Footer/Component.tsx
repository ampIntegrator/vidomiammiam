import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Footer, Identity, Socials } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { NewsletterForm } from '@/components/NewsletterForm'
import './footer.scss'

export async function Footer() {
  const [footerData, identityData, socialsData] = await Promise.all([
    getCachedGlobal('footer', 1)(),
    getCachedGlobal('identity', 1)(),
    getCachedGlobal('socials', 0)(),
  ])

  const identity = identityData as Identity
  const socials = socialsData as Socials

  // Icons are always white in footer
  const iconColorClass = 'text-White'

  // Social media mapping: field name -> icon class
  const socialNetworks = [
    { name: 'facebook', icon: 'icon-facebook', url: socials.facebook },
    { name: 'twitter', icon: 'icon-x-twitter', url: socials.twitter },
    { name: 'instagram', icon: 'icon-instagram', url: socials.instagram },
    { name: 'linkedin', icon: 'icon-linkedin', url: socials.linkedin },
    { name: 'youtube', icon: 'icon-youtube', url: socials.youtube },
    { name: 'tiktok', icon: 'icon-tik-tok', url: socials.tiktok },
    { name: 'whatsapp', icon: 'icon-whatsapp', url: socials.whatsapp },
    { name: 'discord', icon: 'icon-discord', url: socials.discord },
  ].filter((social) => social.url && social.url.trim() !== '')

  // Get latest 4 blog posts
  const payload = await getPayload({ config: configPromise })
  const latestPosts = await payload.find({
    collection: 'posts',
    limit: 4,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const columns = (footerData as Footer)?.columns || []
  const legalLinks = (footerData as Footer)?.legalLinks || []
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary">
      <div className="topFooter py-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <NewsletterForm />
            </div>
            <div className="col-lg-6">
              <p className="fs-5 text-white">Nos derniers articles</p>
              <ul className="p-0 d-flex flex-wrap m-0">
                {latestPosts.docs.map((post) => (
                  <li key={post.id} className="w-50 py-1">
                    <Link className="fw-semibold" href={`/posts/${post.slug}`}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mainFooter py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <Link href="/">
                {identity.logo && typeof identity.logo === 'object' && 'url' in identity.logo && (
                  <img
                    className="logoFooter"
                    src={identity.logo.url || ''}
                    alt={identity.logo.alt || identity.siteName || 'Logo'}
                    height={64}
                  />
                )}
              </Link>

              <ul className="p-0 my-3">
                <li>{identity.siteName}</li>
                <li>{identity.slogan}</li>
                <li>
                  {identity.address?.city}, {identity.address?.country}
                </li>
              </ul>
              <ul className="social p-0">
                {socialNetworks.map((social) => (
                  <li key={social.name}>
                    <Link href={social.url!} target="_blank" rel="noopener noreferrer">
                      <i className={`icon ${social.icon} ${iconColorClass}`}></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="row g-4">
                {columns.map((column, colIndex) => (
                  <div key={colIndex} className="col-md-6 col-lg-3">
                    <ul className="footerUl">
                      <li>
                        <span>{column.title}</span>
                      </li>
                      {column.links?.map((item, linkIndex) => (
                        <li key={linkIndex}>
                          <CMSLink {...item.link} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomFooter">
        <div className="container py-3">
          <div className="row g-0">
            <div className="col-3">
              <p className="m-0">
                © {currentYear} {identity.siteName}
              </p>
            </div>
            <div className="col-9">
              <ul className="d-flex justify-content-end m-0 p-0">
                {legalLinks.map((link, index) => (
                  <li key={index} className={index < legalLinks.length - 1 ? 'me-4' : ''}>
                    <Link href={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
