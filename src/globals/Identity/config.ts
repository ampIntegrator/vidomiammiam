import type { GlobalConfig } from 'payload'

export const Identity: GlobalConfig = {
  slug: 'identity',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Branding',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
              required: true,
              admin: {
                description: 'Logo principal du site (utilisé dans le header et footer)',
              },
            },
            {
              name: 'siteName',
              type: 'text',
              label: 'Nom du site',
              required: true,
              defaultValue: 'Upto1',
              admin: {
                description: 'Nom de votre entreprise/site',
              },
            },
            {
              name: 'slogan',
              type: 'text',
              label: 'Slogan',
              required: true,
              defaultValue: 'Expert en croissance digitale',
              admin: {
                description: 'Slogan ou description courte de votre activité',
              },
            },
          ],
        },
        {
          label: 'Coordonnées',
          fields: [
            {
              name: 'address',
              type: 'group',
              label: 'Adresse',
              fields: [
                {
                  name: 'street',
                  type: 'text',
                  label: 'Rue',
                  admin: {
                    description: 'Numéro et nom de rue',
                  },
                },
                {
                  name: 'additionalInfo',
                  type: 'text',
                  label: 'Complément d\'adresse',
                  admin: {
                    description: 'Bâtiment, étage, etc.',
                  },
                },
                {
                  name: 'postalCode',
                  type: 'text',
                  label: 'Code postal',
                },
                {
                  name: 'city',
                  type: 'text',
                  label: 'Ville',
                  required: true,
                  defaultValue: 'Paris',
                },
                {
                  name: 'region',
                  type: 'text',
                  label: 'Région/État',
                },
                {
                  name: 'country',
                  type: 'text',
                  label: 'Pays',
                  required: true,
                  defaultValue: 'France',
                },
              ],
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Téléphone',
              admin: {
                description: 'Format: +33 1 23 45 67 89',
              },
            },
            {
              name: 'email',
              type: 'email',
              label: 'Email de contact',
            },
          ],
        },
      ],
    },
  ],
}
