import { createLowImpactHero, createColoredBannerRichText } from './batch8-helpers'
import type { RequiredDataFromCollectionSlug } from 'payload'

// Batch 8 - Pages Insights/Corporate + Contact

// ========================================
// INSIGHTS (Pages corporate)
// ========================================

export const insightsHub: RequiredDataFromCollectionSlug<'pages'> = {
  title: 'Insights | Blog, Guides, Cas Clients, FAQ | Upto1',
  slug: 'insights',
  _status: 'published' as const,
  hero: createLowImpactHero('Insights & Ressources'),
  layout: [
    {
      blockType: 'heroSection',
      heading: 'Ressources pour votre croissance digitale',
      subheading: 'Blog, guides, cas clients, FAQ. Tout pour réussir votre transformation digitale.',
      badges: [
        { value: '100+', label: 'Articles' },
        { value: '20+', label: 'Guides' },
        { value: '50+', label: 'Cas clients' },
      ],
    },
    {
      blockType: 'iconsBox',
      title: 'Nos ressources',
      color: 'primary' as const,
      items: [
        { icon: 'icon-file-text', title: 'Blog', description: 'Actualités SEO, Growth, Analytics' },
        { icon: 'icon-book', title: 'Guides', description: 'Guides pratiques téléchargeables' },
        { icon: 'icon-trophy', title: 'Cas Clients', description: 'Success stories détaillées' },
        { icon: 'icon-question', title: 'FAQ', description: 'Réponses à vos questions' },
        { icon: 'icon-users', title: 'Équipe', description: 'Rencontrez nos experts' },
        { icon: 'icon-briefcase', title: 'Recrutement', description: 'Rejoignez l&apos;aventure' },
      ],
    },
  ],
  meta: {
    title: 'Insights | Blog, Guides, Cas Clients | Upto1',
    description: 'Ressources digitales : blog SEO, guides pratiques, cas clients, FAQ. Expertise Upto1.',
  },
}

const insightsPages = [
  {
    title: 'Équipe Upto1',
    slug: 'insights/equipe',
    heading: 'Notre Équipe',
    description: '15+ experts digitaux passionnés à votre service.',
  },
  {
    title: 'Notre ADN 360°',
    slug: 'insights/notre-adn-360',
    heading: 'Notre ADN 360°',
    description: 'Vision globale, expertise pointue, résultats mesurables.',
  },
  {
    title: 'Vision : Une Agence Différente',
    slug: 'insights/vision-agence-differente',
    heading: 'Une Agence Différente',
    description: 'Transparence, pédagogie, résultats. Notre approche unique.',
  },
  {
    title: 'Méthode : Audit, Action, Résultat',
    slug: 'insights/methode-audit-action-resultat',
    heading: 'Notre Méthode',
    description: '1. Audit, 2. Stratégie, 3. Exécution, 4. Optimisation.',
  },
  {
    title: 'Pourquoi Choisir Upto1',
    slug: 'insights/pourquoi-choisir-upto1',
    heading: 'Pourquoi Nous Choisir',
    description: '15 ans d&apos;expertise, ROI prouvé, satisfaction 95%.',
  },
  {
    title: 'Cas Clients',
    slug: 'insights/cas-clients',
    heading: 'Success Stories',
    description: 'Découvrez comment nous avons aidé nos clients.',
  },
  {
    title: 'Recrutement',
    slug: 'insights/recrutement',
    heading: 'Rejoignez-Nous',
    description: 'CDI, stage, alternance. Postulez chez Upto1.',
  },
]

export const batch8InsightsPages: RequiredDataFromCollectionSlug<'pages'>[] = insightsPages.map(
  (page) => ({
    title: `${page.title} | Upto1`,
    slug: page.slug,
    _status: 'published' as const,
    hero: createLowImpactHero(page.heading),
    layout: [
      {
        blockType: 'heroSection',
        heading: page.heading,
        subheading: page.description,
        links: [

          {

            link: {

              type: 'custom' as const,

              label: 'En savoir plus',

              appearance: 'default' as const,

              url: '/contact',

            },

          },

        ],
      },
      {
        blockType: 'coloredBanner',
        color: 'success' as const,
        richText: createColoredBannerRichText(
          'Travaillons ensemble',
          'Discutons de votre projet digital. Premier échange gratuit et sans engagement.'
        ),
        links: [
          {
            link: {
              type: 'custom' as const,
              label: 'Prendre contact',
              appearance: 'default' as const,
              url: '/contact',
            },
          },
        ],
      },
    ],
    meta: {
      title: `${page.title} | Upto1`,
      description: page.description,
    },
  }),
)

