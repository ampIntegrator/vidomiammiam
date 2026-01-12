import { createLowImpactHero, createColoredBannerRichText, createFAQAnswer } from './batch8-helpers'
import type { RequiredDataFromCollectionSlug } from 'payload'

// Batch 8 - Nos Offres
// Hub + 11 offres de services SEO-optimisées

// Page hub "Nos offres"
export const nosOffresHub: RequiredDataFromCollectionSlug<'pages'> = {
  title: 'Nos Offres Digitales 360° | SEO, Growth, Data, IA | Upto1',
  slug: 'nos-offres',
  _status: 'published' as const,
  hero: createLowImpactHero('Nos offres digitales 360°'),
  layout: [
    {
      blockType: 'heroSection',
      heading: 'Des solutions complètes pour votre croissance',
      subheading:
        'SEO, Growth, Analytics, IA, RGPD : une expertise 360° au service de vos objectifs business',
      badges: [
        { value: '10+', label: 'Services experts' },
        { value: '200+', label: 'Clients satisfaits' },
        { value: 'ROI x3', label: 'Moyenne constatée' },
      ],
    },
    {
      blockType: 'iconsBox',
      title: 'Notre gamme de services',
      description: 'Expertise digitale complète pour accélérer votre croissance',
      color: 'primary' as const,
      items: [
        {
          icon: 'icon-chart-bar-trend-up-4',
          title: 'Gestion SEO',
          description:
            'Référencement naturel : audit, stratégie, netlinking, suivi. Visibilité Google durable.',
        },
        {
          icon: 'icon-rocket-4',
          title: 'Gestion SEA',
          description:
            'Google Ads, Microsoft Ads, Social Ads. Acquisition payante optimisée, ROI maximisé.',
        },
        {
          icon: 'icon-magic-wand',
          title: 'IA Entreprise',
          description:
            'ChatGPT, GEO, automation IA. Intégration IA dans vos process, formation équipes.',
        },
        {
          icon: 'icon-dashboard',
          title: 'Analytics & Data',
          description:
            'Tracking RGPD, dashboards Looker Studio, analyse comportementale, data-driven decisions.',
        },
        {
          icon: 'icon-shield',
          title: 'Conformité RGPD',
          description:
            'Audit RGPD, consentement cookies, DPO externe, mise en conformité données.',
        },
        {
          icon: 'icon-code',
          title: 'Développement Sur-Mesure',
          description:
            'Applications métier, intégrations API, automatisation, tech moderne (React, Node).',
        },
        {
          icon: 'icon-pie-chart',
          title: 'Dashboard Sur-Mesure',
          description:
            'Looker Studio, Power BI, dashboards temps réel. Connecteurs multi-sources.',
        },
        {
          icon: 'icon-layers',
          title: 'Marque Blanche',
          description:
            'SEO/SEA en sous-traitance pour agences. Vous gardez le client, on fait le travail.',
        },
        {
          icon: 'icon-handshake',
          title: 'Digital Partner Program',
          description:
            'Partenariat long terme, commissions récurrentes, formations, support technique.',
        },
        {
          icon: 'icon-user-tie',
          title: 'Expert Détaché',
          description:
            'Consultants SEO/Growth en régie chez vous. Renfort ponctuel ou mission longue.',
        },
      ],
    },
    {
      blockType: 'statistics',
      title: 'Impact de nos offres',
      description: 'Résultats moyens constatés',
      stats: [
        { value: '+180%', label: 'Trafic organique' },
        { value: '-40%', label: 'Coût acquisition' },
        { value: 'x3', label: 'ROI moyen' },
        { value: '95%', label: 'Clients satisfaits' },
      ],
    },
  ],
  meta: {
    title: 'Nos Offres Digitales 360° | SEO, Growth, Data, IA | Upto1',
    description:
      'Services digitaux experts : gestion SEO, SEA, IA entreprise, analytics, RGPD, dev sur-mesure, marque blanche. ROI prouvé. Découvrez nos offres.',
  },
}

