import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'banner',
      type: 'group',
      label: 'Bannière supérieure',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Activer la bannière',
          defaultValue: false,
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icône',
          admin: {
            description: 'Cliquez pour sélectionner une icône',
            components: {
              Field: '@/components/IconPicker/Component#IconPicker',
            },
            condition: (data, siblingData) => siblingData?.enabled === true,
          },
        },
        {
          name: 'text',
          type: 'text',
          label: 'Texte de la bannière',
          maxLength: 100,
          admin: {
            description: 'Maximum 100 caractères, espaces compris',
            condition: (data, siblingData) => siblingData?.enabled === true,
            components: {
              Field: '@/components/TextWithCounter/Component#TextWithCounter100',
            },
          },
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Texte du bouton',
          admin: {
            condition: (data, siblingData) => siblingData?.enabled === true,
          },
        },
        {
          name: 'buttonUrl',
          type: 'text',
          label: 'URL du bouton',
          admin: {
            condition: (data, siblingData) => siblingData?.enabled === true,
          },
        },
        {
          name: 'autoCloseAfter',
          type: 'number',
          label: 'Fermeture automatique après (secondes)',
          defaultValue: 0,
          admin: {
            description: 'Laisser à 0 pour désactiver la fermeture automatique',
            condition: (data, siblingData) => siblingData?.enabled === true,
          },
        },
        {
          name: 'startDate',
          type: 'date',
          label: 'Date de début d\'affichage',
          admin: {
            description: 'Laisser vide pour afficher immédiatement',
            condition: (data, siblingData) => siblingData?.enabled === true,
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'endDate',
          type: 'date',
          label: 'Date de fin d\'affichage',
          admin: {
            description: 'Laisser vide pour afficher indéfiniment',
            condition: (data, siblingData) => siblingData?.enabled === true,
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'hasMegaMenu',
          type: 'checkbox',
          label: 'Has Mega Menu',
          defaultValue: false,
        },
        {
          name: 'megaMenuSlots',
          type: 'array',
          label: 'Mega Menu Slots (2 slots)',
          maxRows: 2,
          admin: {
            condition: (data, siblingData) => siblingData?.hasMegaMenu === true,
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Slot Title',
              required: true,
            },
            {
              name: 'links',
              type: 'array',
              label: 'Links',
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                  label: 'Icon',
                  admin: {
                    description: 'Click to select an icon from the visual picker',
                    components: {
                      Field: '@/components/IconPicker/Component#IconPicker',
                    },
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Link Title',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                  label: 'Description (max 90 characters)',
                  required: true,
                  maxLength: 90,
                  admin: {
                    description: 'Short description (max 90 characters including spaces)',
                    components: {
                      Field: '@/components/TextWithCounter/Component#TextWithCounter90',
                    },
                  },
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'featuredPost',
          type: 'relationship',
          relationTo: 'posts',
          label: 'Featured Post (Slot 04)',
          admin: {
            description: 'Select a post to feature in the 4th slot of the mega menu',
            condition: (data, siblingData) => siblingData?.hasMegaMenu === true,
          },
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'ctaButton1',
      type: 'group',
      label: 'CTA Button 1 (Primary - Purple)',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
        },
      ],
    },
    {
      name: 'ctaButton2',
      type: 'group',
      label: 'CTA Button 2 (Secondary - Orange)',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
        },
      ],
    },
    {
      name: 'ctaButton3',
      type: 'group',
      label: 'CTA Button 3 (Primary - Purple)',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