// ========================================
// CONTACT
// ========================================

export const contactHub: RequiredDataFromCollectionSlug<'pages'> = {
  title: 'Contact | Parlons de Votre Projet Digital | Upto1',
  slug: 'contact',
  _status: 'published' as const,
  hero: createLowImpactHero('Contactez-Nous'),
  layout: [
    {
      blockType: 'heroSection',
      heading: 'Parlons de votre projet',
      subheading: 'Audit gratuit, devis personnalisé, réponse sous 24h.',
      badges: [
        { value: '24h', label: 'Réponse' },
        { value: 'GRATUIT', label: 'Audit' },
        { value: '0', label: 'Engagement' },
      ],
      links: [

        {

          link: {

            type: 'custom' as const,

            label: 'Demander un audit',

            appearance: 'default' as const,

            url: '/audit-seo-gratuit',

          },

        },

      ],
    },
    {
      blockType: 'iconsBox',
      title: 'Plusieurs façons de nous joindre',
      color: 'success' as const,
      items: [
        { icon: 'icon-phone', title: 'Par Téléphone', description: '+33 1 XX XX XX XX' },
        { icon: 'icon-email', title: 'Par Email', description: 'contact@upto1.fr' },
        { icon: 'icon-calendar', title: 'Prendre RDV', description: 'Visio ou présentiel' },
        { icon: 'icon-map', title: 'Nos Bureaux', description: 'Paris, Lyon, et 7 autres villes' },
      ],
    },
  ],
  meta: {
    title: 'Contact | Audit Gratuit | Réponse 24h | Upto1',
    description:
      'Contactez Upto1 pour votre projet digital. Audit gratuit. Devis personnalisé. Réponse sous 24h. 9 villes en France.',
  },
}

const contactPages = [
  {
    title: 'Formulaire de Contact',
    slug: 'contact/formulaire',
    heading: 'Envoyez-nous un message',
    description: 'Remplissez ce formulaire, nous vous recontactons sous 24h.',
  },
  {
    title: 'Consultation Gratuite',
    slug: 'contact/consultation-gratuite',
    heading: 'Réservez votre consultation gratuite',
    description: '30 minutes d&apos;échange avec un expert. Sans engagement.',
  },
]

export const batch8ContactPages: RequiredDataFromCollectionSlug<'pages'>[] = contactPages.map(
  (page) => ({
    title: `${page.title} | Upto1`,
    slug: page.slug,
    _status: 'published' as const,
    hero: createLowImpactHero(page.heading),
    layout: [
      {
        blockType: 'heroSection',
        heading: page.heading,
        subheading: page.description,
        badges: [
          { value: '24h', label: 'Réponse' },
          { value: 'GRATUIT', label: '1er échange' },
          { value: '0', label: 'Engagement' },
        ],
        links: [

          {

            link: {

              type: 'custom' as const,

              label: 'Prendre contact',

              appearance: 'default' as const,

              url: '/audit-seo-gratuit',

            },

          },

        ],
      },
      {
        blockType: 'coloredBanner',
        color: 'primary' as const,
        richText: createColoredBannerRichText(
          'Besoin d&apos;aide maintenant ?',
          'Appelez-nous directement ou envoyez un email à contact@upto1.fr'
        ),
        links: [
          {
            link: {
              type: 'custom' as const,
              label: 'Audit gratuit',
              appearance: 'default' as const,
              url: '/audit-seo-gratuit',
            },
          },
        ],
      },
    ],
    meta: {
      title: `${page.title} | Upto1`,
      description: page.description,
    },
  }),
)

// Exports combinés
export const batch8InsightsAll = [insightsHub, ...batch8InsightsPages]
export const batch8ContactAll = [contactHub, ...batch8ContactPages]