// Détail des offres
const offres = [
  {
    name: 'Gestion SEO',
    slug: 'gestion-seo',
    icon: 'icon-chart-bar-trend-up-4',
    baseline: 'Référencement naturel piloté pour visibilité Google durable',
    includes: [
      'Audit SEO technique + sémantique',
      'Stratégie mots-clés & concurrentielle',
      'Optimisation on-page (contenus, structure)',
      'Netlinking qualitatif (backlinks)',
      'Suivi positions & trafic mensuel',
      'Reporting transparent',
    ],
    benefits: [
      'Trafic qualifié et durable',
      'Meilleur ROI que SEA sur le long terme',
      'Autonomie progressive',
    ],
    pricing: 'À partir de 1500€/mois',
  },
  {
    name: 'Gestion SEA',
    slug: 'gestion-sea',
    icon: 'icon-rocket-4',
    baseline: 'Campagnes Google Ads & Social Ads optimisées pour ROI maximum',
    includes: [
      'Audit comptes existants',
      'Stratégie acquisition payante',
      'Création/gestion campagnes Search, Display, Shopping',
      'A/B testing créas et landings',
      'Optimisation enchères & Quality Score',
      'Reporting ROI hebdomadaire',
    ],
    benefits: [
      'Résultats immédiats',
      'Contrôle budget précis',
      'Scalabilité rapide',
    ],
    pricing: '15% budget média (min. 800€/mois)',
  },
  {
    name: 'IA Entreprise',
    slug: 'ia-entreprise',
    icon: 'icon-magic-wand',
    baseline: 'Intégration IA pour automatiser, innover et rester compétitif',
    includes: [
      'Audit maturité IA',
      'ChatGPT Enterprise setup',
      'GEO (Generative Engine Optimization)',
      'Automatisation process IA',
      'Formation équipes (prompting, outils)',
      'Veille technologique IA',
    ],
    benefits: [
      'Gain temps & productivité',
      'Innovation produit/service',
      'Visibilité moteurs IA (ChatGPT, Perplexity)',
    ],
    pricing: 'Sur devis (à partir de 3000€)',
  },
  {
    name: 'Analytics, Tracking & Data',
    slug: 'analytics-tracking-data',
    icon: 'icon-dashboard',
    baseline: 'Mesure, analyse et optimisation data-driven RGPD-compliant',
    includes: [
      'Audit tracking existant',
      'Plan de taggage & implémentation',
      'GA4, Matomo, Piwik Pro',
      'Dashboards Looker Studio custom',
      'Analyse comportementale avancée',
      'Recommandations actionnables',
    ],
    benefits: [
      'Décisions basées sur données réelles',
      'ROI mesurable',
      'Conformité RGPD garantie',
    ],
    pricing: 'À partir de 2000€ setup + 500€/mois',
  },
  {
    name: 'Conformité RGPD & Données',
    slug: 'conformite-rgpd-donnees',
    icon: 'icon-shield',
    baseline: 'Mise en conformité RGPD et protection données personnelles',
    includes: [
      'Audit RGPD complet',
      'Registre traitements',
      'Politique confidentialité & CGU',
      'Consentement cookies (CMP)',
      'DPO externe',
      'Formation équipes',
    ],
    benefits: [
      'Évite amendes CNIL (jusqu&apos;à 4% CA)',
      'Confiance clients',
      'Sérénité juridique',
    ],
    pricing: 'À partir de 2500€ audit + 300€/mois DPO',
  },
  {
    name: 'Développement Sur-Mesure',
    slug: 'developpement-sur-mesure',
    icon: 'icon-code',
    baseline: 'Applications métier et outils digitaux sur-mesure',
    includes: [
      'Analyse besoins & cahier charges',
      'UX/UI design',
      'Développement (React, Node, Python)',
      'Intégrations API tierces',
      'Tests & déploiement',
      'Maintenance évolutive',
    ],
    benefits: [
      'Outil 100% adapté',
      'Gain productivité',
      'Avantage concurrentiel',
    ],
    pricing: 'Sur devis (à partir de 15K€)',
  },
  {
    name: 'Dashboard Sur-Mesure',
    slug: 'dashboard-sur-mesure',
    icon: 'icon-pie-chart',
    baseline: 'Tableaux de bord temps réel pour piloter votre activité',
    includes: [
      'Audit sources données',
      'Design dashboards (Looker Studio, Power BI)',
      'Connecteurs multi-sources',
      'Automatisation refresh',
      'Formation utilisation',
      'Évolutions trimestrielles',
    ],
    benefits: [
      'Vision 360° temps réel',
      'Partage équipes facilité',
      'Alertes automatiques',
    ],
    pricing: 'À partir de 1500€ setup + 200€/mois',
  },
  {
    name: 'Marque Blanche & Sous-Traitance',
    slug: 'marque-blanche-sous-traitance',
    icon: 'icon-layers',
    baseline: 'SEO/SEA en marque blanche pour agences web & comm',
    includes: [
      'Exécution missions SEO/SEA',
      'Reporting sous votre marque',
      'Support technique',
      'Formation équipes commerciales',
      'Outils & méthodologies',
      'Confidentialité totale',
    ],
    benefits: [
      'Élargir offre sans recruter',
      'Marge confortable',
      'Clients fidélisés',
    ],
    pricing: '30-40% marge agence (selon volume)',
  },
  {
    name: 'Digital Partner Program',
    slug: 'digital-partner-program',
    icon: 'icon-handshake',
    baseline: 'Partenariat long terme avec commissions récurrentes',
    includes: [
      'Programme apporteur affaires',
      'Commissions récurrentes 10-20%',
      'Formations partenaires',
      'Support avant-vente',
      'Co-branding possible',
      'Événements partenaires',
    ],
    benefits: [
      'Revenus passifs',
      'Montée en compétences',
      'Réseau professionnel',
    ],
    pricing: 'Gratuit, commissions sur ventes',
  },
  {
    name: 'Expert Détaché',
    slug: 'expert-detache',
    icon: 'icon-user-tie',
    baseline: 'Consultants SEO/Growth en régie dans vos locaux',
    includes: [
      'Consultant senior (5-10 ans exp)',
      'Disponibilité à la carte (1-5j/semaine)',
      'Intégration équipe',
      'Transfert de compétences',
      'Outils & méthodologies',
      'Reporting managérial',
    ],
    benefits: [
      'Expertise sans recrutement',
      'Flexibilité totale',
      'Opérationnel immédiat',
    ],
    pricing: '600-900€/jour (selon profil)',
  },
]

