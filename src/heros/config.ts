import type { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'simpleHeading',
      type: 'textarea',
      label: 'Custom Heading',
      admin: {
        description: 'Optional: replaces page title. You can use <br> for line breaks.',
      },
    },
  ],
  label: false,
}
