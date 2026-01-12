import type { RequiredDataFromCollectionSlug } from 'payload'

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

// Batch 6 Pages - WordPress & Magento focused

export const hebergementWordpress: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Hébergement WordPress : Choisir le meilleur hébergeur',
    _status: 'published',
    slug: 'hebergement-wordpress',
    meta: {
      title: 'Hébergement WordPress : Meilleur hébergeur 2025 - UPTO1',
      description:
        'Comparez les meilleurs hébergements WordPress. Performance, sécurité et support pour votre site WordPress.',
      focusKeyword: 'hébergement wordpress',
      relatedKeywords: [
        { keyword: 'hébergeur wordpress' },
        { keyword: 'hosting wordpress' },
        { keyword: 'serveur wordpress' },
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
          children: [createHeading('Hébergement WordPress : Guide complet', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Choisir son hébergement WordPress'),
                  createParagraph(
                    'L\'hébergement WordPress est crucial pour les performances, la sécurité et la disponibilité de votre site. Un bon hébergeur offre des serveurs optimisés pour WordPress, des sauvegardes automatiques, un SSL gratuit, et un support technique réactif.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const maintenanceWordpress: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Maintenance WordPress : Forfaits et services TMA',
    _status: 'published',
    slug: 'maintenance-wordpress',
    meta: {
      title: 'Maintenance WordPress : Tarifs et forfaits TMA - UPTO1',
      description:
        'Services de maintenance WordPress : mises à jour, sauvegardes, sécurité et support. Forfaits TMA adaptés à vos besoins.',
      focusKeyword: 'maintenance wordpress',
      relatedKeywords: [
        { keyword: 'tma wordpress' },
        { keyword: 'infogérance wordpress' },
        { keyword: 'support wordpress' },
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
          children: [createHeading('Maintenance WordPress : Services TMA', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Pourquoi maintenir son site WordPress ?'),
                  createParagraph(
                    'La maintenance WordPress assure la sécurité, les performances et la pérennité de votre site. Mises à jour régulières, sauvegardes, monitoring et support technique pour éviter les piratages et les pannes.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const migrationWordpress: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Migration WordPress : Transférer votre site en toute sécurité',
    _status: 'published',
    slug: 'migration-wordpress',
    meta: {
      title: 'Migration WordPress : Guide complet & checklist - UPTO1',
      description:
        'Migrez votre site WordPress sans risque. Changement d\'hébergeur, de nom de domaine ou passage en HTTPS.',
      focusKeyword: 'migration wordpress',
      relatedKeywords: [
        { keyword: 'transfert wordpress' },
        { keyword: 'déménagement site' },
        { keyword: 'changement hébergeur' },
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
          children: [createHeading('Migration WordPress : Guide complet', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Comment migrer un site WordPress ?'),
                  createParagraph(
                    'La migration WordPress nécessite une préparation rigoureuse : sauvegarde complète, export de la base de données, transfert des fichiers, mise à jour des URLs, et tests approfondis. Une migration réussie préserve votre SEO et évite les temps d\'arrêt.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const adobeMagento: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Adobe Magento : La plateforme e-commerce enterprise',
    _status: 'published',
    slug: 'adobe-magento',
    meta: {
      title: 'Adobe Magento : Plateforme e-commerce enterprise - UPTO1',
      description:
        'Découvrez Adobe Magento (anciennement Magento Commerce), la solution e-commerce pour les grandes entreprises.',
      focusKeyword: 'adobe magento',
      relatedKeywords: [
        { keyword: 'magento commerce' },
        { keyword: 'adobe commerce' },
        { keyword: 'e-commerce enterprise' },
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
          children: [createHeading('Adobe Magento : E-commerce enterprise', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Qu\'est-ce qu\'Adobe Magento ?'),
                  createParagraph(
                    'Adobe Magento (anciennement Magento Commerce) est la solution e-commerce leader pour les entreprises. Plateforme hautement personnalisable, scalable et riche en fonctionnalités pour gérer des catalogues complexes et des volumes importants.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const hebergementMagento: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Hébergement Magento : Serveurs optimisés pour Adobe Commerce',
    _status: 'published',
    slug: 'hebergement-magento',
    meta: {
      title: 'Hébergement Magento : Serveurs optimisés - UPTO1',
      description:
        'Hébergement Magento haute performance. Serveurs dédiés et optimisés pour Adobe Commerce.',
      focusKeyword: 'hébergement magento',
      relatedKeywords: [
        { keyword: 'serveur magento' },
        { keyword: 'hosting magento' },
        { keyword: 'cloud magento' },
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
          children: [createHeading('Hébergement Magento optimisé', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Choisir son hébergement Magento'),
                  createParagraph(
                    'Magento nécessite un hébergement puissant : serveur dédié ou VPS, PHP optimisé, Redis/Varnish pour le cache, CDN, et support technique expert. Les performances de votre boutique en dépendent directement.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const migrationMagento: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Migration Magento : Upgrade et transfert de votre boutique',
    _status: 'published',
    slug: 'migration-magento',
    meta: {
      title: 'Migration Magento : Upgrade vers Magento 2 - UPTO1',
      description:
        'Migration Magento 1 vers Magento 2. Transfert sécurisé de votre boutique e-commerce.',
      focusKeyword: 'migration magento',
      relatedKeywords: [
        { keyword: 'upgrade magento' },
        { keyword: 'magento 2 migration' },
        { keyword: 'transfert magento' },
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
          children: [createHeading('Migration Magento : Upgrade sécurisé', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Migrer vers Magento 2'),
                  createParagraph(
                    'La migration de Magento 1 vers Magento 2 est essentielle pour la sécurité et les performances. Processus complexe nécessitant une planification rigoureuse, tests approfondis, et migration des données, thèmes et extensions.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const migrationPrestashop: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Migration PrestaShop : Upgrade et transfert de boutique',
    _status: 'published',
    slug: 'migration-prestashop',
    meta: {
      title: 'Migration PrestaShop : Upgrade vers dernière version - UPTO1',
      description:
        'Migration PrestaShop sécurisée. Upgrade, changement d\'hébergeur et transfert de boutique.',
      focusKeyword: 'migration prestashop',
      relatedKeywords: [
        { keyword: 'upgrade prestashop' },
        { keyword: 'transfert prestashop' },
        { keyword: 'mise à jour prestashop' },
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
          children: [createHeading('Migration PrestaShop sécurisée', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Comment migrer PrestaShop ?'),
                  createParagraph(
                    'La migration PrestaShop nécessite expertise et rigueur : sauvegarde complète, test de compatibilité modules, migration base de données, vérification des URLs, et tests fonctionnels. Préservez vos données et votre SEO.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const themeGratuitPrestashop: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Thème Gratuit PrestaShop : Meilleurs templates free',
    _status: 'published',
    slug: 'theme-gratuit-prestashop',
    meta: {
      title: 'Thème Gratuit PrestaShop : Top templates free 2025 - UPTO1',
      description:
        'Découvrez les meilleurs thèmes PrestaShop gratuits. Templates responsive et optimisés pour démarrer votre boutique.',
      focusKeyword: 'thème gratuit prestashop',
      relatedKeywords: [
        { keyword: 'template prestashop gratuit' },
        { keyword: 'free prestashop theme' },
        { keyword: 'thème prestashop free' },
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
          children: [createHeading('Meilleurs thèmes PrestaShop gratuits', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Les meilleurs thèmes PrestaShop gratuits'),
                  createParagraph(
                    'De nombreux thèmes PrestaShop gratuits de qualité existent pour démarrer votre boutique. Classic Theme, Leo Theme, et autres templates responsive et optimisés. Idéal pour tester avant d\'investir dans un thème premium.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const meilleurThemePrestashop: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Meilleur Thème PrestaShop : Comparatif templates premium',
    _status: 'published',
    slug: 'meilleur-theme-prestashop',
    meta: {
      title: 'Meilleur Thème PrestaShop : Top templates 2025 - UPTO1',
      description:
        'Comparatif des meilleurs thèmes PrestaShop premium. Performance, design et fonctionnalités pour votre boutique.',
      focusKeyword: 'meilleur thème prestashop',
      relatedKeywords: [
        { keyword: 'template prestashop premium' },
        { keyword: 'thème prestashop performant' },
        { keyword: 'best prestashop theme' },
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
          children: [createHeading('Meilleur thème PrestaShop 2025', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Comment choisir le meilleur thème PrestaShop ?'),
                  createParagraph(
                    'Le meilleur thème PrestaShop combine design moderne, performances optimales, compatibilité mobile, et support réactif. Warehouse, Leo, et Alysum figurent parmi les templates premium les plus performants.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

export const optimisationSiteWeb: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Optimisation Site Web : Performance et référencement',
    _status: 'published',
    slug: 'optimisation-site-web',
    meta: {
      title: 'Optimisation Site Web : Performance & SEO - UPTO1',
      description:
        'Optimisez votre site web : vitesse, SEO, UX et conversions. Audit complet et recommandations personnalisées.',
      focusKeyword: 'optimisation site web',
      relatedKeywords: [
        { keyword: 'optimiser site internet' },
        { keyword: 'amélioration performance web' },
        { keyword: 'optimisation seo' },
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
          children: [createHeading('Optimisation site web complète', 'h1')],
        },
      },
    },
    layout: [
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
                  createHeading('Pourquoi optimiser son site web ?'),
                  createParagraph(
                    'L\'optimisation d\'un site web améliore les performances, le référencement, l\'expérience utilisateur et les conversions. Un site optimisé charge rapidement, se positionne mieux sur Google, et génère plus de business.'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  }
}

// Export all pages as an array
export const batch6Pages = [
  hebergementWordpress,
  maintenanceWordpress,
  migrationWordpress,
  adobeMagento,
  hebergementMagento,
  migrationMagento,
  migrationPrestashop,
  themeGratuitPrestashop,
  meilleurThemePrestashop,
  optimisationSiteWeb,
]
