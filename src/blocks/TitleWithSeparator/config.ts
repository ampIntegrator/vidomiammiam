import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const TitleWithSeparator: Block = {
  slug: 'titleWithSeparator',
  interfaceName: 'TitleWithSeparatorBlock',
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
      label: 'Center title and separator',
      defaultValue: false,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 2,
      fields: [
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
      ],
      label: 'Content Blocks',
    },
  ],
  labels: {
    plural: 'Title With Separator',
    singular: 'Title With Separator',
  },
}
