import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const PriceList: Block = {
  slug: 'priceList',
  interfaceName: 'PriceListBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'premiumCard',
      type: 'radio',
      label: 'Carte Premium (Mise en avant)',
      defaultValue: 'none',
      options: [
        {
          label: 'Aucune',
          value: 'none',
        },
        {
          label: 'Carte 1',
          value: '1',
        },
        {
          label: 'Carte 2',
          value: '2',
        },
        {
          label: 'Carte 3',
          value: '3',
        },
        {
          label: 'Carte 4',
          value: '4',
        },
      ],
      admin: {
        layout: 'horizontal',
        description: 'Sélectionnez quelle carte doit être mise en avant avec le style premium',
      },
    },
    {
      name: 'premiumRibbonText',
      type: 'text',
      label: 'Texte du Ruban Premium',
      defaultValue: 'Le plus populaire',
      maxLength: 20,
      admin: {
        description: 'Texte affiché sur le ruban diagonal de la carte premium (max 20 caractères, espaces compris)',
        condition: (data, siblingData) => {
          return siblingData.premiumCard && siblingData.premiumCard !== 'none'
        },
      },
      validate: (value: string) => {
        if (value && value.length > 20) {
          return `Le texte ne peut pas dépasser 20 caractères (actuellement: ${value.length})`
        }
        return true
      },
    },
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
