import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const TextImageContainer: Block = {
  slug: 'textImageContainer',
  interfaceName: 'TextImageContainerBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'textColumnWidth',
      type: 'select',
      required: true,
      defaultValue: 'col-lg-6',
      options: [
        { label: '4 colonnes (image 8 col)', value: 'col-lg-4' },
        { label: '6 colonnes (image 6 col)', value: 'col-lg-6' },
        { label: '8 colonnes (image 4 col)', value: 'col-lg-8' },
      ],
      label: 'Text Column Width',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
    },
    {
      name: 'layout',
      type: 'radio',
      required: true,
      defaultValue: 'textImage',
      options: [
        { label: 'Texte | Image', value: 'textImage' },
        { label: 'Image | Texte', value: 'imageText' },
      ],
      label: 'Layout Order',
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
    plural: 'Text Image Container',
    singular: 'Text Image Container',
  },
}
