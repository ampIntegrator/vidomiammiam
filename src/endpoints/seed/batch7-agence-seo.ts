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

// Batch 7 Pages - Agency & SEO Services

export const agencePublicite: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Agence Publicité : Campagnes digitales performantes',
    _status: 'published',
    slug: 'agence-publicite',
    meta: {
      title: 'Agence Publicité : Campagnes digitales & SEA - UPTO1',
      description:
        'Agence de publicité digitale experte. Google Ads, Facebook Ads et campagnes multi-canal pour booster votre croissance.',
      focusKeyword: 'agence publicité',
      relatedKeywords: [
        { keyword: 'agence pub digitale' },
        { keyword: 'publicité en ligne' },
        { keyword: 'campagne publicitaire' },
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
          children: [createHeading('Agence Publicité digitale', 'h1')],
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
                  createHeading('Agence de publicité digitale'),
                  createParagraph(
                    'Notre agence publicité conçoit et déploie des campagnes digitales performantes sur Google Ads, Facebook Ads, LinkedIn Ads et autres plateformes. ROI mesurable et optimisation continue pour maximiser vos résultats.'
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

export const agenceIA: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Agence IA : Intelligence Artificielle pour votre business',
    _status: 'published',
    slug: 'agence-ia',
    meta: {
      title: 'Agence IA : Solutions Intelligence Artificielle - UPTO1',
      description:
        'Agence spécialisée en intelligence artificielle. Chatbots, automatisation et solutions IA sur mesure pour votre entreprise.',
      focusKeyword: 'agence ia',
      relatedKeywords: [
        { keyword: 'agence intelligence artificielle' },
        { keyword: 'consulting ia' },
        { keyword: 'solutions ai' },
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
          children: [createHeading('Agence IA : Intelligence Artificielle', 'h1')],
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
                  createHeading('Intelligence Artificielle pour votre business'),
                  createParagraph(
                    'Notre agence IA développe des solutions d\'intelligence artificielle adaptées à vos besoins : chatbots conversationnels, automatisation des processus, analyse prédictive, et personnalisation à grande échelle.'
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

export const agencesCommFrance: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Agences de Communication France : Top agences 2025',
    _status: 'published',
    slug: 'agences-communication-france',
    meta: {
      title: 'Agences de Communication France : Classement 2025 - UPTO1',
      description:
        'Découvrez les meilleures agences de communication en France. Classement, expertises et critères de sélection.',
      focusKeyword: 'agences de communication france',
      relatedKeywords: [
        { keyword: 'agence comm paris' },
        { keyword: 'agence digitale france' },
        { keyword: 'top agences' },
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
          children: [createHeading('Top agences communication France', 'h1')],
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
                  createHeading('Les meilleures agences de communication en France'),
                  createParagraph(
                    'La France compte des centaines d\'agences de communication digitale. Découvrez notre sélection des meilleures agences par expertise, secteur et localisation pour trouver le partenaire idéal.'
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

export const referenceurGoogle: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Référenceur Google : Expert en positionnement Google',
    _status: 'published',
    slug: 'referenceur-google',
    meta: {
      title: 'Référenceur Google : Expert SEO positionnement - UPTO1',
      description:
        'Référenceur Google expert pour améliorer votre positionnement. Techniques avancées et résultats mesurables.',
      focusKeyword: 'référenceur google',
      relatedKeywords: [
        { keyword: 'expert google seo' },
        { keyword: 'spécialiste google' },
        { keyword: 'référencement google' },
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
          children: [createHeading('Référenceur Google expert', 'h1')],
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
                  createHeading('Expert en référencement Google'),
                  createParagraph(
                    'Un référenceur Google expert maîtrise les algorithmes et les meilleures pratiques pour positionner votre site en première page. Audit complet, stratégie personnalisée et optimisations continues pour des résultats durables.'
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

export const prestataireSeo: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Prestataire SEO : Services de référencement externalisés',
    _status: 'published',
    slug: 'prestataire-seo',
    meta: {
      title: 'Prestataire SEO : Services référencement pro - UPTO1',
      description:
        'Prestataire SEO professionnel pour externaliser votre référencement. Expertise, flexibilité et résultats mesurables.',
      focusKeyword: 'prestataire seo',
      relatedKeywords: [
        { keyword: 'sous-traitance seo' },
        { keyword: 'externalisation seo' },
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
          children: [createHeading('Prestataire SEO professionnel', 'h1')],
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
                  createHeading('Externaliser son SEO avec un prestataire'),
                  createParagraph(
                    'Faire appel à un prestataire SEO permet de bénéficier d\'une expertise pointue sans recruter en interne. Flexibilité, scalabilité et accès à des compétences multiples pour développer votre visibilité.'
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

export const societéReferencement: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Société de Référencement : Agence SEO professionnelle',
    _status: 'published',
    slug: 'societe-referencement',
    meta: {
      title: 'Société de Référencement : Agence SEO pro - UPTO1',
      description:
        'Société de référencement spécialisée en SEO. Services complets pour améliorer votre visibilité sur Google.',
      focusKeyword: 'société de référencement',
      relatedKeywords: [
        { keyword: 'entreprise seo' },
        { keyword: 'agence référencement' },
        { keyword: 'cabinet seo' },
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
          children: [createHeading('Société de référencement SEO', 'h1')],
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
                  createHeading('Choisir une société de référencement'),
                  createParagraph(
                    'Une société de référencement professionnelle dispose de l\'expertise, des outils et des ressources pour développer votre visibilité en ligne. Méthodologie éprouvée, reporting transparent et accompagnement sur le long terme.'
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

export const consultantReferencement: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Consultant Référencement : Expert SEO indépendant',
    _status: 'published',
    slug: 'consultant-referencement',
    meta: {
      title: 'Consultant Référencement : Expert SEO freelance - UPTO1',
      description:
        'Consultant en référencement naturel pour optimiser votre SEO. Audit, stratégie et accompagnement personnalisé.',
      focusKeyword: 'consultant référencement',
      relatedKeywords: [
        { keyword: 'consultant seo' },
        { keyword: 'expert référencement' },
        { keyword: 'freelance seo' },
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
          children: [createHeading('Consultant référencement expert', 'h1')],
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
                  createHeading('Expert en référencement naturel'),
                  createParagraph(
                    'Le consultant en référencement est un expert SEO qui vous accompagne dans l\'optimisation de votre visibilité. Approche personnalisée, disponibilité et expertise pointue pour atteindre vos objectifs.'
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

export const freelanceSeo: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Freelance SEO : Consultant indépendant en référencement',
    _status: 'published',
    slug: 'freelance-seo',
    meta: {
      title: 'Freelance SEO : Consultant référencement indépendant - UPTO1',
      description:
        'Freelance SEO expert pour votre référencement naturel. Flexibilité, réactivité et expertise pour booster votre visibilité.',
      focusKeyword: 'freelance seo',
      relatedKeywords: [
        { keyword: 'consultant seo freelance' },
        { keyword: 'expert seo indépendant' },
        { keyword: 'référenceur freelance' },
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
          children: [createHeading('Freelance SEO expert', 'h1')],
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
                  createHeading('Faire appel à un freelance SEO'),
                  createParagraph(
                    'Un freelance SEO offre flexibilité et expertise sans les frais d\'une agence. Contact direct, réactivité et accompagnement personnalisé pour optimiser votre référencement naturel.'
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

export const lsiKeywords: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'LSI Keywords : Mots-clés sémantiques pour le SEO',
    _status: 'published',
    slug: 'lsi-keywords',
    meta: {
      title: 'LSI Keywords : Optimisation sémantique SEO - UPTO1',
      description:
        'Découvrez les LSI keywords (mots-clés LSI) pour enrichir votre contenu SEO. Indexation sémantique latente et optimisation.',
      focusKeyword: 'lsi keywords',
      relatedKeywords: [
        { keyword: 'mots clés sémantiques' },
        { keyword: 'cocon sémantique' },
        { keyword: 'champ lexical seo' },
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
          children: [createHeading('LSI Keywords : Guide complet', 'h1')],
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
                  createHeading('Qu\'est-ce que les LSI Keywords ?'),
                  createParagraph(
                    'Les LSI Keywords (Latent Semantic Indexing) sont des mots et expressions sémantiquement liés à votre mot-clé principal. Ils aident Google à comprendre le contexte de votre contenu et améliorent votre positionnement.'
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

export const agenceReferencement: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Agence de Référencement : Services SEO professionnels',
    _status: 'published',
    slug: 'agence-referencement',
    meta: {
      title: 'Agence de Référencement : Expert SEO & stratégie - UPTO1',
      description:
        'Agence de référencement naturel experte. Audit SEO, stratégie et optimisations pour développer votre visibilité Google.',
      focusKeyword: 'agence de référencement',
      relatedKeywords: [
        { keyword: 'agence seo' },
        { keyword: 'agence référencement naturel' },
        { keyword: 'société seo' },
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
          children: [createHeading('Agence de référencement SEO', 'h1')],
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
                  createHeading('Services d\'une agence de référencement'),
                  createParagraph(
                    'Une agence de référencement vous accompagne dans l\'optimisation complète de votre SEO : audit technique, recherche de mots-clés, optimisation on-page, netlinking, et suivi des performances pour un ROI mesurable.'
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
export const batch7Pages = [
  agencePublicite,
  agenceIA,
  agencesCommFrance,
  referenceurGoogle,
  prestataireSeo,
  societéReferencement,
  consultantReferencement,
  freelanceSeo,
  lsiKeywords,
  agenceReferencement,
]
