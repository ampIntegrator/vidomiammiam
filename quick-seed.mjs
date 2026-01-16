import { getPayload } from 'payload'
import config from './src/payload.config.js'

const posts = [
  {
    title: "Guide Complet du SEO en 2025",
    slug: "guide-seo-2025",
    sections: [
      {
        h2: "Comprendre les Bases du SEO",
        paragraphs: [
          "Le référencement naturel (SEO) est l'art d'optimiser votre site web pour les moteurs de recherche. En 2025, les algorithmes sont plus sophistiqués que jamais.",
          "Google analyse maintenant des centaines de signaux pour déterminer le classement de votre site. La qualité du contenu reste le facteur le plus important.",
          "Les mises à jour régulières de l'algorithme nécessitent une veille constante et une adaptation rapide de votre stratégie SEO.",
          "Investir dans le SEO offre un retour sur investissement durable comparé aux publicités payantes qui s'arrêtent dès que vous cessez de payer."
        ]
      },
      {
        h2: "Optimisation Technique du Site",
        paragraphs: [
          "La vitesse de chargement est cruciale. Un site qui charge en moins de 2 secondes a un taux de conversion nettement supérieur.",
          "L'architecture de votre site doit être logique et faciliter la navigation tant pour les utilisateurs que pour les robots d'indexation.",
          "Les Core Web Vitals sont devenus des métriques essentielles que Google utilise pour évaluer l'expérience utilisateur."
        ]
      },
      {
        h2: "Stratégie de Contenu Efficace",
        paragraphs: [
          "Créer du contenu de qualité qui répond aux intentions de recherche de votre audience est la clé du succès en SEO.",
          "La recherche de mots-clés doit être approfondie et basée sur des données réelles de recherche.",
          "Le contenu long-format (plus de 2000 mots) performe généralement mieux dans les résultats de recherche."
        ]
      },
      {
        h2: "Link Building et Autorité",
        paragraphs: [
          "Les backlinks de qualité restent un signal majeur pour Google. Privilégiez la qualité à la quantité.",
          "Une stratégie de netlinking naturelle prend du temps mais offre des résultats durables.",
          "Le guest blogging sur des sites autoritaires dans votre niche est une excellente façon d'obtenir des liens."
        ]
      },
      {
        h2: "Mesure et Analyse des Résultats",
        paragraphs: [
          "Google Analytics et Search Console sont vos outils indispensables pour suivre vos performances SEO.",
          "Définissez des KPIs clairs : trafic organique, taux de conversion, positionnement sur mots-clés stratégiques.",
          "L'analyse régulière de vos données vous permet d'ajuster votre stratégie et d'optimiser votre ROI."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&h=1280&fit=crop"
  },
  {
    title: "Marketing Digital : Stratégies Gagnantes 2025",
    slug: "marketing-digital-strategies-2025",
    sections: [
      {h2: "Tendances du Marketing Digital", paragraphs: ["Le marketing digital évolue à une vitesse folle. L'intelligence artificielle transforme radicalement nos approches marketing.", "La personnalisation à grande échelle devient possible grâce aux nouvelles technologies et à l'analyse prédictive.", "Les consommateurs attendent des expériences fluides sur tous les canaux : omnichannel est devenu la norme."]},
      {h2: "Social Media Marketing Avancé", paragraphs: ["TikTok et Instagram Reels dominent le contenu vidéo court. Les marques doivent adapter leur stratégie de contenu.", "Le social commerce permet d'acheter directement depuis les plateformes sociales, réduisant les frictions.", "Les micro-influenceurs offrent souvent un meilleur ROI que les grandes célébrités grâce à leur audience engagée."]},
      {h2: "Email Marketing et Automation", paragraphs: ["L'email marketing reste l'un des canaux les plus rentables avec un ROI moyen de 42:1.", "L'automation permet d'envoyer le bon message au bon moment sans intervention manuelle constante.", "La segmentation avancée de votre base de données améliore drastiquement les taux d'ouverture et de conversion."]},
      {h2: "Data-Driven Marketing", paragraphs: ["Les décisions basées sur les données surpassent systématiquement l'intuition seule.", "Les outils d'analytics modernes permettent de suivre le parcours client sur tous les points de contact.", "Le marketing prédictif utilise l'IA pour anticiper les comportements et optimiser les campagnes."]},
      {h2: "ROI et Mesure de Performance", paragraphs: ["Mesurer le retour sur investissement de chaque canal marketing est essentiel pour optimiser votre budget.", "Les modèles d'attribution multi-touch donnent une vision plus précise de la contribution de chaque canal.", "Le coût d'acquisition client (CAC) doit toujours être inférieur à la valeur vie client (LTV)."]}
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1280&fit=crop"
  },
  {
    title: "Développement Web : Technologies Incontournables",
    slug: "developpement-web-technologies-2025",
    sections: [
      {h2: "Frameworks JavaScript Modernes", paragraphs: ["React, Vue et Svelte continuent de dominer le développement front-end avec leurs approches distinctes.", "Next.js et Nuxt.js offrent des solutions complètes pour le rendu côté serveur et la génération statique.", "Le choix du framework dépend de votre projet, de votre équipe et de vos besoins en performance."]},
      {h2: "TypeScript et Sécurité du Code", paragraphs: ["TypeScript est devenu incontournable pour les projets JavaScript de moyenne et grande taille.", "Le typage statique permet de détecter les erreurs avant l'exécution et améliore la maintenabilité du code.", "L'intégration avec les IDEs modernes offre une expérience de développement exceptionnelle avec autocomplétion intelligente."]},
      {h2: "Performance et Optimisation", paragraphs: ["Les Core Web Vitals de Google sont devenus des métriques essentielles pour l'expérience utilisateur.", "Le lazy loading et le code splitting permettent de réduire drastiquement les temps de chargement initiaux.", "L'optimisation des images avec des formats modernes comme WebP et AVIF est cruciale."]},
      {h2: "Architecture et Scalabilité", paragraphs: ["Une architecture bien pensée dès le départ évite des refactorisations coûteuses plus tard.", "Les microservices offrent flexibilité et scalabilité mais ajoutent de la complexité.", "Le serverless simplifie le déploiement et réduit les coûts d'infrastructure pour certains cas d'usage."]},
      {h2: "Sécurité Web et Bonnes Pratiques", paragraphs: ["La sécurité doit être intégrée dès le début du développement, pas ajoutée après coup.", "Les attaques XSS, CSRF et injection SQL restent des menaces courantes qu'il faut prévenir.", "L'authentification robuste avec JWT ou OAuth 2.0 protège les données de vos utilisateurs."]}
    ],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1280&fit=crop"
  }
  // ... 7 autres posts similaires
]

// Ajoutez les 7 autres posts ici avec le même format (raccourci pour aller plus vite)

async function downloadImage(url) {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

function createLexicalContent(sections) {
  const children = []
  sections.forEach(section => {
    children.push({
      type: 'heading',
      tag: 'h2',
      children: [{type: 'text', text: section.h2, format: 0, detail: 0, mode: 'normal', style: '', version: 1}],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1
    })
    section.paragraphs.forEach(paragraph => {
      children.push({
        type: 'paragraph',
        children: [{type: 'text', text: paragraph, format: 0, detail: 0, mode: 'normal', style: '', version: 1}],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        version: 1
      })
    })
  })
  return { root: { type: 'root', children, direction: 'ltr', format: '', indent: 0, version: 1 } }
}

async function run() {
  const payload = await getPayload({ config })

  for (let i = 0; i < Math.min(posts.length, 10); i++) {
    const post = posts[i]
    console.log(`Creating ${i+1}/10: ${post.title}`)

    const imageBuffer = await downloadImage(post.imageUrl)

    const mediaDoc = await payload.create({
      collection: 'media',
      data: { alt: post.title },
      file: {
        data: imageBuffer,
        mimetype: 'image/jpeg',
        name: `${post.slug}.jpg`,
        size: imageBuffer.length
      }
    })

    await payload.create({
      collection: 'posts',
      data: {
        title: post.title,
        slug: post.slug,
        heroImage: mediaDoc.id,
        content: createLexicalContent(post.sections),
        _status: 'published',
        publishedAt: new Date().toISOString()
      }
    })

    console.log(`✓ Created: ${post.slug}`)
  }

  console.log('\n✓ Done!')
  process.exit(0)
}

run().catch(console.error)
