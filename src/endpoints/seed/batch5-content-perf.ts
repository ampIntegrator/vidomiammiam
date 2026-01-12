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

// Batch 5 Pages - Content & Performance focused

export const creationContenus: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Création de contenus : Stratégie éditoriale & Rédaction',
    _status: 'published',
    slug: 'creation-contenus',
    meta: {
      title: 'Création de contenus : Stratégie & Rédaction web - UPTO1',
      description:
        'Agence de création de contenus : rédaction web, stratégie éditoriale, content marketing. Générez du trafic qualifié avec des contenus optimisés SEO.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'Content Creation',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'création de contenus',
      relatedKeywords: [
        { keyword: 'rédaction web' },
        { keyword: 'content marketing' },
        { keyword: 'stratégie éditoriale' },
        { keyword: 'rédaction seo' },
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
          children: [createHeading('Création de contenus : Stratégie éditoriale & Rédaction', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Création de contenus : Stratégie éditoriale & Rédaction web',
        subheading:
          'Du contenu qui attire, engage et convertit. Notre équipe de rédacteurs experts crée des contenus optimisés pour votre audience et les moteurs de recherche.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Découvrir nos offres',
              appearance: 'default',
              url: '#services',
            },
          },
        ],
        badges: [
          {
            value: '10K+',
            label: 'Contenus créés',
            icon: 'icon-file-text',
          },
          {
            value: '95%',
            label: 'Taux de satisfaction',
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
                  createHeading('Pourquoi investir dans la création de contenus ?'),
                  createParagraph(
                    'Le contenu est au cœur de votre stratégie digitale. Un contenu de qualité améliore votre référencement naturel, renforce votre expertise, génère du trafic qualifié et transforme vos visiteurs en clients. C\'est un investissement rentable sur le long terme.'
                  ),
                  createHeading('Notre approche de création de contenus'),
                  createParagraph(
                    'Nous combinons expertise éditoriale et optimisation SEO. Recherche de mots-clés, analyse de l\'intention de recherche, rédaction engageante, optimisation on-page, et mesure des performances. Chaque contenu est conçu pour atteindre vos objectifs marketing.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Notre processus de création',
        features: [
          {
            number: '01',
            title: 'Stratégie éditoriale',
            description:
              'Définition de votre ligne éditoriale, personas, et planning de publication',
            color: 'success',
          },
          {
            number: '02',
            title: 'Recherche & Brief',
            description:
              'Analyse des mots-clés, intentions de recherche et création du brief rédactionnel',
            color: 'primary',
          },
          {
            number: '03',
            title: 'Rédaction optimisée',
            description:
              'Rédaction par nos experts avec optimisation SEO et respect de votre charte éditoriale',
            color: 'danger',
          },
          {
            number: '04',
            title: 'Publication & Suivi',
            description:
              'Mise en ligne, promotion et analyse des performances de vos contenus',
            color: 'warning',
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Types de contenus',
        layout: 'grid-3',
        boxes: [
          {
            icon: 'icon-file-text',
            title: 'Articles de blog',
            description: 'Articles optimisés SEO pour générer du trafic organique',
            color: 'primary',
          },
          {
            icon: 'icon-book',
            title: 'Livres blancs',
            description: 'Contenus premium pour générer des leads qualifiés',
            color: 'success',
          },
          {
            icon: 'icon-mail',
            title: 'Newsletters',
            description: 'Contenus engageants pour fidéliser votre audience',
            color: 'danger',
          },
        ],
      },
    ],
  }
}

export const longueTraine: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Longue Traîne : Stratégie SEO pour mots-clés longue traîne',
    _status: 'published',
    slug: 'longue-traine',
    meta: {
      title: 'Longue Traîne SEO : Guide complet & Stratégie - UPTO1',
      description:
        'Découvrez la stratégie de longue traîne pour votre SEO. Ciblage de mots-clés spécifiques, conversion élevée et trafic qualifié garanti.',
      schema: {
        type: 'Article',
        customData: {
          articleSection: 'SEO',
          wordCount: 2500,
        },
      },
      focusKeyword: 'longue traîne',
      relatedKeywords: [
        { keyword: 'mots-clés longue traîne' },
        { keyword: 'long tail seo' },
        { keyword: 'stratégie mots-clés' },
        { keyword: 'recherche mots-clés' },
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
          children: [createHeading('Longue Traîne : Stratégie SEO avancée', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Longue Traîne : Stratégie SEO pour mots-clés spécifiques',
        subheading:
          'Exploitez le potentiel des mots-clés de longue traîne pour générer du trafic qualifié et améliorer vos conversions.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'reference',
              label: 'Audit SEO gratuit',
              appearance: 'default',
              reference: {
                relationTo: 'pages',
                value: 'audit-seo-gratuit-de-votre-site-internet',
              },
            },
          },
        ],
        badges: [
          {
            value: '70%',
            label: 'Du trafic total',
            icon: 'icon-chart-line',
          },
          {
            value: '2-5x',
            label: 'Meilleur taux de conversion',
            icon: 'icon-target',
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
                  createHeading('Qu\'est-ce que la longue traîne ?'),
                  createParagraph(
                    'La longue traîne (long tail en anglais) désigne l\'ensemble des mots-clés spécifiques et peu recherchés qui, cumulés, génèrent plus de trafic que les mots-clés génériques. Ces requêtes de 3 mots ou plus représentent 70% des recherches sur Google et ont un taux de conversion 2 à 5 fois supérieur.'
                  ),
                  createHeading('Pourquoi cibler la longue traîne ?'),
                  createParagraph(
                    'Les mots-clés de longue traîne sont moins concurrentiels, plus faciles à positionner, et attirent des visiteurs avec une intention d\'achat claire. Ils permettent de créer du contenu ultra-ciblé qui répond précisément aux besoins de votre audience.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'statistics',
        title: 'La puissance de la longue traîne',
        layout: 'grid-3',
        stats: [
          {
            value: '70%',
            label: 'Des recherches Google',
            description: 'Sont des requêtes de longue traîne',
            color: 'primary',
            icon: 'icon-search',
          },
          {
            value: '2-5x',
            label: 'Taux de conversion',
            description: 'Supérieur aux mots-clés génériques',
            color: 'success',
            icon: 'icon-chart-line',
          },
          {
            value: '-80%',
            label: 'De concurrence',
            description: 'Plus facile à positionner',
            color: 'danger',
            icon: 'icon-target',
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions sur la longue traîne',
        faqs: [
          {
            question: 'Comment trouver des mots-clés de longue traîne ?',
            answer:
              'Utilisez Google Autocomplete, la section "Recherches associées", Answer The Public, Ubersuggest, ou analysez les requêtes de votre Search Console. Les forums et réseaux sociaux sont aussi d\'excellentes sources.',
          },
          {
            question: 'Combien de mots-clés de longue traîne cibler ?',
            answer:
              'Il n\'y a pas de limite ! Plus vous créez de contenu ciblant des requêtes spécifiques, plus vous augmentez vos chances de générer du trafic qualifié. Priorisez selon le volume et l\'intention commerciale.',
          },
          {
            question: 'Comment optimiser pour la longue traîne ?',
            answer:
              'Créez du contenu détaillé et spécialisé, utilisez des titres et sous-titres naturels intégrant vos requêtes, répondez aux questions précises de votre audience, et structurez vos pages avec du balisage schema.',
          },
        ],
      },
    ],
  }
}

export const webPerformance: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Web Performance : Optimisation vitesse et performances web',
    _status: 'published',
    slug: 'web-performance',
    meta: {
      title: 'Web Performance : Optimisation vitesse site web - UPTO1',
      description:
        'Optimisez les performances de votre site web. Core Web Vitals, temps de chargement, et expérience utilisateur optimale pour booster vos conversions.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'Web Performance Optimization',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'web performance',
      relatedKeywords: [
        { keyword: 'optimisation performance web' },
        { keyword: 'core web vitals' },
        { keyword: 'vitesse site web' },
        { keyword: 'temps chargement' },
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
          children: [createHeading('Web Performance : Optimisation vitesse web', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Web Performance : Optimisez la vitesse de votre site',
        subheading:
          'Un site rapide = meilleur SEO + plus de conversions. Optimisez vos Core Web Vitals et offrez une expérience utilisateur exceptionnelle.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'reference',
              label: 'Guide Core Web Vitals',
              appearance: 'default',
              reference: {
                relationTo: 'pages',
                value: 'webvitals-guide-lcp-cls-fid-essentiel',
              },
            },
          },
        ],
        badges: [
          {
            value: '< 2s',
            label: 'Temps de chargement idéal',
            icon: 'icon-clock',
          },
          {
            value: '+30%',
            label: 'Gain de conversion',
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
                  createHeading('Pourquoi optimiser les performances web ?'),
                  createParagraph(
                    'La performance web impacte directement votre SEO, vos conversions et l\'expérience utilisateur. Google utilise les Core Web Vitals comme facteur de classement. Un site qui charge en moins de 2 secondes convertit jusqu\'à 30% mieux qu\'un site lent. Chaque seconde compte !'
                  ),
                  createHeading('Les indicateurs clés de performance'),
                  createParagraph(
                    'Les Core Web Vitals mesurent trois aspects essentiels : LCP (Largest Contentful Paint) pour la vitesse de chargement, FID (First Input Delay) pour l\'interactivité, et CLS (Cumulative Layout Shift) pour la stabilité visuelle. Optimiser ces métriques améliore l\'expérience utilisateur et votre référencement.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'statistics',
        title: 'Impact de la performance web',
        layout: 'grid-3',
        stats: [
          {
            value: '53%',
            label: 'D\'utilisateurs quittent',
            description: 'Si le chargement prend plus de 3 secondes',
            color: 'danger',
            icon: 'icon-clock',
          },
          {
            value: '+32%',
            label: 'De conversions',
            description: 'Avec un temps de chargement < 2s',
            color: 'success',
            icon: 'icon-chart-line',
          },
          {
            value: 'Top 10',
            label: 'Facteur SEO',
            description: 'Core Web Vitals depuis 2021',
            color: 'primary',
            icon: 'icon-search',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Comment optimiser les performances',
        features: [
          {
            number: '01',
            title: 'Optimisation images',
            description:
              'Compression, formats modernes (WebP, AVIF), lazy loading, et responsive images',
            color: 'success',
          },
          {
            number: '02',
            title: 'Minification & Compression',
            description:
              'Minification CSS/JS, compression Gzip/Brotli, et bundling optimisé',
            color: 'primary',
          },
          {
            number: '03',
            title: 'Cache & CDN',
            description:
              'Mise en cache navigateur, CDN global, et stratégies de cache intelligentes',
            color: 'danger',
          },
          {
            number: '04',
            title: 'Code Optimization',
            description:
              'Élimination du code inutile, critical CSS, et JavaScript différé',
            color: 'warning',
          },
        ],
      },
    ],
  }
}

export const specialisteSeo: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Spécialiste SEO : Expert en référencement naturel',
    _status: 'published',
    slug: 'specialiste-seo',
    meta: {
      title: 'Spécialiste SEO : Expert référencement naturel - UPTO1',
      description:
        'Faites appel à un spécialiste SEO expert pour optimiser votre référencement naturel. Audit, stratégie et accompagnement personnalisé.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'SEO Services',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'spécialiste seo',
      relatedKeywords: [
        { keyword: 'expert seo' },
        { keyword: 'consultant seo' },
        { keyword: 'référenceur professionnel' },
        { keyword: 'agence seo' },
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
          children: [createHeading('Spécialiste SEO : Expert en référencement', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Spécialiste SEO : Expert en référencement naturel',
        subheading:
          'Bénéficiez de l\'expertise d\'un spécialiste SEO pour développer votre visibilité sur Google et générer du trafic qualifié.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Prendre contact',
              appearance: 'default',
              url: '#contact',
            },
          },
        ],
        badges: [
          {
            value: '12 ans',
            label: 'D\'expertise SEO',
            icon: 'icon-award',
          },
          {
            value: '300+',
            label: 'Projets réussis',
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
                  createHeading('Qu\'est-ce qu\'un spécialiste SEO ?'),
                  createParagraph(
                    'Un spécialiste SEO est un expert du référencement naturel qui maîtrise tous les aspects techniques, éditoriaux et stratégiques pour optimiser la visibilité d\'un site web sur les moteurs de recherche. Il analyse, planifie et met en œuvre des stratégies pour améliorer le positionnement et générer du trafic organique qualifié.'
                  ),
                  createHeading('Les compétences d\'un spécialiste SEO'),
                  createParagraph(
                    'Analyse technique (crawl, indexation, performance), recherche et analyse de mots-clés, optimisation on-page et off-page, stratégie de contenu, netlinking, veille algorithmique, et analytics. Un spécialiste SEO combine expertise technique et vision stratégique.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Nos services SEO',
        layout: 'grid-3',
        boxes: [
          {
            icon: 'icon-search',
            title: 'Audit SEO complet',
            description: 'Analyse approfondie technique, sémantique et concurrentielle',
            color: 'primary',
          },
          {
            icon: 'icon-chart-line',
            title: 'Stratégie SEO',
            description: 'Plan d\'action personnalisé pour atteindre vos objectifs',
            color: 'success',
          },
          {
            icon: 'icon-settings',
            title: 'Optimisations & Suivi',
            description: 'Mise en œuvre et monitoring des performances',
            color: 'danger',
          },
        ],
      },
    ],
  }
}

export const themePrestashop: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Thème PrestaShop : Choisir et personnaliser votre template',
    _status: 'published',
    slug: 'theme-prestashop',
    meta: {
      title: 'Thème PrestaShop : Guide complet & meilleurs templates - UPTO1',
      description:
        'Découvrez comment choisir le meilleur thème PrestaShop pour votre boutique. Comparatif, personnalisation et optimisation SEO.',
      schema: {
        type: 'Article',
        customData: {
          articleSection: 'PrestaShop',
          wordCount: 2100,
        },
      },
      focusKeyword: 'theme prestashop',
      relatedKeywords: [
        { keyword: 'template prestashop' },
        { keyword: 'thème prestashop gratuit' },
        { keyword: 'personnalisation prestashop' },
        { keyword: 'design e-commerce' },
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
          children: [createHeading('Thème PrestaShop : Guide complet', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Thème PrestaShop : Choisir et personnaliser votre template',
        subheading:
          'Le bon thème PrestaShop fait toute la différence. Découvrez comment choisir, personnaliser et optimiser votre template pour maximiser vos ventes.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Voir nos thèmes',
              appearance: 'default',
              url: '#themes',
            },
          },
        ],
        badges: [
          {
            value: '1000+',
            label: 'Thèmes disponibles',
            icon: 'icon-layout',
          },
          {
            value: '100%',
            label: 'Responsive design',
            icon: 'icon-smartphone',
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
                  createHeading('Comment choisir son thème PrestaShop ?'),
                  createParagraph(
                    'Le choix du thème PrestaShop est crucial pour le succès de votre boutique. Privilégiez un thème responsive, optimisé pour le SEO, avec un temps de chargement rapide, et adapté à votre secteur d\'activité. Vérifiez la compatibilité avec votre version de PrestaShop et les avis utilisateurs.'
                  ),
                  createHeading('Thèmes gratuits vs thèmes premium'),
                  createParagraph(
                    'Les thèmes gratuits conviennent pour débuter, mais les thèmes premium offrent plus de fonctionnalités, un meilleur support, et une personnalisation avancée. Investir dans un thème de qualité améliore l\'expérience utilisateur et vos conversions.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions sur les thèmes PrestaShop',
        faqs: [
          {
            question: 'Où trouver des thèmes PrestaShop de qualité ?',
            answer:
              'PrestaShop Addons est la marketplace officielle avec des milliers de thèmes vérifiés. ThemeForest, TemplateMonster et PrestaShop Themes sont aussi d\'excellentes sources. Privilégiez les vendeurs avec de bonnes notes et un support actif.',
          },
          {
            question: 'Comment personnaliser un thème PrestaShop ?',
            answer:
              'Utilisez le back-office PrestaShop pour les personnalisations basiques (couleurs, logos, menus). Pour des modifications avancées, éditez les fichiers TPL et CSS du thème. Créez toujours un thème enfant pour préserver vos modifications lors des mises à jour.',
          },
          {
            question: 'Un thème impacte-t-il le référencement ?',
            answer:
              'Oui ! Un thème mal optimisé peut ralentir votre site, avoir un code HTML non sémantique, et nuire à votre SEO. Choisissez un thème optimisé pour les performances et le référencement, avec des balises correctes et un code propre.',
          },
        ],
      },
    ],
  }
}

export const articlesSeo: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Articles SEO : Rédaction optimisée pour le référencement',
    _status: 'published',
    slug: 'articles-seo',
    meta: {
      title: 'Articles SEO : Rédaction web optimisée référencement - UPTO1',
      description:
        'Rédaction d\'articles SEO optimisés pour générer du trafic organique. Contenu de qualité, mots-clés stratégiques et résultats mesurables.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'SEO Content Writing',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'articles seo',
      relatedKeywords: [
        { keyword: 'rédaction seo' },
        { keyword: 'contenu optimisé' },
        { keyword: 'rédaction web' },
        { keyword: 'article de blog seo' },
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
          children: [createHeading('Articles SEO : Rédaction optimisée', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Articles SEO : Rédaction optimisée pour le référencement',
        subheading:
          'Des articles qui se positionnent en première page de Google. Rédaction professionnelle optimisée SEO pour générer du trafic qualifié.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'reference',
              label: 'Voir nos offres',
              appearance: 'default',
              reference: {
                relationTo: 'pages',
                value: 'contenu-seo',
              },
            },
          },
        ],
        badges: [
          {
            value: '5000+',
            label: 'Articles rédigés',
            icon: 'icon-file-text',
          },
          {
            value: 'Top 3',
            label: 'Positionnement moyen',
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
                  createHeading('Qu\'est-ce qu\'un article SEO ?'),
                  createParagraph(
                    'Un article SEO est un contenu web optimisé pour les moteurs de recherche et pour les lecteurs. Il intègre des mots-clés stratégiques de manière naturelle, répond précisément à l\'intention de recherche, et offre une véritable valeur ajoutée. L\'objectif : se positionner en première page de Google tout en engageant les lecteurs.'
                  ),
                  createHeading('Comment rédiger un bon article SEO ?'),
                  createParagraph(
                    'Recherche de mots-clés pertinents, analyse de l\'intention de recherche, structure claire avec balises Hn, paragraphes courts et aérés, maillage interne, optimisation des images, et contenu original de qualité. Un bon article SEO est à la fois optimisé pour Google et agréable à lire.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Les clés d\'un article SEO efficace',
        features: [
          {
            number: '01',
            title: 'Recherche de mots-clés',
            description:
              'Identification des mots-clés à fort potentiel selon l\'intention et le volume',
            color: 'success',
          },
          {
            number: '02',
            title: 'Structure optimisée',
            description:
              'Balises Hn cohérentes, paragraphes courts, et mise en forme claire',
            color: 'primary',
          },
          {
            number: '03',
            title: 'Contenu de qualité',
            description:
              'Information complète, unique et apportant une vraie valeur ajoutée',
            color: 'danger',
          },
          {
            number: '04',
            title: 'Optimisation on-page',
            description:
              'Title, meta description, URL, images alt text et maillage interne',
            color: 'warning',
          },
        ],
      },
    ],
  }
}

export const redigerWeb: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Rédiger pour le web : Techniques de rédaction web efficace',
    _status: 'published',
    slug: 'rediger-pour-le-web',
    meta: {
      title: 'Rédiger pour le web : Guide complet rédaction web - UPTO1',
      description:
        'Apprenez à rédiger pour le web avec nos techniques éprouvées. Structure, lisibilité, SEO et engagement pour des contenus performants.',
      schema: {
        type: 'Article',
        customData: {
          articleSection: 'Content Writing',
          wordCount: 2800,
        },
      },
      focusKeyword: 'rédiger pour le web',
      relatedKeywords: [
        { keyword: 'écriture web' },
        { keyword: 'rédaction web' },
        { keyword: 'contenu web' },
        { keyword: 'techniques rédaction' },
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
          children: [createHeading('Rédiger pour le web : Techniques efficaces', 'h1')],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Rédiger pour le web : Techniques de rédaction web efficace',
        subheading:
          'Maîtrisez l\'art de la rédaction web. Structure, lisibilité, SEO et engagement pour créer des contenus qui captivent et convertissent.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Découvrir nos formations',
              appearance: 'default',
              url: '#formations',
            },
          },
        ],
        badges: [
          {
            value: '100+',
            label: 'Rédacteurs formés',
            icon: 'icon-users',
          },
          {
            value: '10 règles',
            label: 'D\'or de la rédaction web',
            icon: 'icon-book',
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
                  createHeading('Les spécificités de la rédaction web'),
                  createParagraph(
                    'Rédiger pour le web diffère de l\'écriture traditionnelle. Les internautes scannent plus qu\'ils ne lisent, leur attention est limitée, et ils recherchent des informations rapidement accessibles. Il faut donc adapter son style : phrases courtes, paragraphes aérés, titres explicites, et structure en pyramide inversée.'
                  ),
                  createHeading('Les règles d\'or de la rédaction web'),
                  createParagraph(
                    'Aller droit au but, utiliser un vocabulaire simple, structurer avec des sous-titres, aérer le texte, mettre en valeur les mots clés, ajouter des liens pertinents, et toujours penser mobile. Un bon contenu web est scannable, informatif et engageant.'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Les piliers de la rédaction web',
        layout: 'grid-3',
        boxes: [
          {
            icon: 'icon-eye',
            title: 'Lisibilité',
            description: 'Phrases courtes, mots simples, et structure claire',
            color: 'primary',
          },
          {
            icon: 'icon-search',
            title: 'SEO',
            description: 'Optimisation pour les moteurs de recherche',
            color: 'success',
          },
          {
            icon: 'icon-heart',
            title: 'Engagement',
            description: 'Contenu captivant qui fidélise les lecteurs',
            color: 'danger',
          },
        ],
      },
    ],
  }
}

// Export all pages as an array
export const batch5Pages = [
  creationContenus,
  longueTraine,
  webPerformance,
  specialisteSeo,
  themePrestashop,
  articlesSeo,
  redigerWeb,
]
