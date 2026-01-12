import type { RequiredDataFromCollectionSlug } from 'payload'

export const tpePmeUsecase: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Solutions digitales pour TPE & PME',
    _status: 'published',
    slug: 'tpe-pme',
    meta: {
      title: 'Marketing Digital pour TPE & PME : Solutions clés en main - UPTO1',
      description:
        'Solutions digitales adaptées aux TPE et PME. SEO, SEA, création de contenu et stratégie web pour développer votre activité avec un budget maîtrisé.',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'Digital Marketing for SMB',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'marketing digital tpe pme',
      relatedKeywords: [
        { keyword: 'agence digitale pme' },
        { keyword: 'seo tpe' },
        { keyword: 'stratégie web pme' },
        { keyword: 'budget marketing pme' },
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
              text: 'Marketing Digital pour TPE & PME',
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
        heading: 'Marketing Digital pour TPE & PME',
        subheading: 'Des solutions digitales efficaces et accessibles pour développer votre activité. Budget maîtrisé, résultats mesurables.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Audit gratuit',
              appearance: 'default',
              url: '/audit-seo-gratuit',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Prendre rendez-vous',
              appearance: 'outline',
              url: '/contact',
            },
          },
        ],
        badges: [
          {
            value: 'Budget maîtrisé',
            label: 'Solutions adaptées',
            icon: 'icon-wallet',
          },
          {
            value: '3-6 mois',
            label: 'Premiers résultats',
            icon: 'icon-clock',
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
                        text: 'Pourquoi le digital est essentiel pour les TPE & PME ?',
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
                        text: 'Dans un monde où 80% des consommateurs recherchent en ligne avant d\'acheter, être visible sur Internet n\'est plus une option. Pour les TPE et PME, le digital offre des opportunités sans précédent pour concurrencer les grandes entreprises avec des budgets raisonnables.',
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
        title: 'L\'impact du digital sur les PME',
        layout: 'grid-3',
        stats: [
          {
            value: '80%',
            label: 'Recherches en ligne',
            description: 'Des consommateurs cherchent en ligne avant d\'acheter',
            color: 'primary',
            icon: 'icon-magnifier',
          },
          {
            value: '3x',
            label: 'ROI moyen',
            description: 'Retour sur investissement digital vs traditionnel',
            color: 'success',
            icon: 'icon-chart-line',
          },
          {
            value: '24/7',
            label: 'Disponibilité',
            description: 'Votre entreprise visible en continu',
            color: 'warning',
            icon: 'icon-clock',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Nos solutions pour TPE & PME',
        description: 'Des services adaptés à vos besoins et votre budget',
        color: 'primary',
        features: [
          {
            title: 'Pack Visibilité Locale',
            description: 'Optimisation Google My Business, référencement local, avis clients. Idéal pour commerces et services de proximité. À partir de 490€/mois.',
          },
          {
            title: 'Pack Croissance SEO',
            description: 'Audit SEO, optimisation technique, création de contenu mensuel, suivi des positions. Pour développer votre trafic organique. À partir de 890€/mois.',
          },
          {
            title: 'Pack Acquisition 360°',
            description: 'SEO + SEA + Réseaux sociaux. Stratégie complète pour maximiser votre visibilité et générer des leads qualifiés. À partir de 1 490€/mois.',
          },
          {
            title: 'Formation & Autonomie',
            description: 'Formez votre équipe au digital marketing. Ateliers SEO, réseaux sociaux, Google Ads. Devenez autonome. À partir de 1 200€/jour.',
          },
        ],
      },
      {
        blockType: 'iconsBox',
        title: 'Nos avantages pour les TPE & PME',
        description: 'Pourquoi les petites et moyennes entreprises nous font confiance',
        color: 'success',
        items: [
          {
            icon: 'icon-wallet',
            title: 'Budget maîtrisé',
            description: 'Formules adaptées à votre taille et vos moyens. Pas de surprise, engagement flexible.',
          },
          {
            icon: 'icon-users',
            title: 'Interlocuteur dédié',
            description: 'Un chef de projet unique qui connaît votre entreprise et vos enjeux.',
          },
          {
            icon: 'icon-chart-bars',
            title: 'ROI mesurable',
            description: 'Reporting mensuel simple et clair. Vous savez exactement où va votre argent.',
          },
          {
            icon: 'icon-graduation-cap',
            title: 'Transfert de compétences',
            description: 'Nous vous formons au fur et à mesure pour gagner en autonomie.',
          },
        ],
      },
      {
        blockType: 'testimonial',
        title: 'Témoignages de TPE & PME',
        displayStyle: 'grid',
        testimonials: [
          {
            quote: 'En tant que petite entreprise, nous avions peur des coûts. Upto1 a créé une solution sur-mesure adaptée à notre budget. Résultat : +200% de demandes de devis en 8 mois !',
            authorName: 'Jean Dupont',
            authorTitle: 'Gérant',
            company: 'Artisan Plombier',
            rating: 5,
            metrics: {
              before: '5 devis/mois',
              after: '15 devis/mois',
              improvement: '+200%',
            },
          },
          {
            quote: 'Leur approche pédagogique nous a permis de comprendre les enjeux du digital. Nous sommes maintenant autonomes sur les réseaux sociaux et le SEO local.',
            authorName: 'Marie Lambert',
            authorTitle: 'Directrice',
            company: 'Salon de coiffure',
            rating: 5,
          },
          {
            quote: 'Le ROI est clairement au rendez-vous. Pour un investissement de 900€/mois, nous générons maintenant 20K€ de CA additionnel. Le digital a transformé notre PME.',
            authorName: 'Pierre Martin',
            authorTitle: 'CEO',
            company: 'PME industrielle',
            rating: 5,
            metrics: {
              before: '5K€ CA web',
              after: '25K€ CA web',
              improvement: 'x5',
            },
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions fréquentes TPE & PME',
        enableSchemaMarkup: true,
        questions: [
          {
            question: 'Quel budget prévoir pour le marketing digital en TPE/PME ?',
            answer: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Comptez entre 500€ et 2 000€/mois selon vos objectifs. Pour du référencement local simple, 500-800€/mois suffisent. Pour une stratégie complète (SEO + SEA + contenu), prévoyez 1 500-2 000€/mois. Nous adaptons toujours nos solutions à votre budget et vos besoins réels.',
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
          {
            question: 'Combien de temps avant de voir des résultats ?',
            answer: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Pour le SEO local et Google My Business : 2-3 mois. Pour le SEO classique : 4-6 mois. Pour le SEA (Google Ads) : résultats immédiats dès le lancement. Nous combinons souvent SEA (rapide) et SEO (durable) pour optimiser vos résultats à court et long terme.',
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
          {
            question: 'Puis-je gérer moi-même une partie du digital marketing ?',
            answer: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Absolument ! C\'est même recommandé. Nous proposons des formules hybrides où vous gérez les réseaux sociaux et la création de contenu simple, pendant que nous nous occupons du technique (SEO, campagnes publicitaires). Nous offrons également des formations pour vous rendre autonome.',
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
          {
            question: 'Le digital fonctionne-t-il pour toutes les activités ?',
            answer: {
              root: {
                type: 'root',
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Oui ! Que vous soyez artisan, commerçant, prestataire de services B2B ou B2C, il existe une stratégie digitale adaptée. Même pour des métiers très locaux ou de niche, le digital permet d\'être trouvé par vos clients au moment où ils vous cherchent. Nous adaptons la stratégie à votre secteur et votre zone de chalandise.',
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
                    text: 'Développez votre TPE/PME avec le digital',
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
                    text: 'Parlons de votre projet. Audit gratuit et devis personnalisé sous 48h.',
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
              label: 'Audit gratuit',
              appearance: 'default',
              url: '/audit-seo-gratuit',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Prendre rendez-vous',
              appearance: 'outline',
              url: '/contact',
            },
          },
        ],
      },
    ],
  }
}
