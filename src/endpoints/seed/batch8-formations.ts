import { createLowImpactHero, createFAQAnswer } from './batch8-helpers'
import type { RequiredDataFromCollectionSlug } from 'payload'

// Batch 8 - Formations Professionnelles
// Hub + 8 formations certifiées SEO & Digital Marketing

export const formationsHub: RequiredDataFromCollectionSlug<'pages'> = {
  title: 'Formations Professionnelles Digital | SEO, Growth, Data | Upto1',
  slug: 'formations-pro',
  _status: 'published' as const,
  hero: createLowImpactHero('Formations Professionnelles Digital'),
  layout: [
    {
      blockType: 'heroSection',
      heading: 'Montez en compétences digitales',
      subheading:
        'Formations SEO, Growth, Analytics par des praticiens. Certifiantes, éligibles OPCO.',
      badges: [
        { value: 'QUALIOPI', label: 'Certification' },
        { value: '500+', label: 'Apprenants formés' },
        { value: '4.8/5', label: 'Satisfaction' },
      ],
    },
    {
      blockType: 'iconsBox',
      title: 'Catalogue de formations',
      description: 'Formations inter ou intra-entreprise',
      color: 'warning' as const,
      items: [
        {
          icon: 'icon-briefcase',
          title: 'Stratégie Digitale Dirigeant',
          description: '2 jours. Vision stratégique, ROI, KPI. Pour décideurs.',
        },
        {
          icon: 'icon-dashboard',
          title: 'KPI Marketing',
          description: '1 jour. Mesurer, analyser, optimiser. Google Analytics, Looker Studio.',
        },
        {
          icon: 'icon-chart-bar-trend-up-4',
          title: 'SEO Non-Techniciens',
          description: '2 jours. Référencement accessible. Pas de code requis.',
        },
        {
          icon: 'icon-rocket-4',
          title: 'SEA Google Ads',
          description: '1 jour. Campagnes Search, Shopping. Optimisation enchères.',
        },
        {
          icon: 'icon-refresh',
          title: 'Refonte Site & SEO',
          description: '1 jour. Migration sans perte trafic. Checklist complète.',
        },
        {
          icon: 'icon-target',
          title: 'Optimisation CRO',
          description: '1 jour. Conversion Rate Optimization. Tests A/B, UX.',
        },
        {
          icon: 'icon-map',
          title: 'Growth Hacking Local',
          description: '1 jour. Google My Business, avis, SEO local.',
        },
        {
          icon: 'icon-file-text',
          title: 'Stratégie Contenu & SEO',
          description: '2 jours. Content marketing, ligne éditoriale, planning.',
        },
      ],
    },
    {
      blockType: 'statistics',
      title: 'Impact formations',
      stats: [
        { value: '4.8/5', label: 'Satisfaction' },
        { value: '95%', label: 'Recommandation' },
        { value: '500+', label: 'Formés' },
        { value: '100%', label: 'Opérationnels' },
      ],
    },
  ],
  meta: {
    title: 'Formations Pro Digital | SEO, Growth, Data | Upto1',
    description:
      'Formations professionnelles SEO, Growth, Analytics. QUALIOPI, éligibles OPCO. Inter/intra. 4.8/5 satisfaction. Catalogue complet.',
  },
}

