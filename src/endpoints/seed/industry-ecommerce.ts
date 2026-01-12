import type { RequiredDataFromCollectionSlug } from 'payload'

export const ecommerceIndustry: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Solutions E-commerce : PrestaShop, Magento & WooCommerce',
    _status: 'published',
    slug: 'e-commerce',
    meta: {
      title: 'Solutions E-commerce SEO : PrestaShop, Magento, WooCommerce - UPTO1',
      description:
        'Experts en référencement e-commerce. Optimisez votre boutique PrestaShop, Magento ou WooCommerce pour maximiser vos ventes en ligne avec notre expertise SEO.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'E-commerce SEO',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'seo e-commerce',
      relatedKeywords: [
        { keyword: 'prestashop seo' },
        { keyword: 'magento seo' },
        { keyword: 'woocommerce seo' },
        { keyword: 'boutique en ligne' },
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
              text: 'Expertise E-commerce : Maximisez vos ventes en ligne',
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
        heading: 'Expertise E-commerce : Maximisez vos ventes en ligne',
        subheading: 'Spécialistes du référencement pour PrestaShop, Magento et WooCommerce. Transformez votre boutique en machine à ventes avec notre expertise SEO e-commerce.',
        overlay: true,
        height: 'large',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Audit e-commerce gratuit',
              appearance: 'default',
              url: '/audit-seo-gratuit',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Voir nos cas clients',
              appearance: 'outline',
              url: '#testimonials',
            },
          },
        ],
        badges: [
          {
            value: '300K+',
            label: 'Sites PrestaShop',
            icon: 'icon-cart',
          },
          {
            value: '+150%',
            label: 'Croissance moyenne',
            icon: 'icon-chart-line',
          },
        ],
      },
      {
        blockType: 'statistics',
        title: 'Notre expertise e-commerce en chiffres',
        description: 'Des résultats mesurables pour votre croissance',
        layout: 'grid-4',
        stats: [
          {
            value: '70%',
            label: 'Achats mobile',
            description: 'Des transactions e-commerce se font sur mobile',
            color: 'primary',
            icon: 'icon-phone',
          },
          {
            value: '+150%',
            label: 'Trafic organique',
            description: 'Augmentation moyenne sur 12 mois',
            color: 'success',
            icon: 'icon-chart-line',
          },
          {
            value: '6 mois',
            label: 'Résultats SEO',
            description: 'Délai moyen pour observer des effets',
            color: 'warning',
            icon: 'icon-clock',
          },
          {
            value: '24/7',
            label: 'Visibilité',
            description: 'Votre boutique visible en continu',
            color: 'danger',
            icon: 'icon-globe',
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Nos plateformes e-commerce',
        description: 'Une expertise reconnue sur les principales solutions du marché',
        color: 'primary',
        items: [
          {
            icon: 'icon-cart',
            title: 'PrestaShop',
            description: 'Leader français avec 37 000+ boutiques. Optimisation complète : thème, modules SEO, fiches produits, et performance.',
          },
          {
            icon: 'icon-magic-wand',
            title: 'Magento',
            description: 'Solution enterprise pour grandes boutiques. Audit technique, optimisation des catégories et stratégie de contenu.',
          },
          {
            icon: 'icon-wordpress',
            title: 'WooCommerce',
            description: 'Plugin WordPress flexible. Configuration SEO, optimisation des pages produits et intégration marketing.',
          },
          {
            icon: 'icon-layers',
            title: 'Solutions sur-mesure',
            description: 'Shopify, BigCommerce ou développements spécifiques. Nous adaptons notre expertise à votre stack technique.',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Notre approche e-commerce 360°',
        description: 'Une méthodologie éprouvée en 6 étapes pour booster vos ventes',
        color: 'success',
        features: [
          {
            title: 'Audit technique e-commerce',
            description: 'Analyse complète de votre boutique : structure, performance, indexation, Core Web Vitals et compatibilité mobile.',
          },
          {
            title: 'Optimisation des fiches produits',
            description: 'Rédaction de descriptions uniques, optimisation des images et balises ALT, structuration des données produits.',
          },
          {
            title: 'Architecture et catégories',
            description: 'Structuration optimale de votre catalogue, maillage interne stratégique et fil d\'Ariane SEO-friendly.',
          },
          {
            title: 'Stratégie de contenu',
            description: 'Création de guides d\'achat, articles de blog thématiques et FAQ enrichies pour capturer la longue traîne.',
          },
          {
            title: 'Performance et conversion',
            description: 'Optimisation du temps de chargement, amélioration de l\'UX mobile et réduction du taux de rebond.',
          },
          {
            title: 'Suivi et optimisation continue',
            description: 'Tableau de bord mensuel, analyse des conversions et ajustements stratégiques basés sur les données.',
          },
        ],
      },
      {
        blockType: 'testimonial',
        title: 'Ils nous font confiance',
        displayStyle: 'grid',
        testimonials: [
          {
            quote: 'Après 6 mois d\'optimisation SEO sur notre PrestaShop, notre trafic organique a doublé et nos ventes ont augmenté de 180%. L\'équipe Upto1 a transformé notre boutique en véritable machine à conversion.',
            authorName: 'Sophie Martin',
            authorTitle: 'Directrice E-commerce',
            company: 'Boutique Mode',
            rating: 5,
            metrics: {
              before: '5K visites/mois',
              after: '10K visites/mois',
              improvement: '+180% ventes',
            },
          },
          {
            quote: 'L\'audit technique a révélé des problèmes critiques sur notre Magento. Leur expertise nous a permis de corriger ces freins et d\'améliorer drastiquement nos positions Google.',
            authorName: 'Thomas Dubois',
            authorTitle: 'CEO',
            company: 'E-shop Tech',
            rating: 5,
            metrics: {
              before: 'Page 3 Google',
              after: 'Top 3 positions',
              improvement: '+250% trafic',
            },
          },
          {
            quote: 'Formation très complète sur l\'optimisation WooCommerce. Nous sommes maintenant autonomes sur la rédaction de nos fiches produits et avons multiplié par 3 notre visibilité.',
            authorName: 'Marie Leroy',
            authorTitle: 'Responsable Marketing',
            company: 'Artisanat Local',
            rating: 5,
            metrics: {
              before: '50 produits',
              after: '200 produits',
              improvement: 'x3 visibilité',
            },
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Modules et outils e-commerce recommandés',
        description: 'Notre sélection d\'outils pour maximiser votre SEO e-commerce',
        color: 'warning',
        items: [
          {
            icon: 'icon-star',
            title: 'Modules SEO essentiels',
            description: 'Easy SEO, 301 Redirect Manager, Product FAQ, Rich Snippets pour données structurées',
          },
          {
            icon: 'icon-speed',
            title: 'Performance',
            description: 'Compression d\'images, lazy loading, cache intelligent et minification CSS/JS',
          },
          {
            icon: 'icon-chart-bars',
            title: 'Analytics & Tracking',
            description: 'Google Analytics 4, Search Console, Hotjar et tracking des conversions e-commerce',
          },
          {
            icon: 'icon-shield',
            title: 'Trust & Sécurité',
            description: 'Certificat SSL, badges de confiance, avis clients certifiés et paiement sécurisé',
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions fréquentes E-commerce',
        enableSchemaMarkup: true,
        questions: [
          {
            question: 'Quelle plateforme e-commerce est la meilleure pour le SEO ?',
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
                        text: 'Chaque plateforme a ses avantages : PrestaShop est flexible et populaire en France, Magento convient aux grandes boutiques avec beaucoup de produits, WooCommerce s\'intègre parfaitement avec WordPress pour le content marketing. Le choix dépend de vos besoins spécifiques, de votre budget et de votre volume de produits.',
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
            question: 'Combien de temps pour voir des résultats SEO sur ma boutique ?',
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
                        text: 'Comptez environ 6 mois pour observer des effets significatifs sur votre trafic organique et vos positions Google. Les quick wins techniques peuvent donner des résultats en 2-3 mois, mais une stratégie SEO e-commerce complète nécessite du temps pour porter ses fruits.',
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
            question: 'Comment optimiser mes fiches produits pour le SEO ?',
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
                        text: 'Rédigez des descriptions uniques (évitez le contenu dupliqué), optimisez vos images avec des balises ALT descriptives, structurez vos URL de manière lisible, ajoutez des avis clients, créez des FAQ produits et utilisez les données structurées (schema.org) pour les rich snippets.',
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
            question: 'Le mobile-first est-il vraiment important pour l\'e-commerce ?',
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
                        text: 'Absolument ! Plus de 70% des achats en ligne se font maintenant via smartphone. Google indexe en priorité la version mobile de votre site. Une expérience mobile optimale (temps de chargement rapide, navigation fluide, paiement simplifié) est donc essentielle pour votre SEO et vos conversions.',
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
                    text: 'Prêt à booster vos ventes en ligne ?',
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
                    text: 'Demandez votre audit e-commerce gratuit et découvrez comment multiplier votre trafic organique et vos conversions.',
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
              label: 'Audit e-commerce gratuit',
              appearance: 'default',
              url: '/audit-seo-gratuit',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Voir nos solutions PrestaShop',
              appearance: 'outline',
              url: '/prestashop',
            },
          },
        ],
      },
    ],
  }
}
