import type { Field } from 'payload'
import { link } from '@/fields/link'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      label: 'Hero Type',
      required: true,
      defaultValue: 'simple',
      options: [
        { label: 'Simple Hero', value: 'simple' },
        { label: 'Full Screen Hero', value: 'fullScreen' },
      ],
    },
    {
      name: 'simpleHeading',
      type: 'textarea',
      label: 'Custom Heading',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'simple',
        description: 'Optional: replaces page title. You can use <br> for line breaks.',
      },
    },
    {
      name: 'backgroundMedia',
      type: 'upload',
      label: 'Background Media (Image or Video)',
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'fullScreen',
        description: 'Upload an image or video for the background',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title (H1)',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'fullScreen',
        description: 'Main title displayed as H1',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'fullScreen',
        description: 'Paragraph text below the title',
      },
    },
    {
      name: 'primaryButton',
      type: 'group',
      label: 'Primary Button (Optional)',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'fullScreen',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show Primary Button',
          defaultValue: false,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData?.enabled === true,
          },
        },
        link({
          overrides: {
            admin: {
              condition: (_, siblingData) => siblingData?.enabled === true,
            },
          },
        }),
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      label: 'Secondary Button (Optional)',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'fullScreen',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show Secondary Button',
          defaultValue: false,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData?.enabled === true,
          },
        },
        link({
          overrides: {
            admin: {
              condition: (_, siblingData) => siblingData?.enabled === true,
            },
          },
        }),
      ],
    },
  ],
  label: false,
}
