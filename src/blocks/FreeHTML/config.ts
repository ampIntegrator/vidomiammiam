import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const FreeHTML: Block = {
  slug: 'freeHTML',
  interfaceName: 'FreeHTMLBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'fullWidth',
      type: 'checkbox',
      label: 'Container Pleine Largeur',
      defaultValue: false,
      admin: {
        description: 'Cochez pour neutraliser la largeur maximale du container (100% au lieu de 1320px)',
      },
    },
    {
      name: 'htmlContent',
      type: 'code',
      label: 'HTML Personnalisé',
      required: true,
      admin: {
        language: 'html',
        description: 'Entrez votre HTML personnalisé. Disponible dans <div class="freeContainer">',
      },
    },
  ],
  labels: {
    plural: 'Blocs HTML Libre',
    singular: 'Bloc HTML Libre',
  },
}
