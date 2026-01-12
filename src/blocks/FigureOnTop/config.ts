import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const FigureOnTop: Block = {
  slug: 'figureOnTop',
  interfaceName: 'FigureOnTopBlock',
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
      name: 'center',
      type: 'checkbox',
      label: 'Center figure and title',
      defaultValue: false,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          name: 'figure',
          type: 'text',
          required: true,
          label: 'Figure Text',
          admin: {
            description: 'Free text to display in the figure element',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Item Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Item Description',
        },
      ],
      label: 'Figure Items',
    },
  ],
  labels: {
    plural: 'Figures On Top',
    singular: 'Figure On Top',
  },
}
