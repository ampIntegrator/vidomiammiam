import type { Block } from 'payload'

export const FWBanner: Block = {
  slug: 'fwBanner',
  interfaceName: 'FWBannerBlock',
  labels: {
    singular: 'Full Width Banner',
    plural: 'Full Width Banners',
  },
  fields: [
    {
      name: 'height',
      type: 'select',
      label: 'Banner Height',
      required: true,
      defaultValue: 'normal',
      options: [
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' },
        { label: 'Super Large', value: 'superlarge' },
      ],
    },
    {
      name: 'titleTag',
      type: 'select',
      label: 'Title Tag (SEO)',
      required: true,
      defaultValue: 'h2',
      options: [
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'H5', value: 'h5' },
        { label: 'H6', value: 'h6' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
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
}
