import React from 'react'
import Link from 'next/link'
import type { Post } from '@/payload-types'

export type RelatedPostsProps = {
  className?: string
  docs?: (Post | string)[]
  introContent?: any
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props

  // Filter to only include valid post objects
  const validDocs = docs?.filter((doc): doc is Post => typeof doc === 'object') || []

  if (validDocs.length === 0) {
    return null
  }

  return (
    <div className={className}>
      {introContent && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">Articles Connexes</h3>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {validDocs.map((doc, index) => {
          if (!doc.slug) return null

          return (
            <Link
              key={index}
              href={`/posts/${doc.slug}`}
              className="group block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <article>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {doc.title}
                </h4>

                {doc.meta?.description && (
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {doc.meta.description}
                  </p>
                )}

                {doc.publishedAt && (
                  <time className="text-xs text-gray-400 mt-3 block">
                    {new Date(doc.publishedAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
