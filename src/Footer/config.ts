import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Colonnes de liens',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titre de la colonne',
          required: true,
          admin: {
            placeholder: 'Ex: Expertises, Solutions, Ressources...',
          },
        },
        {
          name: 'links',
          type: 'array',
          label: 'Liens',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 10,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/Footer/RowLabel#RowLabel',
            },
          },
        },
      ],
      maxRows: 4,
      admin: {
        description: 'Maximum 4 colonnes de liens pour le footer',
      },
    },
    {
      name: 'legalLinks',
      type: 'array',
      label: 'Liens légaux (bas de page)',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Texte du lien',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            placeholder: 'Ex: /mentions-legales ou #',
          },
        },
      ],
      maxRows: 5,
      admin: {
        description: 'Liens légaux affichés en bas du footer (RGPD, CGU, Mentions légales...)',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
