import type { RequiredDataFromCollectionSlug } from 'payload'

export const auditSeoGratuit: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Audit SEO gratuit : la catapulte du référencement naturel',
    _status: 'published',
    slug: 'audit-seo-gratuit',
    meta: {
      title: 'Audit SEO gratuit : la catapulte du référencement naturel - UPTO1',
      description:
        'Tout le monde vous dira la même chose les premières places sont réservées à ceux qui respectent 3 critères du bon contenu, une page irréprochable techniquement et du trafic… un comble pour les nouveaux arrivants ! Faites analyser gratuitement votre site internet',
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
      focusKeyword: 'audit seo gratuit',
      relatedKeywords: [
        { keyword: 'analyse seo' },
        { keyword: 'référencement naturel' },
        { keyword: 'audit technique seo' },
        { keyword: 'google search console' },
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
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Audit SEO gratuit en ligne : la catapulte du référencement naturel',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
          ],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'Audit SEO gratuit en ligne : la catapulte du référencement naturel',
        subheading: 'Les sites qui se hissent dans les premières places de Google, sont ceux qui corrigent leurs erreurs de référencement.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Demander mon audit gratuit',
              appearance: 'default',
              url: '#audit-form',
            },
          },
        ],
        badges: [
          {
            value: '~60 min',
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
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Faites analyser gratuitement votre site internet',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h2',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Les premières places sont réservées à ceux qui respectent 3 critères : du bon contenu, une page irréprochable techniquement et du trafic. Notre analyse gratuite vous livre les fondations d\'une campagne SEO réussie, avec identification des axes d\'amélioration et consolidation du positionnement sur vos mots-clés.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'statistics',
        title: 'Contenu de l\'audit SEO gratuit',
        description: 'Notre analyse gratuite comprend une évaluation contextuelle autour des problématiques de votre site :',
        layout: 'grid-4',
        stats: [
          {
            value: 'Score',
            label: 'Global de référencement',
            description: 'Évaluation complète de votre SEO',
            color: 'primary',
            icon: 'icon-chart-bars',
          },
          {
            value: 'Autorité',
            label: 'Domain Authority',
            description: 'Analyse de la popularité de votre site',
            color: 'success',
            icon: 'icon-trophy',
          },
          {
            value: 'Maillage',
            label: 'Qualité des liens internes',
            description: 'Évaluation de votre structure de liens',
            color: 'warning',
            icon: 'icon-link',
          },
          {
            value: 'Technique',
            label: 'Analyse technique',
            description: 'Audit technique de votre site',
            color: 'danger',
            icon: 'icon-settings',
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Quelle est la différence avec la Google Search Console ?',
        description: 'La Google Search Console est un outil de choix pour suivre, détecter et améliorer votre site internet mais elle manque de fonctionnalités. Notre audit va plus loin :',
        color: 'primary',
        items: [
          {
            icon: 'icon-magnifier',
            title: 'Analyse concurrentielle',
            description: 'Nous analysons vos concurrents pour identifier les opportunités',
          },
          {
            icon: 'icon-target',
            title: 'Stratégie de mots-clés',
            description: 'Recommandations stratégiques sur les mots-clés à cibler',
          },
          {
            icon: 'icon-chart-line',
            title: 'Vision globale',
            description: 'Une vue d\'ensemble de votre positionnement et de vos axes d\'amélioration',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Mener une bonne campagne de référencement',
        description: '5 étapes essentielles pour optimiser votre référencement naturel :',
        color: 'success',
        features: [
          {
            title: 'Évaluez vos classements et étudiez vos concurrents',
            description: 'Comprenez où vous vous situez par rapport à la concurrence et identifiez les opportunités.',
          },
          {
            title: 'Analyse technique de votre site internet',
            description: 'Auditez la structure technique de votre site (WordPress, PrestaShop, Magento) pour corriger les freins SEO.',
          },
          {
            title: 'Analyse des liens internes',
            description: 'Optimisez votre maillage interne pour améliorer l\'expérience utilisateur et la navigation.',
          },
          {
            title: 'Analyse des liens externes',
            description: 'Développez une stratégie de backlinks pour générer du trafic qualifié.',
          },
          {
            title: 'Analyse du contenu',
            description: 'Créez du contenu de qualité pour faire autorité sur votre domaine d\'expertise.',
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions fréquentes',
        enableSchemaMarkup: true,
        questions: [
          {
            question: 'Pourquoi vous offrez une analyse gratuite ?',
            answer: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Nous utilisons cet outil quotidiennement dans notre agence. En vous offrant cette analyse, nous anticipons vos besoins futurs : création de contenu, cocons sémantiques, maillage interne, vérification de liens, optimisation des balises title, et mise à jour technique.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
              },
            },
          },
          {
            question: 'Quel est le délai de livraison de l\'audit ?',
            answer: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'L\'audit SEO gratuit est généralement livré par email dans un délai d\'environ 60 minutes après votre demande.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
              },
            },
          },
          {
            question: 'Que contient l\'audit SEO gratuit ?',
            answer: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Notre analyse gratuite inclut : un score global de référencement, l\'évaluation de l\'autorité de domaine, la qualité du maillage interne, une analyse technique partielle, une recherche de mots-clés pertinents, l\'analyse des backlinks, et la vitesse de chargement des pages.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
              },
            },
          },
        ],
      },
      {
        blockType: 'cta',
        richText: {
          root: {
            type: 'root',
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Prêt à catapulter votre référencement ?',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h2',
                version: 1,
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Demandez votre audit SEO gratuit et recevez vos recommandations personnalisées dans ~60 minutes.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
          },
        },
        links: [
          {
            link: {
              type: 'custom',
              label: 'Demander mon audit gratuit',
              appearance: 'default',
              url: '#audit-form',
            },
          },
        ],
      },
    ],
  }
}
