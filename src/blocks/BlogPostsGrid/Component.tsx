import React from 'react'
import type { BlogPostsGridBlock } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogPostsGridClient } from './Component.client'
import './blogPostsGrid.scss'

type Props = {
  className?: string
} & BlogPostsGridBlock

export const BlogPostsGrid: React.FC<Props> = async ({
  className,
  title = 'En direct de notre blog',
  centerTitle = true,
  layout = 'normal',
  rowsCount = '2',
  category,
  backgroundColor,
  paddingTop,
  paddingBottom,
}) => {
  const mainColor = 'primary'
  const payload = await getPayload({ config: configPromise })

  // Build query
  const whereClause: any = {
    _status: { equals: 'published' },
  }

  // Add category filter if specified
  if (category && typeof category === 'string') {
    whereClause.categories = { contains: category }
  }

  // Fetch up to 12 posts
  const posts = await payload.find({
    collection: 'posts',
    where: whereClause,
    limit: 12,
    sort: '-publishedAt', // Most recent first
    depth: 2,
  })

  if (!posts.docs || posts.docs.length === 0) {
    return null
  }

  return (
    <BlogPostsGridClient
      className={className}
      title={title}
      centerTitle={centerTitle}
      layout={layout}
      mainColor={mainColor}
      backgroundColor={backgroundColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      posts={posts.docs}
    />
  )
}
