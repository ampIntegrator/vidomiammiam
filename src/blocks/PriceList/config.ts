import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const PriceList: Block = {
  slug: 'priceList',
  interfaceName: 'PriceListBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'items',
      type: 'array',
      label: 'Price Cards',
      minRows: 1,
      maxRows: 4,
      required: true,
      fields: [
        {
          name: 'thumbnailImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Thumbnail Image',
        },
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Category',
        },
        {
          name: 'titleTag',
          type: 'select',
          required: true,
          defaultValue: 'h2',
          options: [
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' },
            { label: 'H6', value: 'h6' },
          ],
          label: 'Title Tag',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'price',
          type: 'text',
          required: true,
          label: 'Price',
        },
        {
          name: 'priceUnit',
          type: 'text',
          required: false,
          label: 'Price Unit (e.g. €/mois, /month)',
          admin: {
            description: 'Optional unit or period to display after the price (will appear in superscript)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          minRows: 1,
          required: true,
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
              label: 'Feature',
            },
          ],
        },
        {
          name: 'ctaText',
          type: 'text',
          required: true,
          label: 'CTA Button Text',
        },
        {
          name: 'ctaUrl',
          type: 'text',
          required: true,
          label: 'CTA Button URL',
        },
      ],
    },
  ],
  labels: {
    plural: 'Price Lists',
    singular: 'Price List',
  },
}
