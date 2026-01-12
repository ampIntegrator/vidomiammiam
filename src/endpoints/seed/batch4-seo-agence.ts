import type { RequiredDataFromCollectionSlug } from 'payload'

// Helper function to create slug from keyword
const createSlug = (keyword: string): string => {
  return keyword
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Helper to create rich text heading
const createHeading = (text: string, tag: 'h1' | 'h2' | 'h3' = 'h2') => ({
  type: 'heading',
  children: [
    {
      type: 'text',
      detail: 0,
      format: 0,
      mode: 'normal',
      style: '',
      text,
      version: 1,
    },
  ],
  direction: 'ltr',
  format: '',
  indent: 0,
  tag,
  version: 1,
})

// Helper to create rich text paragraph
const createParagraph = (text: string) => ({
  type: 'paragraph',
  children: [
    {
      type: 'text',
      detail: 0,
      format: 0,
      mode: 'normal',
      style: '',
      text,
      version: 1,
    },
  ],
  direction: 'ltr',
  format: '',
  indent: 0,
  textFormat: 0,
  version: 1,
})

// Batch 4 Pages - SEO & Agency focused

export const auditSeo: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Audit SEO : Analysez et optimisez votre référencement',
    _status: 'published',
    slug: 'audit-seo',
    meta: {
      title: 'Audit SEO complet : Analysez votre référencement - UPTO1',
      description:
        'Réalisez un audit SEO complet de votre site web. Identifiez les opportunités d\'optimisation et améliorez votre visibilité sur Google.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'SEO Audit',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'audit seo',
      relatedKeywords: [
        { keyword: 'analyse seo' },
        { keyword: 'diagnostic référencement' },
        { keyword: 'optimisation seo' },
        { keyword: 'audit référencement naturel' },
      ],
    },
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [createHeading('Audit SEO : Analysez et optimisez votre référencement', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Audit SEO : Analysez et optimisez votre référencement',
        subheading:
          'Un audit SEO complet pour identifier tous les points bloquants et les opportunités d\'amélioration de votre référencement naturel.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Demander un audit',
              appearance: 'default',
              url: '/seo/audit-seo-gratuit-de-votre-site-internet/',
            },
          },
        ],
        badges: [
          {
            value: '200+',
            label: 'Critères analysés',
            icon: 'icon-check',
          },
          {
            value: '24h',
            label: 'Délai de livraison',
            icon: 'icon-clock',
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  createHeading('Qu\'est-ce qu\'un audit SEO ?'),
                  createParagraph(
                    'Un audit SEO est une analyse complète de votre site web pour identifier tous les facteurs qui impactent votre positionnement dans les résultats de recherche Google. Il examine les aspects techniques, le contenu, les liens et l\'expérience utilisateur.'
                  ),
                  createHeading('Pourquoi réaliser un audit SEO ?'),
                  createParagraph(
                    'L\'audit SEO permet d\'identifier les problèmes techniques, les opportunités de contenu, et les axes d\'amélioration pour augmenter votre visibilité sur les moteurs de recherche et générer plus de trafic qualifié vers votre site.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'statistics',
        title: 'Notre méthode d\'audit SEO',
        layout: 'grid-3',
        stats: [
          {
            value: '200+',
            label: 'Critères techniques',
            description: 'Analyse approfondie de tous les aspects techniques',
            color: 'primary',
            icon: 'icon-code',
          },
          {
            value: '100%',
            label: 'Analyse de contenu',
            description: 'Évaluation complète de votre stratégie éditoriale',
            color: 'success',
            icon: 'icon-file-text',
          },
          {
            value: 'Top 10',
            label: 'Objectif ranking',
            description: 'Recommandations pour atteindre le top 10',
            color: 'danger',
            icon: 'icon-chart-line',
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions fréquentes sur l\'audit SEO',
        faqs: [
          {
            question: 'Combien de temps dure un audit SEO ?',
            answer:
              'Un audit SEO complet prend généralement entre 3 et 5 jours selon la taille de votre site. Nous analysons entre 200 et 300 critères pour vous fournir un rapport détaillé.',
          },
          {
            question: 'Quel est le prix d\'un audit SEO ?',
            answer:
              'Le prix d\'un audit SEO varie selon la taille de votre site et vos besoins. Contactez-nous pour un devis personnalisé. Nous proposons également un audit gratuit pour démarrer.',
          },
          {
            question: 'Quels sont les livrables d\'un audit SEO ?',
            answer:
              'Vous recevez un rapport complet avec l\'analyse de tous les points bloquants, une liste priorisée de recommandations, et un plan d\'action détaillé pour améliorer votre référencement.',
          },
        ],
      },
    ],
  }
}

export const agenceCommunication: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Agence de communication digitale : Stratégie & Créativité',
    _status: 'published',
    slug: 'agence-communication-digitale',
    meta: {
      title: 'Agence de communication digitale & Stratégie - UPTO1',
      description:
        'Agence de communication digitale experte. Stratégie marketing, création de contenu, et accompagnement personnalisé pour développer votre marque.',
      schema: {
        type: 'Organization',
        customData: {
          '@type': 'ProfessionalService',
          serviceType: 'Communication digitale',
          areaServed: 'FR',
        },
      },
      focusKeyword: 'agence de communication',
      relatedKeywords: [
        { keyword: 'agence communication digitale' },
        { keyword: 'stratégie communication' },
        { keyword: 'agence marketing' },
        { keyword: 'communication web' },
      ],
    },
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [createHeading('Agence de communication digitale', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Agence de communication digitale : Stratégie & Créativité',
        subheading:
          'Votre partenaire pour une communication digitale efficace. Stratégie, création, et déploiement de vos campagnes marketing.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Découvrir nos services',
              appearance: 'default',
              url: '#services',
            },
          },
        ],
        badges: [
          {
            value: '10 ans',
            label: 'D\'expérience',
            icon: 'icon-award',
          },
          {
            value: '200+',
            label: 'Clients accompagnés',
            icon: 'icon-users',
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  createHeading('Agence de communication digitale'),
                  createParagraph(
                    'Nous sommes une agence de communication digitale spécialisée dans la stratégie marketing, la création de contenu et l\'accompagnement des entreprises dans leur transformation digitale. Notre approche combine créativité, données et expertise technique.'
                  ),
                  createHeading('Nos services de communication digitale'),
                  createParagraph(
                    'Stratégie de marque, content marketing, SEO, SEA, social media, email marketing... Nous vous accompagnons sur tous les leviers de la communication digitale pour atteindre vos objectifs de croissance.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Nos expertises',
        layout: 'grid-3',
        boxes: [
          {
            icon: 'icon-target',
            title: 'Stratégie digitale',
            description:
              'Définition de votre stratégie de communication digitale et plan d\'action sur mesure',
            color: 'primary',
          },
          {
            icon: 'icon-edit',
            title: 'Création de contenu',
            description:
              'Rédaction, design, vidéo : nous créons du contenu qui engage votre audience',
            color: 'success',
          },
          {
            icon: 'icon-chart-line',
            title: 'Performance & Analytics',
            description:
              'Mesure et optimisation continue de vos performances marketing',
            color: 'danger',
          },
        ],
      },
    ],
  }
}

