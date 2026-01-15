import type { Block } from 'payload'
import { blockStylingFields } from '@/fields/blockStyling'

export const Stepper: Block = {
  slug: 'stepper',
  interfaceName: 'StepperBlock',
  fields: [
    ...blockStylingFields,
    {
      name: 'centered',
      type: 'checkbox',
      label: 'Center stepper content',
      defaultValue: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image sticky',
    },
    {
      name: 'stepperWidth',
      type: 'radio',
      required: true,
      defaultValue: '8',
      options: [
        { label: 'Large (col-lg-8)', value: '8' },
        { label: 'Moyen (col-lg-6)', value: '6' },
      ],
      label: 'Largeur du stepper',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'stepperPosition',
      type: 'radio',
      required: true,
      defaultValue: 'left',
      options: [
        { label: 'Gauche', value: 'left' },
        { label: 'Droite', value: 'right' },
      ],
      label: 'Position du stepper',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'layoutElements',
      type: 'json',
      required: true,
      defaultValue: [
        { element: 'title' },
        { element: 'description' },
        { element: 'list' },
      ],
      admin: {
        components: {
          Field: '@/components/LayoutOrderPicker/Component#LayoutOrderPicker',
        },
      },
    },
    {
      name: 'finalScreen',
      type: 'group',
      label: 'Configuration de l\'écran final',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
          defaultValue: 'icon-thumbs-up',
          admin: {
            description: 'Click to select an icon from the visual picker',
            components: {
              Field: '@/components/IconPicker/Component#IconPicker',
            },
          },
        },
        {
          name: 'message',
          type: 'textarea',
          label: 'Message de succès',
          defaultValue: 'Merci ! Votre formulaire a été soumis avec succès.',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Texte du bouton (optionnel)',
          admin: {
            description: 'Laissez vide pour ne pas afficher de bouton',
          },
        },
        {
          name: 'buttonUrl',
          type: 'text',
          label: 'URL du bouton (optionnel)',
          admin: {
            description: 'Le bouton ne s\'affichera que si le texte ET l\'URL sont renseignés',
          },
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 2,
      maxRows: 8,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Step Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Step Description (optional)',
        },
        {
          name: 'contentType',
          type: 'radio',
          required: true,
          defaultValue: 'text',
          options: [
            { label: 'Texte libre', value: 'text' },
            { label: 'Formulaire existant', value: 'form' },
            { label: 'Construire un formulaire', value: 'formBuilder' },
          ],
          label: 'Type de contenu',
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Step Content',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.contentType === 'text'
            },
          },
        },
        {
          name: 'form',
          type: 'relationship',
          relationTo: 'forms',
          label: 'Sélectionner un formulaire',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.contentType === 'form'
            },
          },
        },
        {
          name: 'fields',
          type: 'blocks',
          label: 'Champs du formulaire',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.contentType === 'formBuilder'
            },
            description: 'Construisez votre formulaire en ajoutant des champs ci-dessous',
          },
          blocks: [
            {
              slug: 'text',
              labels: {
                singular: 'Champ Texte',
                plural: 'Champs Texte',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Nom du champ (identifiant unique)',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Label',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Champ obligatoire',
                  defaultValue: false,
                },
              ],
            },
            {
              slug: 'email',
              labels: {
                singular: 'Champ Email',
                plural: 'Champs Email',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Nom du champ (identifiant unique)',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Label',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Champ obligatoire',
                  defaultValue: false,
                },
              ],
            },
            {
              slug: 'textarea',
              labels: {
                singular: 'Zone de texte',
                plural: 'Zones de texte',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Nom du champ (identifiant unique)',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Label',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Champ obligatoire',
                  defaultValue: false,
                },
              ],
            },
            {
              slug: 'number',
              labels: {
                singular: 'Champ Nombre',
                plural: 'Champs Nombre',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Nom du champ (identifiant unique)',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Label',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Champ obligatoire',
                  defaultValue: false,
                },
              ],
            },
            {
              slug: 'checkbox',
              labels: {
                singular: 'Case à cocher',
                plural: 'Cases à cocher',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Nom du champ (identifiant unique)',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Label',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Champ obligatoire',
                  defaultValue: false,
                },
              ],
            },
            {
              slug: 'select',
              labels: {
                singular: 'Select',
                plural: 'Selects',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: false,
                  label: 'Nom du champ (identifiant unique)',
                  admin: {
                    description: 'Laissez vide pour générer automatiquement depuis le label',
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: false,
                  label: 'Label',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Champ obligatoire',
                  defaultValue: false,
                },
                {
                  name: 'allowMultiple',
                  type: 'checkbox',
                  label: 'Autoriser sélection multiple',
                  defaultValue: false,
                },
                {
                  name: 'options',
                  type: 'array',
                  required: false,
                  label: 'Options',
                  minRows: 1,
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      label: 'Label',
                    },
                    {
                      name: 'value',
                      type: 'text',
                      required: true,
                      label: 'Valeur',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Steppers',
    singular: 'Stepper',
  },
}
