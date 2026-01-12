import React from 'react'
import type { RequiredDataFromCollectionSlug } from 'payload'

interface SchemaMarkupProps {
  page: RequiredDataFromCollectionSlug<'pages'>
  url: string
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ page, url }) => {
  if (!page.meta?.schema?.type) return null

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': page.meta.schema.type,
    url,
    name: page.title,
    headline: page.meta?.title || page.title,
    description: page.meta?.description,
  }

  // Add Article-specific fields
  if (page.meta.schema.type === 'Article') {
    Object.assign(baseSchema, {
      datePublished: page.publishedAt || page.createdAt,
      dateModified: page.updatedAt,
      author: {
        '@type': 'Organization',
        name: 'Upto1',
        url: 'https://upto1.fr',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Upto1',
        url: 'https://upto1.fr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://upto1.fr/logo.png',
        },
      },
    })
  }

  // Add Service-specific fields
  if (page.meta.schema.type === 'Service') {
    Object.assign(baseSchema, {
      provider: {
        '@type': 'Organization',
        name: 'Upto1',
        url: 'https://upto1.fr',
      },
      serviceType: 'Digital Marketing',
      areaServed: 'FR',
    })
  }

  // Merge with custom data if provided
  const finalSchema =
    page.meta.schema.customData &&
    typeof page.meta.schema.customData === 'object' &&
    !Array.isArray(page.meta.schema.customData)
      ? { ...baseSchema, ...(page.meta.schema.customData as Record<string, any>) }
      : baseSchema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(finalSchema),
      }}
    />
  )
}
