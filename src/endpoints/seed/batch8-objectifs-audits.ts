import { createLowImpactHero, createColoredBannerRichText } from './batch8-helpers'
import type { RequiredDataFromCollectionSlug } from 'payload'

// Batch 8 - Objectifs Business + Audits

// ========================================
// VOS OBJECTIFS BUSINESS
// ========================================

export const objectifsBusinessHub: RequiredDataFromCollectionSlug<'pages'> = {
  title: 'Vos Objectifs Business Digital | Solutions Par Besoin | Upto1',
  slug: 'vos-objectifs-business',
  _status: 'published' as const,
  hero: createLowImpactHero('Vos Objectifs Business'),
  layout: [
    {
      blockType: 'heroSection',
      heading: 'Des solutions adaptées à vos objectifs',
      subheading:
        'Quel que soit votre défi digital, nous avons la solution. Découvrez notre approche par objectif business.',
      badges: [
        { value: '7', label: 'Objectifs couverts' },
        { value: 'ROI', label: 'Mesure garantie' },
        { value: '6 mois', label: 'Résultats' },
      ],
    },
    {
      blockType: 'iconsBox',
      title: 'Choisissez votre objectif',
      color: 'danger' as const,
      items: [
        {
          icon: 'icon-map',
          title: 'Connaître mon positionnement marché',
          description: 'Audit concurrentiel, benchmark, étude de marché digitale.',
        },
        {
          icon: 'icon-magic-wand',
          title: 'Être 1er sur ChatGPT & moteurs IA',
          description: 'GEO (Generative Engine Optimization), visibilité Perplexity.',
        },
        {
          icon: 'icon-users',
          title: 'Générer des leads qualifiés',
          description: 'Inbound marketing, SEO, SEA, lead nurturing automatisé.',
        },
        {
          icon: 'icon-dashboard',
          title: 'Suivre mes performances',
          description: 'Dashboards temps réel, KPI, ROI, analytics avancé.',
        },
        {
          icon: 'icon-cog',
          title: 'Automatiser & gagner du temps',
          description: 'IA, workflows, intégrations, automatisation marketing.',
        },
        {
          icon: 'icon-piggy-bank',
          title: 'Réduire mes coûts d&apos;acquisition',
          description: 'Optimisation SEO/SEA, CRO, marketing efficace.',
        },
        {
          icon: 'icon-chart-bar-trend-up-4',
          title: 'Structurer ma stratégie digitale',
          description: 'Audit 360°, roadmap, plan d&apos;actions, gouvernance.',
        },
      ],
    },
  ],
  meta: {
    title: 'Vos Objectifs Business Digital | Solutions | Upto1',
    description:
      'Solutions digitales par objectif : leads, positionnement, ChatGPT, performances, automatisation, coûts, stratégie. ROI garanti.',
  },
}

const objectifs = [
  {
    title: 'Connaître mon Positionnement Marché',
    slug: 'savoir-positionnement-marche',
    icon: 'icon-map',
    challenge: 'Manque de visibilité sur votre position concurrentielle online',
    solution: 'Audit concurrentiel digital complet',
  },
  {
    title: 'Être Premier sur ChatGPT & Moteurs IA',
    slug: 'premier-chatgpt-moteurs-ia',
    icon: 'icon-magic-wand',
    challenge: 'Invisible sur les nouveaux moteurs de recherche IA',
    solution: 'GEO (Generative Engine Optimization) strategy',
  },
  {
    title: 'Générer des Leads Qualifiés',
    slug: 'generer-leads-qualifies',
    icon: 'icon-users',
    challenge: 'Trafic sans conversion, leads non qualifiés',
    solution: 'Funnel complet : SEO + SEA + Lead Nurturing',
  },
  {
    title: 'Suivre mes Performances',
    slug: 'suivre-performances',
    icon: 'icon-dashboard',
    challenge: 'Pas de vision claire du ROI digital',
    solution: 'Dashboards temps réel, KPI actionables',
  },
  {
    title: 'Automatiser & Gagner du Temps',
    slug: 'automatiser-gagner-temps',
    icon: 'icon-cog',
    challenge: 'Tâches manuelles chronophages',
    solution: 'IA, automation marketing, intégrations',
  },
  {
    title: 'Réduire Coûts d&apos;Acquisition',
    slug: 'reduire-couts-acquisition',
    icon: 'icon-piggy-bank',
    challenge: 'CAC (Customer Acquisition Cost) trop élevé',
    solution: 'SEO long terme, CRO, optimisation campagnes',
  },
  {
    title: 'Structurer ma Stratégie Digitale',
    slug: 'structurer-strategie-digitale',
    icon: 'icon-chart-bar-trend-up-4',
    challenge: 'Actions dispersées, pas de vision cohérente',
    solution: 'Audit 360°, roadmap, plan d&apos;actions priorisé',
  },
]

