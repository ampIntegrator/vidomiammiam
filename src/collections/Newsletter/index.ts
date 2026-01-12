import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Newsletter: CollectionConfig = {
  slug: 'newsletter',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'subscribedAt', 'status'],
  },
  access: {
    create: () => true, // Anyone can subscribe
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Unsubscribed',
          value: 'unsubscribed',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'subscribedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            // Set subscribedAt on first creation
            if (!value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
}
