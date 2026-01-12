import type { Field } from 'payload'

export const blockStylingFields: Field[] = [
  {
    name: 'backgroundColor',
    type: 'radio',
    label: 'Background Color',
    defaultValue: 'bg-primary',
    options: [
      {
        label: 'Vert primaire',
        value: 'bg-primary',
      },
      {
        label: 'Vert clair',
        value: 'bg-green',
      },
      {
        label: 'Ivoire',
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
        label: 'None',
        value: 'pt-0',
      },
      {
        label: 'Small',
        value: 'pt-3',
      },
      {
        label: 'Medium',
        value: 'pt-4',
      },
      {
        label: 'Large',
        value: 'pt-5',
      },
      {
        label: 'X-large',
        value: 'pt-6',
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
        label: 'None',
        value: 'pb-0',
      },
      {
        label: 'Small',
        value: 'pb-3',
      },
      {
        label: 'Medium',
        value: 'pb-4',
      },
      {
        label: 'Large',
        value: 'pb-5',
      },
      {
        label: 'X-large',
        value: 'pb-6',
      },
    ],
    admin: {
      layout: 'horizontal',
    },
  },
]
