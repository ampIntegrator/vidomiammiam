import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { IconsBoxBlock } from '@/blocks/IconsBox/Component'
import { FWBannerBlock } from '@/blocks/FWBanner/Component'
import { FWImageBlock } from '@/blocks/FWImage/Component'
import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { TitleFigureLongBlock } from '@/blocks/TitleFigureLong/Component'
import { FigureOnTopBlock } from '@/blocks/FigureOnTop/Component'
import { TitleTextNoBoxingBlock } from '@/blocks/TitleTextNoBoxing/Component'
import { TitleWithSeparatorBlock } from '@/blocks/TitleWithSeparator/Component'
import { TextImageContainerBlock } from '@/blocks/TextImageContainer/Component'
import { BoxedImageBlock } from '@/blocks/BoxedImage/Component'
import { PriceListBlock } from '@/blocks/PriceList/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { TabsBlock } from '@/blocks/Tabs/Component.client'
import { Stepper as StepperBlock } from '@/blocks/Stepper/Component'
import { CTABlock } from '@/blocks/CTA/Component'
import { BlogPostsGrid } from '@/blocks/BlogPostsGrid/Component'
import { LogoSliderBlock } from '@/blocks/LogoSlider/Component'
import { TicketBoxBlock } from '@/blocks/TicketBox/Component'

const blockComponents = {
  iconsBox: IconsBoxBlock,
  fwBanner: FWBannerBlock,
  fwImage: FWImageBlock,
  relatedPosts: RelatedPosts,
  titleFigureLong: TitleFigureLongBlock,
  figureOnTop: FigureOnTopBlock,
  titleTextNoBoxing: TitleTextNoBoxingBlock,
  titleWithSeparator: TitleWithSeparatorBlock,
  textImageContainer: TextImageContainerBlock,
  boxedImage: BoxedImageBlock,
  priceList: PriceListBlock,
  faq: FAQBlock,
  tabs: TabsBlock,
  stepper: StepperBlock,
  cta: CTABlock,
  blogPostsGrid: BlogPostsGrid,
  logoSlider: LogoSliderBlock,
  ticketBox: TicketBoxBlock,
}

// Define which blocks should be full width (not wrapped in .box)
const fullWidthBlocks = ['fwBanner', 'fwImage']

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) {
    return null
  }

  return (
    <Fragment>
      {blocks.map((block, blockIndex) => {
        const { blockType } = block

        if (!blockType || !(blockType in blockComponents)) {
          return null
        }

        const Block = blockComponents[blockType]
        if (!Block) {
          return null
        }

        const isFullWidth = fullWidthBlocks.includes(blockType)

        if (isFullWidth) {
          // Render full width blocks
          return (
            <section className="fullWidth" key={`block-${blockIndex}`}>
              {/* @ts-expect-error there may be some mismatch between the expected types here */}
              <Block {...block} disableInnerContainer />
            </section>
          )
        } else {
          // Render boxed width blocks - each in its own section
          // Extract styling properties if they exist
          const backgroundColor = 'backgroundColor' in block ? String(block.backgroundColor) : ''
          const paddingTop = 'paddingTop' in block ? String(block.paddingTop) : ''
          const paddingBottom = 'paddingBottom' in block ? String(block.paddingBottom) : ''

          const sectionClassName = backgroundColor || undefined
          const containerClassName = ['container', paddingTop, paddingBottom]
            .filter(Boolean)
            .join(' ')

          return (
            <section key={`block-${blockIndex}`} className={sectionClassName}>
              <div className={containerClassName}>
                <div className="row">
                  <div className="col-12">
                    {/* @ts-expect-error there may be some mismatch between the expected types here */}
                    <Block {...block} disableInnerContainer />
                  </div>
                </div>
              </div>
            </section>
          )
        }
      })}
    </Fragment>
  )
}