export const batch8NosOffres: RequiredDataFromCollectionSlug<'pages'>[] = offres.map((offre) => ({
  title: `${offre.name} | Service Expert ${offre.name} | Upto1`,
  slug: `nos-offres/${offre.slug}`,
  _status: 'published' as const,
  hero: createLowImpactHero(offre.name),
  layout: [
    {
      blockType: 'heroSection',
      heading: offre.name,
      subheading: offre.baseline,
      badges: [
        { value: '50+', label: 'Clients' },
        { value: '15 ans', label: 'Expertise' },
        { value: offre.pricing, label: 'Tarif' },
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
      title: 'Ce qui est inclus',
      description: `Service complet ${offre.name.toLowerCase()}`,
      color: 'primary' as const,
      features: offre.includes.map((item, idx) => ({
        number: `0${idx + 1}`,
        title: item,
        description: `Prestation ${offre.name.toLowerCase()} par nos experts.`,
      })),
    },
    {
      blockType: 'iconsBox',
      title: 'Bénéfices concrets',
      description: `Pourquoi choisir notre offre ${offre.name.toLowerCase()}`,
      color: 'success' as const,
      items: offre.benefits.map((benefit) => ({
        icon: offre.icon,
        title: benefit,
        description: `Avantage de notre service ${offre.name.toLowerCase()}.`,
      })),
    },
    {
      blockType: 'coloredBanner',
      color: 'primary' as const,
      richText: createColoredBannerRichText(
        'Prêt à démarrer ?',
        `Discutons de votre projet ${offre.name.toLowerCase()}. Audit gratuit et devis personnalisé sous 48h.`
      ),
      links: [
        {
          link: {
            type: 'custom' as const,
            label: 'Demander un audit gratuit',
            appearance: 'default' as const,
            url: '/audit-seo-gratuit',
          },
        },
      ],
    },
    {
      blockType: 'faq',
      title: `FAQ ${offre.name}`,
      enableSchemaMarkup: true,
      questions: [
        {
          question: `Quel est le délai pour voir des résultats avec ${offre.name.toLowerCase()} ?`,
          answer: createFAQAnswer(`Les délais varient selon l&apos;offre : SEA = immédiat, SEO = 4-6 mois, Dev = selon projet. Nous vous donnons un planning précis en phase d&apos;audit.`),
        },
        {
          question: `Puis-je combiner plusieurs offres ?`,
          answer: createFAQAnswer(`Absolument ! Nous recommandons souvent une approche 360° combinant plusieurs leviers (ex: SEO + SEA + Analytics) pour maximiser l&apos;impact.`),
        },
        {
          question: `Y a-t-il un engagement minimum ?`,
          answer: createFAQAnswer(`Pour les prestations récurrentes (SEO, SEA), engagement 6 mois recommandé. Projets ponctuels (audit, dev) sans engagement. Flexibilité selon vos besoins.`),
        },
      ],
    },
  ],
  meta: {
    title: `${offre.name} | Service Expert | Upto1`,
    description: `${offre.baseline}. ${offre.includes.slice(0, 3).join(', ')}. ${offre.pricing}. Devis gratuit.`,
  },
}))

// Export combiné
export const batch8NosOffresAll = [nosOffresHub, ...batch8NosOffres]
