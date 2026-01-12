import type { RequiredDataFromCollectionSlug } from 'payload'

export const upto1Home: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Accueil - Upto1',
    _status: 'published',
    slug: 'upto1-home',
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
                  text: 'Accueil Upto1',
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
        blockType: 'statistics',
        title: 'Upto1 en chiffres',
        description: 'Des résultats mesurables pour votre croissance digitale',
        layout: 'grid-4',
        stats: [
          {
            value: '+150%',
            label: 'Trafic organique moyen',
            description: 'Augmentation sur 12 mois',
            color: 'success',
            icon: 'icon-chart-line',
          },
          {
            value: '300K+',
            label: 'Sites e-commerce',
            description: 'Utilisant PrestaShop en France',
            color: 'primary',
            icon: 'icon-cart',
          },
          {
            value: '6 mois',
            label: 'Résultats SEO',
            description: 'Délai moyen pour effets mesurables',
            color: 'warning',
            icon: 'icon-clock',
          },
          {
            value: '24/7',
            label: 'Visibilité',
            description: 'Votre entreprise en ligne en continu',
            color: 'danger',
            icon: 'icon-globe',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Nos services',
        features: [
          {
            title: 'Stratégie business & plan d\'actions trimestriel',
            description: 'Nous vous aidons à définir une stratégie claire et des objectifs mesurables pour piloter votre croissance digitale.',
          },
          {
            title: 'Gestion SEO & référencement naturel',
            description: 'Optimisez votre visibilité sur Google avec une stratégie SEO technique et éditoriale continue.',
          },
          {
            title: 'Publicité en ligne Google Ads & Meta',
            description: 'Générez du trafic qualifié avec des campagnes publicitaires performantes et optimisées.',
          },
          {
            title: 'Création de contenu & marketing automation',
            description: 'Automatisez votre marketing et créez du contenu engageant pour convertir vos prospects.',
          },
        ],
        color: 'success',
      },
      {
        blockType: 'iconsBox',
        title: 'Solutions par industrie',
        description: 'Des expertises spécialisées pour votre secteur d\'activité',
        color: 'primary',
        items: [
          {
            icon: 'icon-cart',
            title: 'E-commerce',
            description: 'PrestaShop, Magento, WooCommerce : optimisation complète de votre boutique en ligne pour maximiser vos ventes.',
          },
          {
            icon: 'icon-briefcase',
            title: 'TPE & PME',
            description: 'Solutions digitales adaptées à votre budget. SEO local, acquisition et stratégie sur-mesure pour petites structures.',
          },
          {
            icon: 'icon-users',
            title: 'Services B2B',
            description: 'Génération de leads qualifiés, content marketing et stratégie d\'acquisition pour entreprises de services.',
          },
          {
            icon: 'icon-magic-wand',
            title: 'Startups',
            description: 'Growth hacking, MVP digital et stratégies d\'acquisition rapides pour startups en phase de croissance.',
          },
        ],
      },
      {
        blockType: 'coloredBanner',
        color: 'success',
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
                    text: 'Transformez votre présence digitale',
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
                    text: 'Avec Upto1, bénéficiez d\'une expertise digitale complète pour accélérer votre croissance en ligne. De la stratégie à l\'exécution, nous vous accompagnons à chaque étape.',
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
              label: 'En savoir plus',
              appearance: 'outline',
              url: '/solutions',
            },
          },
        ],
      },
    ],
  }
}
