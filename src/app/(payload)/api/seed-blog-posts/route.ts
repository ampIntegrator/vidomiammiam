import { getPayload } from 'payload'
import config from '@payload-config'
import { createBlogPosts } from '@/endpoints/seed/blog-posts-10'

// URL des images Unsplash pour les featured images
const unsplashImages = [
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop', // Tech/code
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop', // CSS/Design
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop', // Scalability/graphs
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=800&fit=crop', // TypeScript/code
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop', // API/graphs
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop', // Responsive/devices
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop', // Performance/speed
  'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=800&fit=crop', // JAMstack/architecture
  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop', // Accessibility/people
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop', // GraphQL/workspace
]

async function fetchFileByURL(url: string): Promise<{
  name: string
  data: Buffer
  mimetype: string
  size: number
}> {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const fileName = url.split('/').pop() || 'image.jpg'

  return {
    name: fileName,
    data: buffer,
    mimetype: 'image/jpeg',
    size: buffer.length,
  }
}

export async function GET() {
  try {
    const payload = await getPayload({ config })

    payload.logger.info('Starting blog posts seeding...')

    // Get or create demo author
    const demoAuthorResult = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'demo-author@example.com',
        },
      },
    })

    let author
    if (!demoAuthorResult.docs.length) {
      author = await payload.create({
        collection: 'users',
        data: {
          name: 'Demo Author',
          email: 'demo-author@example.com',
          password: 'demo-password-123',
        },
      })
    } else {
      author = demoAuthorResult.docs[0]
    }

    // Upload hero images
    payload.logger.info('Uploading hero images...')
    const imageBuffers = await Promise.all(unsplashImages.map((url) => fetchFileByURL(url)))

    const heroImages = await Promise.all(
      imageBuffers.map((file, index) =>
        payload.create({
          collection: 'media',
          data: {
            alt: `Blog post hero image ${index + 1}`,
          },
          file,
        }),
      ),
    )

    payload.logger.info('Creating blog posts...')
    const blogPostsData = createBlogPosts({ heroImages, author })

    // Create posts sequentially to maintain order
    const createdPosts = []
    for (const postData of blogPostsData) {
      const post = await payload.create({
        collection: 'posts',
        depth: 0,
        context: {
          disableRevalidate: true,
        },
        data: postData,
      })
      createdPosts.push(post)
      payload.logger.info(`Created post: ${post.title}`)
    }

    payload.logger.info(`Successfully created ${createdPosts.length} blog posts!`)

    return Response.json({
      success: true,
      message: `Created ${createdPosts.length} blog posts`,
      posts: createdPosts.map((p) => ({ id: p.id, title: p.title, slug: p.slug })),
    })
  } catch (error: any) {
    console.error('Error seeding blog posts:', error)
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
