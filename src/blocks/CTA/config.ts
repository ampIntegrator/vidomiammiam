import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const CTA: Block = {
  slug: 'cta',
  interfaceName: 'CTABlock',
  labels: {
    singular: 'CTA (Call To Action)',
    plural: 'CTAs (Call To Action)',
  },
  fields: [
    ...blockStylingFields,
    {
      name: 'alignment',
      type: 'select',
      required: true,
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      label: 'Button Alignment',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      minRows: 1,
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Button Text',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Button URL',
        },
      ],
    },
  ],
}
