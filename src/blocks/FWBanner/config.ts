import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const FWBanner: Block = {
  slug: 'fwBanner',
  interfaceName: 'FWBannerBlock',
  labels: {
    singular: 'Full Width Banner',
    plural: 'Full Width Banners',
  },
  fields: [
    ...blockStylingFields,
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
