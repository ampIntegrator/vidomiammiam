import type { RequiredDataFromCollectionSlug } from 'payload'
import { createLowImpactHero, createColoredBannerRichText, createFAQAnswer } from './batch8-helpers'

// Batch 8 - Agences Digitales 360 par Ville
// SEO optimisé pour la recherche locale d'agences digitales

const cities = [
  {
    name: 'Paris',
    slug: 'agence-digital-360-paris',
    region: 'Île-de-France',
    population: '2,2M habitants',
    marketSize: '1er marché digital français',
    specificities: 'Siège social, expertise startup & scale-up',
    landmarks: 'Quartier Opéra, proche Grands Boulevards',
  },
  {
    name: 'Lyon',
    slug: 'agence-digital-360-lyon',
    region: 'Auvergne-Rhône-Alpes',
    population: '515K habitants',
    marketSize: '2e pôle économique',
    specificities: 'Industrie, santé, biotech',
    landmarks: 'Quartier Confluence, Part-Dieu',
  },
  {
    name: 'Lille',
    slug: 'agence-digital-360-lille',
    region: 'Hauts-de-France',
    population: '230K habitants',
    marketSize: 'Hub logistique européen',
    specificities: 'Retail, e-commerce, logistique',
    landmarks: 'Euralille, proche Belgique',
  },
  {
    name: 'Toulouse',
    slug: 'agence-digital-360-toulouse',
    region: 'Occitanie',
    population: '475K habitants',
    marketSize: 'Capital aérospatial',
    specificities: 'Aérospatiale, high-tech, recherche',
    landmarks: 'Quartier Compans-Caffarelli',
  },
  {
    name: 'Nantes',
    slug: 'agence-digital-360-nantes',
    region: 'Pays de la Loire',
    population: '310K habitants',
    marketSize: 'Pôle numérique Ouest',
    specificities: 'Créativité digitale, innovation',
    landmarks: 'Île de Nantes, quartier Création',
  },
  {
    name: 'Bordeaux',
    slug: 'agence-digital-360-bordeaux',
    region: 'Nouvelle-Aquitaine',
    population: '255K habitants',
    marketSize: 'Tourisme & vin-tech',
    specificities: 'Vin, tourisme, services',
    landmarks: 'Quartier Chartrons, Bassins à flot',
  },
  {
    name: 'Strasbourg',
    slug: 'agence-digital-360-strasbourg',
    region: 'Grand Est',
    population: '280K habitants',
    marketSize: 'Hub franco-allemand',
    specificities: 'International, institutions',
    landmarks: 'Quartier européen, centre historique',
  },
  {
    name: 'Marseille',
    slug: 'agence-digital-360-marseille',
    region: 'Provence-Alpes-Côte d&apos;Azur',
    population: '870K habitants',
    marketSize: '2e ville de France',
    specificities: 'Maritime, commerce, Méditerranée',
    landmarks: 'Euroméditerranée, Vieux-Port',
  },
  {
    name: 'Montpellier',
    slug: 'agence-digital-360-montpellier',
    region: 'Occitanie',
    population: '290K habitants',
    marketSize: 'Ville la plus dynamique',
    specificities: 'Santé, recherche, étudiants',
    landmarks: 'Antigone, Port Marianne',
  },
]

