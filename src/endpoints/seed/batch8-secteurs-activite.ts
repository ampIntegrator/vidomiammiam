import { createLowImpactHero, createColoredBannerRichText, createFAQAnswer } from './batch8-helpers'
import type { RequiredDataFromCollectionSlug } from 'payload'

// Batch 8 - Secteurs d'activité ("Vous êtes")
// Hub + 9 pages sectorielles SEO-optimisées

// Page hub "Vous êtes"
export const vousEtesHub: RequiredDataFromCollectionSlug<'pages'> = {
  title: 'Votre Secteur d&apos;Activité | Solutions Digitales Sur-Mesure | Upto1',
  slug: 'vous-etes',
  _status: 'published' as const,
  hero: createLowImpactHero('Des solutions digitales adaptées à votre secteur'),
  layout: [
    {
      blockType: 'heroSection',
      heading: 'Expertise sectorielle, résultats concrets',
      subheading:
        'Chaque secteur a ses spécificités. Découvrez comment nous accompagnons votre industrie vers la croissance digitale.',
      badges: [
        { value: '10+', label: 'Secteurs d&apos;expertise' },
        { value: '200+', label: 'Clients accompagnés' },
        { value: '15 ans', label: 'Expérience terrain' },
      ],
    },
    {
      blockType: 'iconsBox',
      title: 'Nos secteurs d&apos;expertise',
      description: 'Solutions digitales sur-mesure par industrie',
      color: 'primary' as const,
      items: [
        {
          icon: 'icon-building',
          title: 'Immobilier',
          description:
            'Promoteurs, agences, syndics. Génération leads qualifiés, visibilité locale, portails annonces.',
        },
        {
          icon: 'icon-graduation',
          title: 'Formation & Éducation',
          description:
            'Écoles, centres de formation, e-learning. SEO programmes, inscriptions online, notoriété.',
        },
        {
          icon: 'icon-heart',
          title: 'Santé & Bien-être',
          description:
            'Cliniques, centres médicaux, wellness. RGPD santé, prise RDV, visibilité patients.',
        },
        {
          icon: 'icon-cog',
          title: 'Industrie & Technique',
          description:
            'Fabricants, sous-traitants B2B. Lead nurturing, catalogues digitaux, export.',
        },
        {
          icon: 'icon-plane',
          title: 'Tourisme & Loisirs',
          description:
            'Hôtels, tours opérateurs, loisirs. Réservations directes, avis clients, saisonnalité.',
        },
        {
          icon: 'icon-users',
          title: 'Interprofessions & Fédérations',
          description:
            'Syndicats, fédérations pro. Communication membres, advocacy, content marketing.',
        },
        {
          icon: 'icon-truck',
          title: 'Logistique & Emballage',
          description:
            'Transporteurs, packaging. Devis online, tracking, optimisation supply chain digitale.',
        },
        {
          icon: 'icon-rocket-4',
          title: 'Startups & Projets Innovants',
          description:
            'Scale-up, deep tech. Growth hacking, product-market fit, fundraising visibility.',
        },
        {
          icon: 'icon-laptop',
          title: 'Agences Web & Digital',
          description:
            'Marque blanche, sous-traitance SEO, dashboards clients, formations équipes.',
        },
      ],
    },
    {
      blockType: 'statistics',
      title: 'Impact sectoriel',
      description: 'Résultats moyens par industrie',
      stats: [
        { value: '+200%', label: 'Leads B2B (industrie)' },
        { value: '+150%', label: 'Inscriptions (formation)' },
        { value: '+180%', label: 'Réservations (tourisme)' },
        { value: '-40%', label: 'Coût acquisition' },
      ],
    },
  ],
  meta: {
    title: 'Votre Secteur d&apos;Activité | Solutions Digitales Upto1',
    description:
      'Expertise digitale sectorielle : immobilier, formation, santé, industrie, tourisme, startup. SEO, growth, analytics adaptés. Découvrez votre industrie.',
  },
}

