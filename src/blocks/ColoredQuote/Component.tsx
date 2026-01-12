import React from 'react'
import type { ColoredQuoteBlock as ColoredQuoteBlockType } from '@/payload-types'
import RichText from '@/components/RichText'

export const ColoredQuoteBlock: React.FC<ColoredQuoteBlockType> = ({ quote }) => {
  return (
    <blockquote
      className="post-quote"
      style={{
        borderLeft: '4px solid var(--post-main-color)',
        color: 'var(--post-main-color)',
      }}
    >
      <RichText data={quote} enableGutter={false} enableProse={false} />
    </blockquote>
  )
}
