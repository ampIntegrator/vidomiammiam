import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const IconsBox: Block = {
  slug: 'iconsBox',
  interfaceName: 'IconsBoxBlock',
  fields: [
    ...blockStylingFields,
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
      name: 'center',
      type: 'checkbox',
      label: 'Center icon and title',
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
      label: 'Icon Items',
    },
  ],
  labels: {
    plural: 'Icons Boxes',
    singular: 'Icons Box',
  },
}
