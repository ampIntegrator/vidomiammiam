import type { RequiredDataFromCollectionSlug } from 'payload'

export const growthHacking: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Growth-hacking : expérience client augmentée',
    _status: 'published',
    slug: 'growth-hacking',
    meta: {
      title: 'Growth-hacking : expérience client augmentée - UPTO1',
      description:
        'N\'attendez plus pour développer votre Business, nos experts growth hacking, sauront concevoir pour vous des solutions hors du cadre !',
      schema: {
        type: 'Service',
        customData: {
          serviceType: 'Growth Hacking',
          provider: {
            '@type': 'Organization',
            name: 'Upto1',
            url: 'https://upto1.fr',
          },
          areaServed: 'FR',
        },
      },
      focusKeyword: 'growth hacking',
      relatedKeywords: [
        { keyword: 'croissance digitale' },
        { keyword: 'expérience client' },
        { keyword: 'marketing automation' },
        { keyword: 'taux de conversion' },
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
              text: 'Growth-hacking : expérience client augmentée',
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
        heading: 'Growth-hacking : expérience client augmentée',
        subheading: 'Développez votre business avec des solutions innovantes et hors du cadre. Nos experts growth hacking transforment votre stratégie d\'acquisition.',
        overlay: true,
        height: 'medium',
        alignment: 'center',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Découvrir nos services',
              appearance: 'default',
              url: '#contact',
            },
          },
        ],
        badges: [
          {
            value: '10-30s',
            label: 'Fenêtre critique d\'attention',
            icon: 'icon-clock',
          },
          {
            value: '2 chiffres',
            label: 'Objectif de croissance',
            icon: 'icon-chart-line',
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
                        text: 'Growth-hacking',
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
                        text: 'Le growth-hacking représente une expansion soutenue à travers des pratiques itératives, la distribution des connaissances et des méthodologies digitales. Depuis 2010, cette approche nécessite une double expertise : technique et marketing.',
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
        blockType: 'iconsBox',
        title: 'L\'expérience client avant tout',
        description: 'Dans un monde digital où l\'attention est volatile, nous vous aidons à capter et retenir vos visiteurs dans la fenêtre critique des 10-30 premières secondes. Notre approche mesure et optimise chaque point de contact du parcours client.',
        color: 'success',
        items: [
          {
            icon: 'icon-target',
            title: 'Fenêtre critique',
            description: 'Optimisation des 10-30 premières secondes pour capter l\'attention du visiteur',
          },
          {
            icon: 'icon-chart-line',
            title: 'Mesure avant théorie',
            description: 'Nous mesurons toutes nos initiatives avant implémentation',
          },
          {
            icon: 'icon-users',
            title: 'Parcours client',
            description: 'Analyse et optimisation de chaque étape du parcours utilisateur',
          },
        ],
      },
      {
        blockType: 'numberedFeatures',
        title: 'Nos cas d\'usage',
        description: 'Le growth hacking s\'adresse à différents besoins de croissance :',
        color: 'primary',
        features: [
          {
            title: 'Conseils d\'administration',
            description: 'Recherche d\'expansion à deux chiffres pour accélérer la croissance',
          },
          {
            title: 'Business units en difficulté',
            description: 'Redressement et optimisation de segments d\'activité sous-performants',
          },
          {
            title: 'Nouveaux canaux marketing',
            description: 'Exploration et activation de leviers d\'acquisition innovants',
          },
        ],
      },
      {
        blockType: 'faq',
        title: 'Questions fréquentes',
        enableSchemaMarkup: true,
        questions: [
          {
            question: 'Qu\'est-ce que c\'est cette hype sur le Growth-hacking ?',
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
                        text: 'Le growth hacking casse les silos traditionnels en questionnant les décisions et en challengeant les hiérarchies départementales. C\'est une approche qui privilégie l\'expérimentation mesurée plutôt que les frameworks théoriques.',
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
            question: 'Qu\'est-ce que je dois Hacker au sein de mon entreprise ?',
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
                        text: 'Les solutions incluent la collecte de feedback client, l\'analyse des abandons de parcours, et les enquêtes internes. L\'objectif est d\'identifier les frictions et opportunités d\'amélioration à chaque point de contact.',
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
            question: 'Comment vais-je savoir que l\'expérience est concluante ?',
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
                        text: 'Nous mettons en place des KPIs prédéterminés et mesurons le ROI sur le long terme. Les expérimentations non concluantes sont abandonnées, permettant ainsi une itération rapide vers le succès.',
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
            question: 'Vous faites tout vous même ?',
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
                        text: 'Nous coordonnons des spécialistes externes (UX/UI, réseaux sociaux, développeurs) sous accords de confidentialité pour garantir une expertise pointue sur chaque aspect du projet.',
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
            question: 'Combien de temps et à quel prix ?',
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
                        text: 'Chaque projet étant unique, nous évaluons au cas par cas. Contactez-nous directement pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.',
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
                    text: 'Prêt à accélérer votre croissance ?',
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
                    text: 'Contactez nos experts growth hacking pour concevoir une stratégie sur-mesure et hors du cadre.',
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
              label: 'Prendre rendez-vous',
              appearance: 'default',
              url: '/contact',
            },
          },
        ],
      },
    ],
  }
}
