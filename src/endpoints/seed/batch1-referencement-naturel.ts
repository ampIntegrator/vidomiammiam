import type { RequiredDataFromCollectionSlug } from 'payload'

export const referencementNaturel: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'SEO : Qu\'est-ce que le référencement naturel ?',
    _status: 'published',
    slug: 'referencement-naturel',
    meta: {
      title: 'SEO : Qu\'est-ce que le référencement naturel ? - UPTO1',
      description:
        'Le SEO sont des techniques pour optimiser le référencement naturel d\'un site Internet. UpTo1, expert du SEO vous accompagne dans tous vos projets !',
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
      focusKeyword: 'référencement naturel',
      relatedKeywords: [
        { keyword: 'seo' },
        { keyword: 'optimisation google' },
        { keyword: 'visibilité web' },
        { keyword: 'stratégie seo' },
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
          children: [{
            type: 'heading',
            children: [{
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'SEO : Qu\'est-ce que le référencement naturel ?',
              version: 1,
            }],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          }],
        },
      },
    },
    layout: [
      {
        blockType: 'heroSection',
        heading: 'SEO : Qu\'est-ce que le référencement naturel ?',
        subheading: 'Le SEO désigne un ensemble de techniques et méthodes qui visent à optimiser un site web pour améliorer son ranking sur les moteurs de recherche.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Demander une analyse gratuite',
              appearance: 'default',
              url: '/audit-seo-gratuit',
            },
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
                        text: 'Une stratégie sur le long terme',
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
                        text: 'L\'optimisation du référencement permet d\'être en tête des recherches Google. Être en tête de la page de recherches permet ainsi d\'être visible aux yeux des internautes. Plus vous êtes visible, plus vous augmentez votre nombre de leads qualifiés, donc le ROI (retour sur investissement). C\'est une stratégie efficace sur le long terme qui vous permet de maximiser le potentiel de votre site internet.',
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
        blockType: 'iconsBox',
        title: 'Les 3 piliers du référencement naturel',
        description: 'Notre approche SEO repose sur trois axes complémentaires pour optimiser votre visibilité :',
        color: 'primary',
        items: [
          {
            icon: 'icon-settings',
            title: 'Technique',
            description: 'Structure du site et optimisation des performances pour un crawl optimal par Google',
          },
          {
            icon: 'icon-link',
            title: 'Netlinking',
            description: 'Stratégie de liens internes et backlinks pour développer l\'autorité de votre site',
          },
          {
            icon: 'icon-pencil',
            title: 'Editorial',
            description: 'Optimisation du contenu avec stratégie de mots-clés et structure sémantique',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Nos techniques',
        description: 'Des outils et méthodologies éprouvés pour votre référencement :',
        color: 'success',
        features: [
          {
            title: 'Recherche de mots-clés',
            description: 'Analyse sémantique avec SEOQuantum, Google Keyword Planner, SemRush et outils d\'IA',
          },
          {
            title: 'AMP (Accelerated Mobile Pages)',
            description: 'Pages optimisées pour un chargement ultra-rapide sur mobile',
          },
          {
            title: 'Analyse sémantique',
            description: 'Étude de centaines de pages pour définir le cocon sémantique optimal',
          },
          {
            title: 'Web Performance',
            description: 'Optimisation du temps de chargement pour améliorer l\'expérience utilisateur',
          },
        ],
      },
      {
        blockType: 'testimonial',
        title: 'Nos atouts',
        displayStyle: 'grid',
        testimonials: [
          {
            quote: 'Une stratégie 360 qui va au-delà de la simple observation. Upto1 analyse nos concurrents et notre écosystème pour des recommandations vraiment adaptées à notre business.',
            authorName: 'Client Upto1',
            authorTitle: 'Directeur Marketing',
            rating: 5,
          },
          {
            quote: 'L\'analyse sémantique poussée fait toute la différence. Ils ont élargi notre champ lexical et défini un cocon sémantique qui nous positionne bien au-delà de nos mots-clés principaux.',
            authorName: 'Client Upto1',
            authorTitle: 'Responsable SEO',
            rating: 5,
          },
          {
            quote: 'Leur approche pédagogique nous a permis de comprendre toutes les notions SEO. Nous sommes maintenant autonomes tout en gardant leur expertise pour les décisions stratégiques.',
            authorName: 'Client Upto1',
            authorTitle: 'Chef de projet Web',
            rating: 5,
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Référencement naturel pour eCommerçant',
        description: 'Une expertise spécifique pour les plateformes e-commerce :',
        color: 'warning',
        items: [
          {
            icon: 'icon-graduation-cap',
            title: 'Formation SEO',
            description: 'Apprenez les meilleures pratiques pour optimiser votre boutique en ligne',
          },
          {
            icon: 'icon-cart',
            title: 'PrestaShop',
            description: 'Audit et optimisation technique pour votre boutique PrestaShop',
          },
          {
            icon: 'icon-magic-wand',
            title: 'Magento',
            description: 'Optimisation SEO Magento pour maximiser votre trafic organique',
          },
          {
            icon: 'icon-wordpress',
            title: 'WordPress',
            description: 'Analyse et recommandations pour votre site WordPress',
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
                    text: 'Prêt à booster votre visibilité ?',
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
                    text: 'Confiez votre audit SEO à nos experts et maximisez le potentiel de votre site internet.',
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
              label: 'Demander une analyse gratuite',
              appearance: 'default',
              url: '/audit-seo-gratuit',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Voir nos formations',
              appearance: 'outline',
              url: '/formations',
            },
          },
        ],
      },
    ],
  }
}