export const batch8AgencesLocales: RequiredDataFromCollectionSlug<'pages'>[] = cities.map(
  (city) => ({
    title: `Agence Digitale 360° à ${city.name} | Upto1 - SEO, Growth & Data`,
    slug: city.slug,
    _status: 'published' as const,
    hero: createLowImpactHero(`Agence Digitale 360° à ${city.name}`),
    layout: [
      {
        blockType: 'heroSection',
        heading: `Votre partenaire digital à ${city.name}`,
        subheading: `Agence 360° spécialisée en SEO, Growth Hacking et Analytics pour entreprises en ${city.region}`,
        badges: [
          { value: city.population, label: 'Bassin économique' },
          { value: '15+ ans', label: 'Expertise digitale' },
          { value: city.marketSize, label: 'Positionnement' },
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
        blockType: 'statistics',
        title: `Upto1 à ${city.name} en chiffres`,
        description: `Notre impact dans l&apos;écosystème digital de ${city.name}`,
        stats: [
          { value: '50+', label: `Clients à ${city.name}` },
          { value: '+180%', label: 'Croissance trafic moyen' },
          { value: '24/7', label: 'Support & monitoring' },
          { value: '6 mois', label: 'ROI visible' },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: `Pourquoi choisir Upto1 à ${city.name} ?`,
        description: `Notre approche 360° adaptée au marché ${city.region}`,
        color: 'success' as const,
        features: [
          {
            number: '01',
            title: 'Expertise locale',
            description: `Connaissance approfondie du marché ${city.name} et ${city.region}. ${city.specificities}.`,
          },
          {
            number: '02',
            title: 'Proximité & réactivité',
            description: `Équipe basée ${city.landmarks}. Rendez-vous physiques possibles, suivi personnalisé.`,
          },
          {
            number: '03',
            title: 'Approche data-driven',
            description: `Analytics, tracking RGPD-compliant, dashboards personnalisés. Décisions basées sur les données réelles.`,
          },
          {
            number: '04',
            title: 'ROI mesurable',
            description: `Objectifs SMART, reporting mensuel transparent, optimisation continue des performances.`,
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: `Nos services digitaux à ${city.name}`,
        description: 'Une offre 360° pour booster votre présence digitale',
        color: 'success' as const,
        items: [
          {
            icon: 'icon-chart-bar-trend-up-4',
            title: 'SEO & Référencement',
            description: `Positionnement Google pour capter la demande locale à ${city.name} et rayonner en ${city.region}.`,
          },
          {
            icon: 'icon-rocket-4',
            title: 'Growth Hacking',
            description: 'Acquisition rapide, test & learn, automation marketing pour scaler votre croissance.',
          },
          {
            icon: 'icon-dashboard',
            title: 'Analytics & Data',
            description: 'Tracking, dashboards Looker Studio, analyse comportementale, optimisation conversion.',
          },
          {
            icon: 'icon-magic-wand',
            title: 'IA & Automation',
            description: `ChatGPT entreprise, automatisation, GEO (Generative Engine Optimization) pour rester visible.`,
          },
        ],
      },
      {
        blockType: 'coloredBanner',
        color: 'success' as const,
        richText: createColoredBannerRichText(
          `Secteurs d&apos;expertise à ${city.name}`,
          `${city.specificities}. Nous accompagnons TPE, PME, startups et grands comptes dans leur transformation digitale.`
        ),
        links: [
          {
            link: {
              type: 'custom' as const,
              label: 'Découvrir nos cas clients',
              appearance: 'default' as const,
              url: '/solutions',
            },
          },
        ],
      },
      {
        blockType: 'faq',
        title: `Questions fréquentes - Agence ${city.name}`,
        enableSchemaMarkup: true,
        questions: [
          {
            question: `Pourquoi choisir une agence digitale basée à ${city.name} ?`,
            answer: createFAQAnswer(`Une agence locale connaît le tissu économique ${city.region}, les spécificités du marché ${city.name}, et peut vous rencontrer physiquement. Chez Upto1, nous combinons expertise locale et outils nationaux pour maximiser votre visibilité.`),
          },
          {
            question: `Quels sont vos délais d&apos;intervention à ${city.name} ?`,
            answer: createFAQAnswer(`Audit SEO gratuit sous 48h. Rendez-vous physique possible sous 5 jours ouvrés à ${city.name}. Démarrage des missions sous 2 semaines après signature.`),
          },
          {
            question: `Travaillez-vous avec des TPE/PME de ${city.region} ?`,
            answer: createFAQAnswer(`Oui, 70% de nos clients sont des TPE et PME. Nous proposons des formules adaptées aux budgets et enjeux des entreprises locales, avec un accompagnement sur-mesure.`),
          },
        ],
      },
      {
        blockType: 'testimonial',
        testimonials: [
          {
            quote: `Upto1 a doublé notre trafic organique en 6 mois et structuré notre stratégie digitale. Leur expertise SEO et leur connaissance du marché ${city.region} ont fait la différence.`,
            authorName: 'Directeur Marketing',
            company: `PME ${city.name}`,
            metrics: {
              before: `2K visites/mois`,
              after: `5K visites/mois`,
              improvement: '+150% leads',
            },
          },
        ],
      },
    ],
    meta: {
      title: `Agence Digitale 360° ${city.name} | SEO, Growth & Analytics | Upto1`,
      description: `Agence digitale à ${city.name} spécialisée SEO, Growth Hacking, Analytics. Expertise ${city.region}. Audit gratuit. ${city.population}. Contactez-nous !`,
    },
  }),
)
