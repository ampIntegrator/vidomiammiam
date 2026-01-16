import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const BlogPostsGrid: Block = {
  slug: 'blogPostsGrid',
  interfaceName: 'BlogPostsGridBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'title',
      type: 'text',
      label: 'Titre du bloc',
      defaultValue: 'En direct de notre blog',
      admin: {
        description: 'Titre affiché au-dessus de la grille de posts',
      },
    },
    {
      name: 'centerTitle',
      type: 'checkbox',
      label: 'Centrer le titre',
      defaultValue: true,
    },
    {
      name: 'layout',
      type: 'radio',
      required: true,
      defaultValue: 'normal',
      label: "Format d'affichage",
      options: [
        { label: 'Normal (2 par ligne)', value: 'normal' },
        { label: 'Compact (3 par ligne)', value: 'oneCol' },
      ],
      admin: {
        description: "Choisissez le format d'affichage des posts",
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Filtrer par catégorie (optionnel)',
      admin: {
        description: 'Laisser vide pour afficher tous les posts',
      },
    },
  ],
  labels: {
    singular: 'Grille de Posts',
    plural: 'Grilles de Posts',
  },
}