export const consultantSeo: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Consultant SEO : Expert en référencement naturel',
    _status: 'published',
    slug: 'consultant-seo',
    meta: {
      title: 'Consultant SEO Expert | Référencement naturel - UPTO1',
      description:
        'Consultant SEO expert pour optimiser votre référencement naturel. Audit, stratégie et accompagnement personnalisé pour booster votre visibilité Google.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'SEO Consulting',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'consultant seo',
      relatedKeywords: [
        { keyword: 'expert seo' },
        { keyword: 'consultant référencement' },
        { keyword: 'freelance seo' },
        { keyword: 'spécialiste seo' },
      ],
    },
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [createHeading('Consultant SEO : Expert en référencement naturel', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Consultant SEO : Expert en référencement naturel',
        subheading:
          'Consultant SEO expérimenté pour développer votre visibilité sur Google. Audit, stratégie et optimisations pour générer du trafic qualifié.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Prendre rendez-vous',
              appearance: 'default',
              url: '#contact',
            },
          },
        ],
        badges: [
          {
            value: '15 ans',
            label: 'D\'expérience SEO',
            icon: 'icon-award',
          },
          {
            value: 'Top 3',
            label: 'Résultats garantis',
            icon: 'icon-chart-line',
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  createHeading('Pourquoi faire appel à un consultant SEO ?'),
                  createParagraph(
                    'Un consultant SEO expert vous accompagne dans l\'optimisation de votre référencement naturel. Grâce à une analyse approfondie et une stratégie sur mesure, il identifie les leviers de croissance et met en place les actions pour améliorer votre positionnement sur Google.'
                  ),
                  createHeading('Les missions d\'un consultant SEO'),
                  createParagraph(
                    'Audit technique et sémantique, recherche de mots-clés, optimisation on-page et off-page, stratégie de contenu, netlinking, suivi des performances... Le consultant SEO pilote votre stratégie de référencement de A à Z.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Notre méthodologie SEO',
        features: [
          {
            number: '01',
            title: 'Audit SEO complet',
            description:
              'Analyse technique, sémantique et concurrentielle pour identifier tous les axes d\'amélioration',
            color: 'success',
          },
          {
            number: '02',
            title: 'Stratégie personnalisée',
            description:
              'Définition d\'une roadmap SEO adaptée à vos objectifs et votre secteur d\'activité',
            color: 'primary',
          },
          {
            number: '03',
            title: 'Optimisations & Suivi',
            description:
              'Mise en œuvre des recommandations et suivi régulier des performances',
            color: 'danger',
          },
          {
            number: '04',
            title: 'Reporting & Ajustements',
            description:
              'Rapports détaillés et ajustements continus pour maximiser les résultats',
            color: 'warning',
          },
        ],
      },
    ],
  }
}

