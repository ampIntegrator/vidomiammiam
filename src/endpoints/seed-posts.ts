import type { Payload } from 'payload'
import type { PayloadHandler } from 'payload'

const IMAGES = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&h=1280&fit=crop',
  'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1280&fit=crop',
]

const POSTS = [
  {
    title: "Les 10 Tendances SEO Incontournables en 2025",
    slug: "tendances-seo-2025",
    excerpt: "Découvrez les stratégies SEO qui vont dominer 2025 et comment adapter votre stratégie digitale pour rester compétitif.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "Introduction" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Le SEO évolue constamment et 2025 ne fait pas exception. Avec l'essor de l'IA et les changements d'algorithmes de Google, il est crucial de rester à jour." }
            ]
          }
        ]
      }
    },
    imageIndex: 0
  },
  {
    title: "Comment Créer une Stratégie de Content Marketing Efficace",
    slug: "strategie-content-marketing",
    excerpt: "Guide complet pour développer une stratégie de contenu qui génère des résultats mesurables et engage votre audience.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "Pourquoi le Content Marketing est essentiel" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Le content marketing n'est plus une option, c'est une nécessité. 70% des marketeurs investissent activement dans cette stratégie." }
            ]
          }
        ]
      }
    },
    imageIndex: 1
  },
  {
    title: "Analytics & Data : Mesurer la Performance de Votre Site Web",
    slug: "analytics-performance-web",
    excerpt: "Les KPIs essentiels à suivre pour optimiser votre présence en ligne et prendre des décisions data-driven.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "Les Métriques Qui Comptent Vraiment" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Taux de conversion, taux de rebond, temps de session... Apprenez à interpréter vos données analytics." }
            ]
          }
        ]
      }
    },
    imageIndex: 2
  },
  {
    title: "Growth Hacking : 15 Techniques pour Booster Votre Croissance",
    slug: "growth-hacking-techniques",
    excerpt: "Stratégies éprouvées de growth hacking utilisées par les startups les plus performantes pour accélérer leur croissance.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "Qu'est-ce que le Growth Hacking ?" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Le growth hacking combine marketing, data et créativité pour générer une croissance rapide et mesurable." }
            ]
          }
        ]
      }
    },
    imageIndex: 3
  },
  {
    title: "Optimisation du Taux de Conversion : Guide Complet CRO",
    slug: "optimisation-taux-conversion-cro",
    excerpt: "Transformez plus de visiteurs en clients avec ces techniques d'optimisation du taux de conversion testées et approuvées.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "Les Fondamentaux du CRO" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "L'optimisation du taux de conversion peut augmenter vos revenus de 200% sans augmenter votre trafic." }
            ]
          }
        ]
      }
    },
    imageIndex: 4
  },
  {
    title: "Social Media Marketing : Stratégies pour 2025",
    slug: "social-media-marketing-2025",
    excerpt: "Les réseaux sociaux évoluent. Découvrez comment adapter votre stratégie social media pour maximiser votre ROI.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "L'Évolution des Réseaux Sociaux" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "TikTok, Instagram, LinkedIn... Chaque plateforme a ses codes. Apprenez à les maîtriser." }
            ]
          }
        ]
      }
    },
    imageIndex: 5
  },
  {
    title: "E-commerce SEO : Optimiser Votre Boutique en Ligne",
    slug: "ecommerce-seo-optimisation",
    excerpt: "Techniques spécifiques pour améliorer le référencement de votre boutique en ligne et augmenter vos ventes organiques.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "SEO E-commerce vs SEO Traditionnel" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Le SEO e-commerce nécessite une approche différente. Optimisation des fiches produits, structure de site, données structurées..." }
            ]
          }
        ]
      }
    },
    imageIndex: 6
  },
  {
    title: "Intelligence Artificielle et Marketing Digital",
    slug: "ia-marketing-digital",
    excerpt: "Comment l'IA transforme le marketing digital et les opportunités qu'elle offre aux entreprises innovantes.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "L'IA au Service du Marketing" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Chatbots, personnalisation, prédiction... L'IA révolutionne la relation client et l'efficacité marketing." }
            ]
          }
        ]
      }
    },
    imageIndex: 7
  },
  {
    title: "Stratégie de Netlinking : Construire une Autorité Durable",
    slug: "strategie-netlinking-autorite",
    excerpt: "Guide expert pour développer une stratégie de netlinking efficace et pérenne qui booste votre autorité de domaine.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "Pourquoi le Netlinking reste Important" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Les backlinks de qualité sont toujours un facteur de ranking majeur. Découvrez comment les obtenir." }
            ]
          }
        ]
      }
    },
    imageIndex: 8
  },
  {
    title: "Audit SEO Complet : Checklist en 50 Points",
    slug: "audit-seo-checklist",
    excerpt: "La checklist ultime pour réaliser un audit SEO professionnel et identifier toutes les opportunités d'optimisation.",
    content: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "heading",
            children: [{ type: "text", text: "Comment Réaliser un Audit SEO" }],
            tag: "h2"
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Un audit SEO complet examine technique, contenu, popularité et UX. Suivez notre checklist détaillée." }
            ]
          }
        ]
      }
    },
    imageIndex: 9
  }
]

async function downloadImage(url: string): Promise<Buffer> {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

export const seedPosts: PayloadHandler = async (req) => {
  const { payload } = req

  try {
    const createdPosts = []

    for (let i = 0; i < POSTS.length; i++) {
      const post = POSTS[i]
      req.payload.logger.info(`Creating post ${i + 1}/10: ${post.title}`)

      // Download image
      const imageBuffer = await downloadImage(IMAGES[post.imageIndex])

      // Upload image
      const imageDoc = await payload.create({
        collection: 'media',
        data: {
          alt: post.title,
        },
        file: {
          data: imageBuffer,
          mimetype: 'image/jpeg',
          name: `blog-post-${i + 1}.jpg`,
          size: imageBuffer.length,
        },
        req,
      })

      // Create post
      const postDoc = await payload.create({
        collection: 'posts',
        data: {
          title: post.title,
          slug: post.slug,
          meta: {
            title: post.title,
            description: post.excerpt,
          },
          hero: {
            type: 'simple',
            simpleHeading: post.title,
            headingColor: 'primary'
          },
          content: post.content,
          featuredImage: imageDoc.id,
          publishedAt: new Date().toISOString(),
          _status: 'published'
        } as any,
        req,
      })

      createdPosts.push(postDoc)
      req.payload.logger.info(`Post created: ${post.slug}`)
    }

    return Response.json({
      message: '10 blog posts created successfully!',
      posts: createdPosts.map(p => ({ id: p.id, title: p.title, slug: p.slug }))
    })

  } catch (error: any) {
    req.payload.logger.error('Error seeding posts:', error)
    return Response.json({
      error: 'Failed to seed posts',
      details: error.message
    }, { status: 500 })
  }
}
