import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const BoxedImage: Block = {
  slug: 'boxedImage',
  interfaceName: 'BoxedImageBlock',  fields: [
    ...blockStylingFields,
    {
      name: 'height',
      type: 'select',
      required: true,
      defaultValue: 'normal',
      options: [
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' },
        { label: 'Super Large', value: 'superlarge' },
      ],
      label: 'Height',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Background Image',
    },
    {
      name: 'overlayOpacity',
      type: 'radio',
      label: 'Overlay Opacity',
      defaultValue: 'overlay-opacity-25',
      options: [
        { label: 'None (0)', value: 'overlay-opacity-0' },
        { label: 'Light (0.1)', value: 'overlay-opacity-10' },
        { label: 'Medium (0.25)', value: 'overlay-opacity-25' },
        { label: 'Dark (0.5)', value: 'overlay-opacity-50' },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'quoteTag',
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
      label: 'Quote Tag (SEO)',
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Quote Text (Optional)',
    },
  ],
  labels: {
    plural: 'Boxed Image',
    singular: 'Boxed Image',
  },
}