export const abTest: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'AB Test : Optimisez vos conversions avec l\'A/B Testing',
    _status: 'published',
    slug: 'ab-test',
    meta: {
      title: 'AB Test : Guide complet de l\'A/B Testing - UPTO1',
      description:
        'Découvrez l\'AB Testing pour optimiser vos conversions. Méthodologie, outils et bonnes pratiques pour tester et améliorer vos performances.',
      schema: {
        type: 'Article',
        customData: {
          articleSection: 'Growth Hacking',
          wordCount: 2200,
        },
      },
      focusKeyword: 'ab test',
      relatedKeywords: [
        { keyword: 'a/b testing' },
        { keyword: 'test multivarié' },
        { keyword: 'optimisation conversion' },
        { keyword: 'cro' },
      ],
    },
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [createHeading('AB Test : Optimisez vos conversions', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'AB Test : Optimisez vos conversions avec l\'A/B Testing',
        subheading:
          'Testez, mesurez, optimisez. L\'AB Testing vous permet de prendre des décisions data-driven pour améliorer vos taux de conversion.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'reference',
              label: 'En savoir plus',
              appearance: 'default',
              reference: {
                relationTo: 'pages',
                value: 'growth-hacking',
              },
            },
          },
        ],
        badges: [
          {
            value: '+30%',
            label: 'Gain moyen de conversion',
            icon: 'icon-chart-line',
          },
          {
            value: '95%',
            label: 'Niveau de confiance',
            icon: 'icon-check',
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  createHeading('Qu\'est-ce que l\'AB Testing ?'),
                  createParagraph(
                    'L\'AB Testing (ou A/B Testing) est une méthode d\'expérimentation qui consiste à comparer deux versions d\'une page web, d\'un email ou d\'un élément pour déterminer laquelle performe le mieux. En testant des variantes auprès de vos utilisateurs, vous identifiez les éléments qui maximisent vos conversions.'
                  ),
                  createHeading('Comment mettre en place un AB Test ?'),
                  createParagraph(
                    'Pour réussir un AB Test, il faut définir un objectif clair, formuler une hypothèse, créer des variantes, répartir le trafic équitablement, mesurer les résultats avec un niveau de confiance de 95% minimum, et implémenter la version gagnante.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions sur l\'AB Testing',
        faqs: [
          {
            question: 'Combien de temps dure un AB Test ?',
            answer:
              'La durée d\'un AB Test dépend du trafic de votre site et du taux de conversion. En général, il faut compter entre 2 et 4 semaines pour obtenir des résultats statistiquement significatifs.',
          },
          {
            question: 'Quels éléments peut-on tester avec l\'AB Testing ?',
            answer:
              'Vous pouvez tester pratiquement tous les éléments : titres, boutons CTA, couleurs, images, textes, formulaires, mise en page, navigation... L\'important est de tester un élément à la fois pour isoler son impact.',
          },
          {
            question: 'Quels outils utiliser pour l\'AB Testing ?',
            answer:
              'Les outils les plus populaires sont Google Optimize (gratuit), Optimizely, VWO, AB Tasty et Convert. Le choix dépend de votre budget et de vos besoins en fonctionnalités avancées.',
          },
        ],
      },
    ],
  }
}