export const batch8Objectifs: RequiredDataFromCollectionSlug<'pages'>[] = objectifs.map(
  (objectif) => ({
    title: `${objectif.title} | Objectif Business | Upto1`,
    slug: `vos-objectifs-business/${objectif.slug}`,
    _status: 'published' as const,
    hero: createLowImpactHero(objectif.title),
    layout: [
      {
        blockType: 'heroSection',
        heading: objectif.title,
        subheading: objectif.solution,
        badges: [
          { value: 'Audit', label: 'Gratuit' },
          { value: '48h', label: 'Délai' },
          { value: 'ROI', label: 'Mesurable' },
        ],
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
      {
        blockType: 'coloredBanner',
        color: 'danger' as const,
        richText: createColoredBannerRichText(
          'Votre défi',
          objectif.challenge
        ),
      },
      {
        blockType: 'numberedFeatures',
        title: 'Notre méthodologie',
        color: 'success' as const,
        features: [
          { number: '01', title: 'Audit', description: 'Analyse situation actuelle' },
          { number: '02', title: 'Stratégie', description: 'Plan d&apos;actions sur-mesure' },
          { number: '03', title: 'Exécution', description: 'Mise en œuvre opérationnelle' },
          { number: '04', title: 'Résultats', description: 'Suivi KPI, optimisation continue' },
        ],
      },
    ],
    meta: {
      title: `${objectif.title} | Solutions Digitales Upto1`,
      description: `${objectif.challenge}. ${objectif.solution}. Audit gratuit. ROI mesurable.`,
    },
  }),
)

// ========================================
// AUDITS
// ========================================

export const auditsHub: RequiredDataFromCollectionSlug<'pages'> = {
  title: 'Audits Digitaux | SEO, SEA, RGPD, Site Web | Upto1',
  slug: 'audit',
  _status: 'published' as const,
  hero: createLowImpactHero('Nos Audits Digitaux'),
  layout: [
    {
      blockType: 'heroSection',
      heading: 'Audits digitaux complets',
      subheading:
        'Diagnostic précis de votre performance digitale. Recommandations actionnables. Premier audit gratuit.',
      badges: [
        { value: '1er AUDIT', label: 'GRATUIT' },
        { value: '48h', label: 'Délai livraison' },
        { value: '100%', label: 'Actionnable' },
      ],
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
    {
      blockType: 'iconsBox',
      title: 'Types d&apos;audits disponibles',
      color: 'primary' as const,
      items: [
        { icon: 'icon-chart-bar-trend-up-4', title: 'Audit SEO', description: 'Référencement naturel complet' },
        { icon: 'icon-rocket-4', title: 'Audit SEA', description: 'Google Ads, Social Ads' },
        { icon: 'icon-shield', title: 'Audit Tracking & RGPD', description: 'Conformité données' },
        { icon: 'icon-laptop', title: 'Audit Site Web', description: 'UX, performance, technique' },
        { icon: 'icon-map', title: 'Audit Stratégie Digitale', description: 'Vision 360°' },
      ],
    },
  ],
  meta: {
    title: 'Audits Digitaux | SEO, SEA, RGPD | 1er Gratuit | Upto1',
    description:
      'Audits digitaux complets : SEO, SEA, RGPD, site web, stratégie. 1er audit gratuit. Livraison 48h. Recommandations actionnables.',
  },
}

const audits = [
  {
    title: 'Audit SEO',
    slug: 'audit-seo',
    icon: 'icon-chart-bar-trend-up-4',
    includes: ['Technique (crawl, indexation)', 'Sémantique (mots-clés)', 'Netlinking (backlinks)', 'Concurrence'],
    deliverables: 'Rapport 40+ pages, roadmap priorisée',
  },
  {
    title: 'Audit SEA',
    slug: 'audit-sea',
    icon: 'icon-rocket-4',
    includes: ['Structure compte', 'Quality Score', 'Enchères', 'Tracking conversions'],
    deliverables: 'Rapport + recommandations Quick Wins',
  },
  {
    title: 'Audit Tracking & RGPD',
    slug: 'audit-tracking-rgpd',
    icon: 'icon-shield',
    includes: ['Conformité RGPD', 'Consentement cookies', 'Analytics setup', 'Data layer'],
    deliverables: 'Checklist conformité + plan d&apos;actions',
  },
  {
    title: 'Audit Site Web',
    slug: 'audit-site-web',
    icon: 'icon-laptop',
    includes: ['Performance (vitesse)', 'UX/UI', 'Mobile', 'Sécurité'],
    deliverables: 'Rapport technique + recommandations dev',
  },
  {
    title: 'Audit Stratégie Digitale',
    slug: 'audit-strategie-digitale',
    icon: 'icon-map',
    includes: ['Audit 360° (SEO, SEA, Social)', 'Concurrence', 'Persona', 'Tunnel conversion'],
    deliverables: 'Stratégie complète + roadmap 12 mois',
  },
]

export const batch8Audits: RequiredDataFromCollectionSlug<'pages'>[] = audits.map((audit) => ({
  title: `${audit.title} Complet | Diagnostic & Recommandations | Upto1`,
  slug: `audit/${audit.slug}`,
  _status: 'published' as const,
  hero: createLowImpactHero(`${audit.title} Complet`),
  layout: [
    {
      blockType: 'heroSection',
      heading: audit.title,
      subheading: audit.deliverables,
      badges: [
        { value: 'GRATUIT', label: '1er audit' },
        { value: '48h', label: 'Livraison' },
        { value: '100%', label: 'Actionnable' },
      ],
      links: [

        {

          link: {

            type: 'custom' as const,

            label: 'Demander mon audit gratuit',

            appearance: 'default' as const,

            url: '/audit-seo-gratuit',

          },

        },

      ],
    },
    {
      blockType: 'numberedFeatures',
      title: 'Ce qui est analysé',
      color: 'primary' as const,
      features: audit.includes.map((item, idx) => ({
        number: `0${idx + 1}`,
        title: item,
        description: `Analyse approfondie de cet aspect dans votre ${audit.title.toLowerCase()}.`,
      })),
    },
    {
      blockType: 'coloredBanner',
      color: 'success' as const,
      richText: createColoredBannerRichText(
        'Prêt pour votre audit ?',
        `Demandez votre ${audit.title.toLowerCase()} gratuit. Livraison sous 48h. Sans engagement.`
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
    title: `${audit.title} Gratuit | Diagnostic Complet | Upto1`,
    description: `${audit.title} complet : ${audit.includes.join(', ')}. ${audit.deliverables}. Gratuit. 48h.`,
  },
}))

// Exports combinés
export const batch8ObjectifsAll = [objectifsBusinessHub, ...batch8Objectifs]
export const batch8AuditsAll = [auditsHub, ...batch8Audits]
