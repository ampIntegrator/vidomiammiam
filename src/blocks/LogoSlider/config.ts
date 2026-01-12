import type { Block } from 'payload'

export const LogoSlider: Block = {
  slug: 'logoSlider',
  interfaceName: 'LogoSliderBlock',
  fields: [
    {
      name: 'imageMaxHeight',
      type: 'number',
      required: true,
      defaultValue: 44,
      min: 30,
      max: 80,
      label: 'Hauteur max des images (px)',
      admin: {
        description: 'Hauteur maximale des logos entre 30px et 80px',
      },
    },
    {
      name: 'scrollSpeed',
      type: 'select',
      required: true,
      defaultValue: 'normal',
      options: [
        { label: 'Rapide', value: 'fast' },
        { label: 'Normal', value: 'normal' },
        { label: 'Lent', value: 'slow' },
      ],
      label: 'Vitesse de défilement',
    },
    {
      name: 'logos',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 12,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo Image',
          admin: {
            description: 'Upload a logo image (PNG, SVG, or JPG)',
          },
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Alt Text',
          admin: {
            description: 'Alternative text for the logo (for accessibility)',
          },
        },
      ],
      label: 'Logos',
      admin: {
        description:
          'Add logos to display in the slider. Logos will automatically scroll and duplicate for infinite loop effect.',
      },
    },
  ],
  labels: {
    plural: 'Logo Sliders',
    singular: 'Logo Slider',
  },
}
