import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const TicketBox: Block = {
  slug: 'ticketBox',
  interfaceName: 'TicketBoxBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'alignment',
      type: 'select',
      required: false,
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      label: 'Alignment (only for single ticket)',
      admin: {
        description: 'Choose alignment when displaying only one ticket',
      },
    },
    {
      name: 'tickets',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 2,
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
          name: 'text',
          type: 'textarea',
          required: true,
          label: 'Text',
          admin: {
            description: 'Main text displayed in the ticket',
          },
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          label: 'Link URL',
          admin: {
            description: 'URL for the ticket link (e.g., /contact or https://example.com)',
          },
        },
        {
          name: 'linkText',
          type: 'text',
          required: true,
          label: 'Link Button Text',
          defaultValue: 'En savoir plus',
          admin: {
            description: 'Text displayed on the button',
          },
        },
      ],
      label: 'Tickets',
      admin: {
        description: 'Add 1 or 2 tickets (call-to-action cards)',
      },
    },
  ],
  labels: {
    plural: 'Ticket Boxes',
    singular: 'Ticket Box',
  },
}