export const agenceWeb: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Agence Web : Création de sites et stratégie digitale',
    _status: 'published',
    slug: 'agence-web',
    meta: {
      title: 'Agence Web : Création de sites & Marketing digital - UPTO1',
      description:
        'Agence web experte en création de sites internet, SEO et stratégie digitale. Accompagnement personnalisé pour développer votre présence en ligne.',
      schema: {
        type: 'Organization',
        customData: {
          '@type': 'ProfessionalService',
          serviceType: 'Agence Web',
          areaServed: 'FR',
        },
      },
      focusKeyword: 'agence web',
      relatedKeywords: [
        { keyword: 'création site web' },
        { keyword: 'agence digitale' },
        { keyword: 'développement web' },
        { keyword: 'webmarketing' },
      ],
    },
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [createHeading('Agence Web : Création & Stratégie digitale', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Agence Web : Création de sites et stratégie digitale',
        subheading:
          'Votre partenaire pour tous vos projets web. De la création de site internet à la stratégie marketing digitale, nous vous accompagnons vers le succès.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Nos réalisations',
              appearance: 'default',
              url: '#portfolio',
            },
          },
        ],
        badges: [
          {
            value: '500+',
            label: 'Sites créés',
            icon: 'icon-globe',
          },
          {
            value: '100%',
            label: 'Clients satisfaits',
            icon: 'icon-star',
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  createHeading('Agence web full-service'),
                  createParagraph(
                    'Notre agence web vous accompagne de A à Z dans vos projets digitaux. Création de sites web sur mesure, applications mobiles, e-commerce, SEO, webmarketing... Nous combinons expertise technique et créativité pour donner vie à vos ambitions.'
                  ),
                  createHeading('Pourquoi choisir notre agence web ?'),
                  createParagraph(
                    'Expertise multi-disciplinaire, accompagnement personnalisé, technologies modernes, méthodologie agile, et résultats mesurables. Nous ne créons pas seulement des sites web, nous créons des expériences digitales qui convertissent.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Nos services web',
        layout: 'grid-4',
        boxes: [
          {
            icon: 'icon-code',
            title: 'Développement web',
            description: 'Sites vitrine, e-commerce, applications sur mesure',
            color: 'primary',
          },
          {
            icon: 'icon-search',
            title: 'SEO & Référencement',
            description: 'Optimisation pour les moteurs de recherche',
            color: 'success',
          },
          {
            icon: 'icon-chart-line',
            title: 'Webmarketing',
            description: 'Stratégie digitale et acquisition de trafic',
            color: 'danger',
          },
          {
            icon: 'icon-settings',
            title: 'Maintenance & Support',
            description: 'Hébergement, mises à jour et assistance',
            color: 'warning',
          },
        ],
      },
    ],
  }
}

// Export all pages as an array
export const batch4Pages = [
  auditSeo,
  agenceCommunication,
  consultantSeo,
  abTest,
  agenceWeb,
]