// Pages sectorielles
const secteurs = [
  {
    name: 'Acteur Immobilier',
    slug: 'acteur-immobilier',
    icon: 'icon-building',
    challenges: [
      'Génération leads qualifiés (acheteurs, locataires)',
      'Visibilité locale face aux portails (SeLoger, LeBonCoin)',
      'Valorisation biens immobiliers online',
    ],
    solutions: [
      'SEO local multi-agences',
      'Landing pages par programme/quartier',
      'Automatisation nurturing leads',
      'Intégration CRM immobilier',
    ],
    caseStudy: {
      context: 'Promoteur immobilier régional, 15 programmes/an',
      results: '+300% leads qualifiés en 8 mois, -50% coût par lead',
    },
  },
  {
    name: 'Centre de Formation & École',
    slug: 'centre-formation-ecole',
    icon: 'icon-graduation',
    challenges: [
      'Visibilité formations éligibles CPF',
      'Inscriptions et remplissage sessions',
      'Concurrence écoles et e-learning',
    ],
    solutions: [
      'SEO longue traîne (formations + ville)',
      'Tunnel inscription optimisé',
      'Retargeting campagnes mixtes',
      'Dashboards suivi inscriptions',
    ],
    caseStudy: {
      context: 'Centre de formation pro avec 50 programmes',
      results: '+180% inscriptions web, ROI x4 sur Google Ads',
    },
  },
  {
    name: 'Santé & Bien-être',
    slug: 'sante-bien-etre',
    icon: 'icon-heart',
    challenges: [
      'RGPD strict données santé',
      'Prise de rendez-vous simplifiée',
      'Visibilité face aux plateformes (Doctolib)',
    ],
    solutions: [
      'SEO RGPD-compliant',
      'Intégration agendas en ligne',
      'Avis patients Google',
      'Content santé à forte valeur',
    ],
    caseStudy: {
      context: 'Réseau 5 cliniques dentaires',
      results: '+250% RDV online, -30% no-show via rappels auto',
    },
  },
  {
    name: 'Industrie & Technique',
    slug: 'industrie-technique',
    icon: 'icon-cog',
    challenges: [
      'Lead nurturing longs cycles B2B',
      'Catalogues produits complexes',
      'Export et multi-langue',
    ],
    solutions: [
      'SEO B2B longue traîne technique',
      'Catalogues interactifs + devis',
      'Marketing automation B2B',
      'Multi-langue (EN, DE, ES)',
    ],
    caseStudy: {
      context: 'Fabricant emballages industriels',
      results: '+200% leads B2B qualifiés, 40% closing rate',
    },
  },
  {
    name: 'Tourisme & Loisirs',
    slug: 'tourisme-loisirs',
    icon: 'icon-plane',
    challenges: [
      'Forte saisonnalité',
      'Réservations directes vs OTA',
      'Gestion avis clients',
    ],
    solutions: [
      'SEO haute/basse saison',
      'Booking engine optimisé',
      'Google Hotel Ads',
      'Stratégie avis Google/TripAdvisor',
    ],
    caseStudy: {
      context: 'Hôtel 4* bord de mer',
      results: '+150% réservations directes, -25% commissions OTA',
    },
  },
  {
    name: 'Interprofession & Fédération',
    slug: 'interprofession-federation',
    icon: 'icon-users',
    challenges: [
      'Engagement membres',
      'Influence et advocacy',
      'Communication institutionnelle',
    ],
    solutions: [
      'Content marketing B2B',
      'Plateformes membres (extranet)',
      'SEO institutionnel',
      'Newsletters et automation',
    ],
    caseStudy: {
      context: 'Fédération professionnelle 2000 membres',
      results: '+300% engagement newsletters, portail membres adopté à 80%',
    },
  },
  {
    name: 'Logistique & Emballage',
    slug: 'logistique-emballage',
    icon: 'icon-truck',
    challenges: [
      'Devis complexes',
      'Tracking et transparence',
      'Marché très concurrentiel',
    ],
    solutions: [
      'Calculateurs devis online',
      'SEO B2B logistique',
      'Dashboards tracking',
      'Automatisation devis',
    ],
    caseStudy: {
      context: 'Transporteur national 200 véhicules',
      results: '+180% demandes devis web, -50% temps traitement',
    },
  },
  {
    name: 'Startup & Projet Innovant',
    slug: 'startup-projet-innovant',
    icon: 'icon-rocket-4',
    challenges: [
      'Product-market fit',
      'Budget limité',
      'Croissance rapide',
    ],
    solutions: [
      'Growth hacking',
      'SEO early-stage',
      'Test & learn rapide',
      'Acquisition low-cost',
    ],
    caseStudy: {
      context: 'SaaS B2B pre-seed',
      results: 'x10 trafic en 6 mois, 200 signups MRR €15K',
    },
  },
  {
    name: 'Agence Web & Digital',
    slug: 'agence-web-digital',
    icon: 'icon-laptop',
    challenges: [
      'Sous-traitance de qualité',
      'Formations équipes',
      'Dashboards clients',
    ],
    solutions: [
      'Marque blanche SEO/SEA',
      'Formations pros certifiées',
      'Dashboards Looker Studio',
      'Expert détaché',
    ],
    caseStudy: {
      context: 'Agence com 15 personnes',
      results: '30 clients SEO sous-traités, +€80K CA annuel',
    },
  },
]

