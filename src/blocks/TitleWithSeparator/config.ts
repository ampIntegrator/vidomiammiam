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
      name: 'blockAlignment',
      type: 'select',
      label: 'Block Alignment (for single block only)',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      admin: {
        description: 'Choose alignment when there is only one content block',
      },
    },
    {
      name: 'singleBlockWidth',
      type: 'select',
      label: 'Single Block Width',
      defaultValue: 'col-lg-8',
      options: [
        { label: '50% (col-lg-6)', value: 'col-lg-6' },
        { label: '66% (col-lg-8)', value: 'col-lg-8' },
      ],
      admin: {
        description: 'Choose width when there is only one content block',
      },
    },
    {
      name: 'complementaryImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Complementary Image',
      admin: {
        description:
          'Optional image to fill the remaining space when single block width is set. Will be displayed as background.',
      },
    },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Image Position',
      defaultValue: 'right',
      options: [
        { label: 'Left of content', value: 'left' },
        { label: 'Right of content', value: 'right' },
      ],
      admin: {
        description: 'Choose whether the complementary image appears on the left or right',
      },
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
