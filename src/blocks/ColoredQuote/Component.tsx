import React from 'react'
import type { ColoredQuoteBlock as ColoredQuoteBlockType } from '@/payload-types'
import RichText from '@/components/RichText'

export const ColoredQuoteBlock: React.FC<ColoredQuoteBlockType> = ({ quote }) => {
  return (
    <blockquote className="post-quote">
      <RichText data={quote} enableGutter={false} enableProse={false} />
    </blockquote>
  )
}
