import type { CollectionSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

// Batch 8 imports
import { batch8AgencesLocales } from './batch8-agences-locales'
import { batch8SecteursAll } from './batch8-secteurs-activite'
import { batch8NosOffresAll } from './batch8-nos-offres'
import { batch8FormationsAll } from './batch8-formations'
import { batch8ObjectifsAll, batch8AuditsAll } from './batch8-objectifs-audits'
import { batch8InsightsAll, batch8ContactAll } from './batch8-insights-contact'
import { seedHeaderFooter } from './header-footer-globals'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
]

const categories = ['Technology', 'News', 'Finance', 'Design', 'Software', 'Engineering']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [],
      },
      depth: 0,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        columns: [],
        legalLinks: [],
      },
      depth: 0,
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
  ])

  const [demoAuthor, image1Doc, image2Doc, image3Doc, _imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category,
        },
      }),
    ),
  ])

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    context: {
      disableRevalidate: true,
    },
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    context: {
      disableRevalidate: true,
    },
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    context: {
      disableRevalidate: true,
    },
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Skipping initial demo pages (batch 8 only)...`)

  // Commented out initial demo pages to avoid slug conflicts with batch 8
  // const [
  //   homePage,
  //   solutionsPage,
  //   contactPage,
  //   auditPage,
  //   growthPage,
  //   seoPage,
  //   prestashopPage,
  //   ecommercePage,
  //   tpePmePage,
  // ] = await Promise.all([
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: upto1Home(),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: upto1Solutions(),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: contactPageData({ contactForm: contactForm }),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: auditSeoGratuit(),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: growthHacking(),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: referencementNaturel(),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: prestashop(),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: ecommerceIndustry(),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     context: {
  //       disableRevalidate: true,
  //     },
  //     data: tpePmeUsecase(),
  //   }),
  // ])

  payload.logger.info(`— Seeding batch 8 pages (77 pages)...`)

  // Combine all batch 8 pages
  const batch8AllPages = [
    ...batch8AgencesLocales, // 9 agences locales
    ...batch8SecteursAll, // 10 secteurs activité (hub + 9)
    ...batch8NosOffresAll, // 11 offres (hub + 10)
    ...batch8FormationsAll, // 9 formations (hub + 8)
    ...batch8ObjectifsAll, // 8 objectifs business (hub + 7)
    ...batch8AuditsAll, // 6 audits (hub + 5)
    ...batch8InsightsAll, // 8 insights pages (hub + 7)
    ...batch8ContactAll, // 3 contact pages (hub + 2)
  ]

  payload.logger.info(`— Creating ${batch8AllPages.length} batch 8 pages...`)

  // Create all batch 8 pages in batches of 10 to avoid overwhelming the server
  const batchSize = 10
  for (let i = 0; i < batch8AllPages.length; i += batchSize) {
    const batch = batch8AllPages.slice(i, i + batchSize)
    await Promise.all(
      batch.map((pageData) =>
        payload.create({
          collection: 'pages',
          depth: 0,
          context: {
            disableRevalidate: true,
          },
          data: pageData,
        }),
      ),
    )
    payload.logger.info(`— Created pages ${i + 1} to ${Math.min(i + batchSize, batch8AllPages.length)}...`)
  }

  payload.logger.info(`— Batch 8 pages created successfully!`)

  // Seed Header and Footer globals with mega menus
  await seedHeaderFooter(payload)

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<{
  name: string
  data: Buffer
  mimetype: string
  size: number
}> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
