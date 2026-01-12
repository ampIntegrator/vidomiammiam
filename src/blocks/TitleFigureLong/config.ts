import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const TitleFigureLong: Block = {
  slug: 'titleFigureLong',
  interfaceName: 'TitleFigureLongBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'noBoxing',
      type: 'radio',
      label: 'Box Style',
      defaultValue: 'withBoxing',
      options: [
        {
          label: 'With Boxing',
          value: 'withBoxing',
        },
        {
          label: 'No Boxing',
          value: 'noBoxing',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'headingLevel',
      type: 'select',
      required: true,
      defaultValue: 'h3',
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
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'figure',
          type: 'text',
          required: true,
          label: 'Figure Number',
          admin: {
            description: 'The number displayed in the span (e.g., "01", "02", "03")',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
      ],
      label: 'Title Items',
    },
  ],
  labels: {
    plural: 'Title & Figure Long',
    singular: 'Title & Figure Long',
  },
}
