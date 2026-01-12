import type { RequiredDataFromCollectionSlug } from 'payload'

export const prestashop: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'PrestaShop : Comment proposer simplement la vente en ligne',
    _status: 'published',
    slug: 'prestashop',
    meta: {
      title: 'PrestaShop : activez le e-commerce simple en 2025 - UPTO1',
      description:
        'Découvrez PrestaShop : leader en France des solutions e-commerce et comment optimiser votre boutique en ligne PrestaShop pour maximiser vos ventes.',
      schema: {
        type: 'Article',
        customData: {
          articleSection: 'E-commerce',
          wordCount: 2841,
        },
      },
      focusKeyword: 'prestashop',
      relatedKeywords: [
        { keyword: 'e-commerce' },
        { keyword: 'boutique en ligne' },
        { keyword: 'seo prestashop' },
        { keyword: 'optimisation prestashop' },
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
              text: 'PrestaShop : La solution e-commerce n°1 en France',
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
        heading: 'PrestaShop : La solution e-commerce n°1 en France',
        subheading: 'Plus de 300 000 sites dans le monde et 37 000 en France font confiance à PrestaShop pour leur boutique en ligne.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        badges: [
          {
            value: '300K+',
            label: 'Sites actifs',
            icon: 'icon-globe',
          },
          {
            value: '37K+',
            label: 'Sites en France',
            icon: 'icon-location',
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
                        text: 'PrestaShop : présentation',
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
                        text: 'Plateforme lancée en 2007 par des étudiants d\'Epitech, PrestaShop héberge aujourd\'hui plus de 300 000 sites dans le monde dont 37 000 en France. Cette solution open-source offre une gestion complète : paiement, livraison, suivi des commandes, contrôle des stocks, thèmes personnalisables et tableau de bord administratif.',
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
        title: 'PrestaShop en chiffres',
        layout: 'grid-3',
        stats: [
          {
            value: '300 000+',
            label: 'Sites dans le monde',
            description: 'Boutiques actives utilisant PrestaShop',
            color: 'primary',
            icon: 'icon-globe',
          },
          {
            value: '37 000+',
            label: 'Sites en France',
            description: 'Leader du e-commerce français',
            color: 'success',
            icon: 'icon-location',
          },
          {
            value: '70%',
            label: 'Achats mobile',
            description: 'Des achats se font via smartphone',
            color: 'warning',
            icon: 'icon-phone',
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Pourquoi utiliser PrestaShop ?',
        color: 'success',
        items: [
          {
            icon: 'icon-check',
            title: 'Solution open-source',
            description: 'Gratuit et personnalisable selon vos besoins',
          },
          {
            icon: 'icon-layers',
            title: 'Catalogue extensif',
            description: 'Des milliers de thèmes et modules disponibles',
          },
          {
            icon: 'icon-cart',
            title: 'Gestion intuitive',
            description: 'Interface simple pour gérer vos commandes',
          },
          {
            icon: 'icon-doc',
            title: 'Documentation complète',
            description: 'Ressources et support communautaire actif',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Optimisation SEO PrestaShop',
        description: 'Les éléments clés pour optimiser votre boutique PrestaShop :',
        color: 'primary',
        features: [
          {
            title: 'Le thème : choisir un thème performant',
            description: 'Sélectionnez un thème optimisé pour le SEO et la performance, responsive et rapide à charger.',
          },
          {
            title: 'Les balises : H1, Title et méta description',
            description: 'Optimisez vos balises HTML pour chaque page produit et catégorie avec vos mots-clés stratégiques.',
          },
          {
            title: 'Les URL : Simples et concises',
            description: 'Créez des URL courtes, descriptives et contenant vos mots-clés principaux.',
          },
          {
            title: 'Les images : optimisées pour le SEO',
            description: 'Compressez vos images et renseignez les balises ALT pour améliorer votre référencement.',
          },
          {
            title: 'Les fiches produits : un contenu unique',
            description: 'Rédigez des descriptions uniques et détaillées pour chaque produit, évitez le contenu dupliqué.',
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: '3 modules PrestaShop pour le SEO',
        description: 'Des modules essentiels pour améliorer votre référencement :',
        color: 'warning',
        items: [
          {
            icon: 'icon-star',
            title: 'Easy SEO',
            description: 'Le SEO à petit prix pour optimiser rapidement votre boutique',
          },
          {
            icon: 'icon-refresh',
            title: 'Module 301 SEO',
            description: 'Gérez vos redirections et évitez les erreurs 404',
          },
          {
            icon: 'icon-question',
            title: 'Product FAQ',
            description: 'Ajoutez des FAQ sur vos fiches produits pour enrichir votre contenu',
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
                        text: 'Qui utilise PrestaShop en 2025 ?',
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
                        text: 'De grandes marques françaises font confiance à PrestaShop : Pylones, Le Slip Français, Match Supermarket, le Château de Versailles, et de nombreuses CCI. Ces entreprises profitent de la flexibilité et de la puissance de PrestaShop pour développer leur activité e-commerce.',
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
                    text: 'Besoin d\'aide pour votre boutique PrestaShop ?',
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
                    text: 'Nos experts vous accompagnent dans l\'optimisation SEO de votre boutique PrestaShop pour maximiser vos ventes en ligne.',
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
              label: 'Audit PrestaShop gratuit',
              appearance: 'default',
              url: '/audit-seo-gratuit',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Nous contacter',
              appearance: 'outline',
              url: '/contact',
            },
          },
        ],
      },
    ],
  }
}
