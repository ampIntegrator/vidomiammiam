import type { Block } from 'payload'

export const RelatedPosts: Block = {
  slug: 'relatedPosts',
  interfaceName: 'RelatedPostsBlock',
  fields: [
    {
      name: 'introContent',
      type: 'richText',
      label: 'Intro Content',
    },
    {
      name: 'docs',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      label: 'Related Posts',
      admin: {
        description: 'Select posts to display, or leave empty to show latest posts automatically',
      },
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Maximum number of posts to show',
      defaultValue: 3,
      min: 1,
      max: 12,
    },
  ],
  labels: {
    plural: 'Related Posts Blocks',
    singular: 'Related Posts Block',
  },
}
