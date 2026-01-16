import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { IconsBox } from '../../blocks/IconsBox/config'
import { FWBanner } from '../../blocks/FWBanner/config'
import { FWImage } from '../../blocks/FWImage/config'
import { TitleFigureLong } from '../../blocks/TitleFigureLong/config'
import { FigureOnTop } from '../../blocks/FigureOnTop/config'
import { TitleTextNoBoxing } from '../../blocks/TitleTextNoBoxing/config'
import { TitleWithSeparator } from '../../blocks/TitleWithSeparator/config'
import { TextImageContainer } from '../../blocks/TextImageContainer/config'
import { BoxedImage } from '../../blocks/BoxedImage/config'
import { PriceList } from '../../blocks/PriceList/config'
import { FAQ } from '../../blocks/FAQ/config'
import { Tabs } from '../../blocks/Tabs/config'
import { Stepper } from '../../blocks/Stepper/config'
import { CTA } from '../../blocks/CTA/config'
import { BlogPostsGrid } from '../../blocks/BlogPostsGrid/config'
import { LogoSlider } from '../../blocks/LogoSlider/config'
import { TicketBox } from '../../blocks/TicketBox/config'
import { FreeHTML } from '../../blocks/FreeHTML/config'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'pageType',
      type: 'radio',
      label: 'Type de Page',
      defaultValue: 'blocks',
      options: [
        {
          label: 'Page avec Blocs (Normal)',
          value: 'blocks',
        },
        {
          label: 'Page Custom (HTML Libre)',
          value: 'custom',
        },
      ],
      admin: {
        position: 'sidebar',
        layout: 'horizontal',
        description: 'Choisissez le type de page: blocs modulaires ou HTML personnalisé',
      },
    },
    {
      name: 'hideHero',
      type: 'checkbox',
      label: 'Masquer le Hero avec titre',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Cochez pour masquer le hero et le titre de la page',
        condition: (data, siblingData) => {
          return data?.pageType === 'custom'
        },
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              ...hero,
              admin: {
                ...hero.admin,
                condition: (data, siblingData) => {
                  return data?.pageType === 'blocks' || !data?.pageType
                },
              },
            },
          ],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                IconsBox,
                TitleFigureLong,
                FigureOnTop,
                TitleTextNoBoxing,
                TitleWithSeparator,
                TextImageContainer,
                BoxedImage,
                PriceList,
                FAQ,
                Tabs,
                Stepper,
                CTA,
                FWBanner,
                FWImage,
                BlogPostsGrid,
                LogoSlider,
                TicketBox,
                FreeHTML,
              ],
              required: true,
              admin: {
                initCollapsed: true,
                condition: (data, siblingData) => {
                  return data?.pageType === 'blocks' || !data?.pageType
                },
              },
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'customHTML',
              type: 'code',
              label: 'HTML Personnalisé',
              admin: {
                language: 'html',
                description:
                  'Entrez votre HTML personnalisé. Vous avez un accès complet au HTML, CSS (inline ou <style>) et JavaScript (<script>)',
                condition: (data, siblingData) => {
                  return data?.pageType === 'custom'
                },
              },
            },
          ],
          label: 'Custom HTML',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
            {
              name: 'schema',
              type: 'group',
              label: 'Structured Data (JSON-LD)',
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  label: 'Schema Type',
                  options: [
                    { label: 'Article', value: 'Article' },
                    { label: 'HowTo', value: 'HowTo' },
                    { label: 'FAQPage', value: 'FAQPage' },
                    { label: 'Service', value: 'Service' },
                    { label: 'Product', value: 'Product' },
                    { label: 'WebPage', value: 'WebPage' },
                  ],
                  admin: {
                    description: 'Select the primary schema type for this page',
                  },
                },
                {
                  name: 'customData',
                  type: 'json',
                  label: 'Custom JSON-LD Data',
                  admin: {
                    description: 'Additional structured data in JSON-LD format',
                  },
                },
              ],
            },
            {
              name: 'focusKeyword',
              type: 'text',
              label: 'Focus Keyword',
              admin: {
                description: 'Primary keyword for this page',
              },
            },
            {
              name: 'relatedKeywords',
              type: 'array',
              label: 'Related Keywords',
              fields: [
                {
                  name: 'keyword',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'canonicalUrl',
              type: 'text',
              label: 'Canonical URL',
              admin: {
                description: 'Override canonical URL (leave empty to use default)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
