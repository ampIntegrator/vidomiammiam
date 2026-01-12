import type { Block } from 'payload'
import {
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ColoredQuote: Block = {
  slug: 'coloredQuote',
  interfaceName: 'ColoredQuoteBlock',
  fields: [
    {
      name: 'quote',
      type: 'richText',
      required: true,
      label: 'Citation',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, InlineToolbarFeature()]
        },
      }),
    },
  ],
  labels: {
    singular: 'Citation',
    plural: 'Citations',
  },
}
