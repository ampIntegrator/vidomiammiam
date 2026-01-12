import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const TitleTextNoBoxing: Block = {
  slug: 'titleTextNoBoxing',
  interfaceName: 'TitleTextNoBoxingBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'headingLevel',
      type: 'select',
      required: true,
      defaultValue: 'h2',
      options: [
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'H5', value: 'h5' },
        { label: 'H6', value: 'h6' },
        { label: 'Span', value: 'span' },
        { label: 'Paragraph', value: 'p' },
      ],
      label: 'Heading Level (SEO)',
    },
    {
      name: 'center',
      type: 'checkbox',
      label: 'Center title and separator',
      defaultValue: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Text Content',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
      required: false,
    },
    {
      name: 'ctaUrl',
      type: 'text',
      label: 'CTA Button URL',
      required: false,
    },
  ],
  labels: {
    plural: 'Title Text No Boxing',
    singular: 'Title Text No Boxing',
  },
}
