import type { Block } from 'payload'

export const FWImage: Block = {
  slug: 'fwImage',
  interfaceName: 'FWImageBlock',
  labels: {
    singular: 'Full Width Image',
    plural: 'Full Width Images',
  },
  fields: [
    {
      name: 'height',
      type: 'select',
      label: 'Section Height',
      required: true,
      defaultValue: 'normal',
      options: [
        { label: 'Small (5rem)', value: 'small' },
        { label: 'Normal (7.5rem)', value: 'normal' },
        { label: 'Large (10rem)', value: 'large' },
        { label: 'Extra Large (12.5rem)', value: 'extralarge' },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'quoteTag',
      type: 'select',
      label: 'Quote Heading Tag (SEO)',
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
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Quote Text',
      required: true,
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
      name: 'enableParallax',
      type: 'checkbox',
      label:
        'Autoriser effet parallaxe - idealement avec une photo en format portrait, pas paysage',
      defaultValue: true,
    },
  ],
}