const formations = [
  {
    title: 'Piloter sa Stratégie Digitale (Dirigeant)',
    slug: 'piloter-strategie-digitale-dirigeant',
    duration: '2 jours (14h)',
    level: 'Dirigeants, DG, DAF',
    objectives: [
      'Comprendre enjeux digitaux 2025',
      'Bâtir stratégie alignée business',
      'Mesurer ROI investissements',
      'Piloter équipes/prestataires',
    ],
    price: '1800€ HT/pers',
  },
  {
    title: 'KPI Marketing : Mesurer & Optimiser',
    slug: 'kpi-marketing',
    duration: '1 jour (7h)',
    level: 'Resp. Marketing, Traffic Manager',
    objectives: [
      'Identifier KPI pertinents',
      'Google Analytics 4 mastery',
      'Dashboards Looker Studio',
      'Analyser & recommander',
    ],
    price: '900€ HT/pers',
  },
  {
    title: 'SEO pour Non-Techniciens',
    slug: 'seo-non-techniciens',
    duration: '2 jours (14h)',
    level: 'Marketing, Communication',
    objectives: [
      'Fonctionnement moteurs recherche',
      'Optimiser contenus SEO',
      'Netlinking & popularité',
      'Outils essentiels (GSC, Semrush)',
    ],
    price: '1600€ HT/pers',
  },
  {
    title: 'SEA & Google Ads',
    slug: 'sea-google-ads',
    duration: '1 jour (7h)',
    level: 'Marketing, Traffic Manager',
    objectives: [
      'Créer campagnes Search/Shopping',
      'Optimiser Quality Score',
      'Enchères intelligentes',
      'Analyse performances',
    ],
    price: '900€ HT/pers',
  },
  {
    title: 'Refonte de Site & SEO',
    slug: 'refonte-site-seo',
    duration: '1 jour (7h)',
    level: 'Chef projet web, Dev',
    objectives: [
      'Checklist migration SEO',
      'Redirections 301',
      'Éviter perte trafic',
      'Optimiser performance',
    ],
    price: '900€ HT/pers',
  },
  {
    title: 'Optimisation CRO',
    slug: 'optimisation-cro',
    duration: '1 jour (7h)',
    level: 'E-commerce, Product Owner',
    objectives: [
      'Analyser parcours utilisateur',
      'Tests A/B & multivariés',
      'UX & persuasion',
      'Augmenter taux conversion',
    ],
    price: '900€ HT/pers',
  },
  {
    title: 'Growth Hacking Local',
    slug: 'growth-hacking-local',
    duration: '1 jour (7h)',
    level: 'Commerçants, TPE',
    objectives: [
      'Google My Business optimisé',
      'Générer avis clients',
      'SEO local',
      'Publicité locale efficace',
    ],
    price: '800€ HT/pers',
  },
  {
    title: 'Stratégie Contenu, Conversion & SEO',
    slug: 'strategie-contenu-conversion-seo',
    duration: '2 jours (14h)',
    level: 'Content Manager, Rédacteurs',
    objectives: [
      'Ligne éditoriale SEO',
      'Planning de contenu',
      'Écriture persuasive',
      'Distribution multicanal',
    ],
    price: '1600€ HT/pers',
  },
]

export const batch8Formations: RequiredDataFromCollectionSlug<'pages'>[] = formations.map(
  (formation) => ({
    title: `${formation.title} | Formation Pro | Upto1`,
    slug: `formations-pro/${formation.slug}`,
    _status: 'published' as const,
    hero: createLowImpactHero(formation.title),
    layout: [
      {
        blockType: 'heroSection',
        heading: formation.title,
        subheading: `Formation ${formation.duration} - ${formation.level}`,
        badges: [
          { value: formation.duration, label: 'Durée' },
          { value: formation.price, label: 'Tarif inter' },
          { value: 'QUALIOPI', label: 'Certifiée' },
        ],
        links: [

          {

            link: {

              type: 'custom' as const,

              label: 'Demander un devis',

              appearance: 'default' as const,

              url: '/contact',

            },

          },

        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Objectifs pédagogiques',
        color: 'warning' as const,
        features: formation.objectives.map((obj, idx) => ({
          number: `0${idx + 1}`,
          title: obj,
          description: 'À l&apos;issue de la formation, vous serez capable de maîtriser cet objectif.',
        })),
      },
      {
        blockType: 'iconsBox',
        title: 'Modalités pratiques',
        color: 'success' as const,
        items: [
          { icon: 'icon-calendar', title: 'Inter-entreprise', description: 'Sessions planifiées. Plusieurs participants.' },
          { icon: 'icon-users', title: 'Intra-entreprise', description: 'Sur-mesure pour votre équipe. Dans vos locaux.' },
          { icon: 'icon-laptop', title: 'Distanciel possible', description: 'Formation en visio si besoin.' },
          { icon: 'icon-certificate', title: 'Certification', description: 'Attestation de formation. Éligible OPCO.' },
        ],
      },
      {
        blockType: 'faq',
        title: 'FAQ Formation',
        enableSchemaMarkup: true,
        questions: [
          {
            question: 'La formation est-elle éligible au financement OPCO ?',
            answer: createFAQAnswer('Oui, nous sommes certifiés QUALIOPI. Nos formations sont éligibles aux financements OPCO, CPF (selon formation), et plan de développement des compétences.'),
          },
          {
            question: 'Quel est le nombre de participants maximum ?',
            answer: createFAQAnswer('En inter-entreprise : 8 participants max pour garantir qualité pédagogique. En intra : jusqu&apos;à 12 participants de votre entreprise.'),
          },
          {
            question: 'Y a-t-il des prérequis ?',
            answer: createFAQAnswer('Prérequis variables selon formation. En général : bonne maîtrise informatique, connaissance de base du web. Détails fournis dans programme.'),
          },
        ],
      },
    ],
    meta: {
      title: `${formation.title} | Formation Pro QUALIOPI | Upto1`,
      description: `Formation ${formation.title}. ${formation.duration}. ${formation.level}. QUALIOPI. ${formation.objectives[0]}. Devis gratuit.`,
    },
  }),
)

export const batch8FormationsAll = [formationsHub, ...batch8Formations]
