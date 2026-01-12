import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const Tabs: Block = {
  slug: 'tabs',
  interfaceName: 'TabsBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'tabsWidth',
      type: 'select',
      required: true,
      defaultValue: 'col-lg-12',
      options: [
        { label: '6 colonnes (image 6 col)', value: 'col-lg-6' },
        { label: '9 colonnes (image 3 col)', value: 'col-lg-9' },
        { label: '12 colonnes (sans image)', value: 'col-lg-12' },
      ],
      label: 'Tabs Width',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
      admin: {
        condition: (data) => data.tabsWidth !== 'col-lg-12',
      },
    },
    {
      name: 'layout',
      type: 'radio',
      required: true,
      defaultValue: 'tabsImage',
      options: [
        { label: 'Tabs | Image', value: 'tabsImage' },
        { label: 'Image | Tabs', value: 'imageTabs' },
      ],
      label: 'Layout Order',
      admin: {
        condition: (data) => data.tabsWidth !== 'col-lg-12',
      },
    },
    {
      name: 'overlayOpacity',
      type: 'radio',
      label: 'Overlay Opacity',
      required: false,
      defaultValue: 'overlay-opacity-25',
      options: [
        { label: 'None (0)', value: 'overlay-opacity-0' },
        { label: 'Light (0.1)', value: 'overlay-opacity-10' },
        { label: 'Medium (0.25)', value: 'overlay-opacity-25' },
        { label: 'Dark (0.5)', value: 'overlay-opacity-50' },
      ],
      admin: {
        layout: 'horizontal',
        condition: (data) => data.tabsWidth !== 'col-lg-12',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Tabs',
      minRows: 2,
      maxRows: 6,
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Tab Title',
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          label: 'Tab Content',
        },
      ],
    },
  ],
  labels: {
    plural: 'Tabs',
    singular: 'Tabs',
  },
}
