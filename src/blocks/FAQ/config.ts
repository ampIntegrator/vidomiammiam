import type { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  fields: [
    {
      name: 'backgroundColor',
      type: 'radio',
      label: 'Background Color',
      defaultValue: 'bg-green',
      options: [
        {
          label: 'Green',
          value: 'bg-green',
        },
        {
          label: 'Ivory',
          value: 'bg-ivory',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'paddingTop',
      type: 'radio',
      label: 'Padding Top',
      defaultValue: 'pt-4',
      options: [
        {
          label: 'None (pt-0)',
          value: 'pt-0',
        },
        {
          label: 'Small (pt-3)',
          value: 'pt-3',
        },
        {
          label: 'Medium (pt-4)',
          value: 'pt-4',
        },
        {
          label: 'Large (pt-5)',
          value: 'pt-5',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'paddingBottom',
      type: 'radio',
      label: 'Padding Bottom',
      defaultValue: 'pb-4',
      options: [
        {
          label: 'None (pb-0)',
          value: 'pb-0',
        },
        {
          label: 'Small (pb-3)',
          value: 'pb-3',
        },
        {
          label: 'Medium (pb-4)',
          value: 'pb-4',
        },
        {
          label: 'Large (pb-5)',
          value: 'pb-5',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'faqTitle',
      type: 'text',
      required: false,
      label: 'FAQ Title',
      admin: {
        description: 'Optional title for the FAQ section',
      },
    },
    {
      name: 'titleTag',
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
      label: 'Title Tag (SEO)',
      admin: {
        description: 'Select the HTML tag for the FAQ title',
      },
    },
    {
      name: 'faqText',
      type: 'textarea',
      required: false,
      label: 'FAQ Introduction Text',
      admin: {
        description: 'Optional introduction text for the FAQ section',
      },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 2,
      label: 'FAQ Items',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'questionTag',
          type: 'select',
          required: true,
          defaultValue: 'h4',
          options: [
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' },
            { label: 'H6', value: 'h6' },
            { label: 'Span', value: 'span' },
            { label: 'Paragraph', value: 'p' },
          ],
          label: 'Question Tag (SEO)',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Answer',
        },
      ],
    },
  ],
  labels: {
    plural: 'FAQs',
    singular: 'FAQ',
  },
}
