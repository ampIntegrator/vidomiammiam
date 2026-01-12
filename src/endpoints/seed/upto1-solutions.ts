import type { RequiredDataFromCollectionSlug } from 'payload'

export const upto1Solutions: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    title: 'Nos solutions digitales - Upto1',
    _status: 'published',
    slug: 'solutions',
    hero: {
      type: 'lowImpact',
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
                  text: 'Nos solutions digitales clés en main',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
          ],
        },
      },
    },
    layout: [
    {
      blockType: 'iconsBox',
      title: 'Stratégie marketing digital 360°',
      description: 'Pilotez votre croissance avec une vision globale et orientée ROI. Avec notre approche 360°, nous alignons vos objectifs business avec les bons leviers digitaux : SEO, SEA, contenu, data, IA et automatisation.',
      color: 'orange',
      items: [
        {
          icon: 'icon-magnifier',
          title: 'Audit initial',
          description: 'Audit complet de votre marché, de vos concurrents et de vos leviers existants',
        },
        {
          icon: 'icon-crosshairs',
          title: 'Clarté de l\'objectif',
          description: 'Nous vous aidons à définir clairement vos objectifs business et les indicateurs clés de réussite',
        },
        {
          icon: 'icon-target',
          title: 'Une action tout terrain',
          description: 'Nous agissons à 360 degrés. SEO, SEA, réseaux sociaux, contenus, IA, tracking... You name it',
        },
        {
          icon: 'icon-map',
          title: 'Roadmap priorisée',
          description: 'Nous établissons avec vous une roadmap claire, avec des quick wins et une vision à long terme',
        },
      ],
    },
    {
      blockType: 'iconsBox',
      title: 'Gestion SEO - Référencement naturel',
      description: 'Améliorez durablement votre visibilité sur Google. Avec notre gestion SEO, vous bénéficiez d\'une optimisation technique, éditoriale et stratégique continue pour attirer des visiteurs qualifiés.',
      color: 'primary',
      items: [
        {
          icon: 'icon-magnifier',
          title: 'Audit technique',
          description: 'Audit technique et recommandations priorisées – on identifie les freins SEO et on les corrige rapidement.',
        },
        {
          icon: 'icon-keyboard',
          title: 'Optimisation contenu',
          description: 'Optimisation du contenu et des mots-clés – titres, textes, maillage interne, pages stratégiques.',
        },
        {
          icon: 'icon-calendar-days',
          title: 'Suivi mensuel',
          description: 'Suivi mensuel des performances – positions, trafic, conversions, avec un reporting simple.',
        },
        {
          icon: 'icon-link',
          title: 'Netlinking & autorité',
          description: 'Développement de l\'autorité de votre site avec une stratégie de liens qualifiés.',
        },
      ],
    },
  ],
  }
}