export const batch8SecteursActivite: RequiredDataFromCollectionSlug<'pages'>[] = secteurs.map(
  (secteur) => ({
    title: `${secteur.name} | Solutions Digitales & SEO Sectorielles | Upto1`,
    slug: `vous-etes/${secteur.slug}`,
    _status: 'published' as const,
    hero: createLowImpactHero(`${secteur.name} : Expertise Digitale Sectorielle`),
    layout: [
      {
        blockType: 'heroSection',
        heading: `Solutions digitales pour ${secteur.name.toLowerCase()}`,
        subheading: `Expertise SEO, Growth & Analytics adaptée aux enjeux de votre secteur`,
        badges: [
          { value: '50+', label: 'Clients secteur' },
          { value: '15 ans', label: 'Expérience métier' },
          { value: 'ROI x3', label: 'Moyenne constatée' },
        ],
        links: [

          {

            link: {

              type: 'custom' as const,

              label: 'Audit gratuit sectoriel',

              appearance: 'default' as const,

              url: '/audit-seo-gratuit',

            },

          },

        ],
      },
      {
        blockType: 'numberedFeatures',
        title: `Vos défis ${secteur.name.toLowerCase()}`,
        description: 'Challenges digitaux spécifiques à votre industrie',
        color: 'danger' as const,
        features: secteur.challenges.map((challenge, idx) => ({
          number: `0${idx + 1}`,
          title: challenge,
          description: `Notre expertise sectorielle nous permet d&apos;adresser ce défi avec des solutions éprouvées.`,
        })),
      },
      {
        blockType: 'iconsBox',
        title: 'Nos solutions adaptées',
        description: `Approche 360° pour ${secteur.name.toLowerCase()}`,
        color: 'success' as const,
        items: secteur.solutions.map((solution) => ({
          icon: secteur.icon,
          title: solution,
          description: `Solution éprouvée chez nos clients ${secteur.name.toLowerCase()}.`,
        })),
      },
      {
        blockType: 'coloredBanner',
        color: 'success' as const,
        richText: createColoredBannerRichText(
          'Cas client : résultats concrets',
          `${secteur.caseStudy.context}. ${secteur.caseStudy.results}`
        ),
        links: [
          {
            link: {
              type: 'custom' as const,
              label: 'Voir tous nos cas clients',
              appearance: 'default' as const,
              url: '/solutions',
            },
          },
        ],
      },
      {
        blockType: 'faq',
        title: `FAQ ${secteur.name}`,
        enableSchemaMarkup: true,
        questions: [
          {
            question: `Combien de temps pour voir des résultats en SEO ${secteur.name.toLowerCase()} ?`,
            answer: createFAQAnswer(`En moyenne 4-6 mois pour un impact significatif. Le SEO est un investissement moyen/long terme mais avec des résultats durables et un ROI supérieur aux leviers paid.`),
          },
          {
            question: `Travaillez-vous qu&apos;avec de grandes entreprises ?`,
            answer: createFAQAnswer(`Non, 70% de nos clients ${secteur.name.toLowerCase()} sont des TPE et PME. Nous avons des formules adaptées à tous les budgets avec un accompagnement personnalisé.`),
          },
          {
            question: `Proposez-vous des formations pour nos équipes ?`,
            answer: createFAQAnswer(`Oui, nous proposons des formations sur-mesure pour monter en compétences vos équipes marketing et commerciales sur les enjeux digitaux de votre secteur.`),
          },
        ],
      },
    ],
    meta: {
      title: `${secteur.name} | Solutions Digitales & SEO | Upto1`,
      description: `Expertise digitale ${secteur.name.toLowerCase()} : SEO, growth, analytics. ${secteur.challenges[0]}. Audit gratuit. Cas clients prouvés.`,
    },
  }),
)

// Export combiné
export const batch8SecteursAll = [vousEtesHub, ...batch8SecteursActivite]
