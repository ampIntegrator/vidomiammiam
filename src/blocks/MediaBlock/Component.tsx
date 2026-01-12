import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'

type Props = MediaBlockProps & {
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: any
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    position = 'default',
    staticImage,
    disableInnerContainer,
    caption,
  } = props

  let imageUrl = ''
  let alt = ''

  if (media && typeof media === 'object') {
    imageUrl = media.url || ''
    alt = media.alt || ''
  }

  const isFullWidth = position === 'fullWidth'

  return (
    <div
      className={`${className || ''} ${isFullWidth ? 'w-full' : ''} ${
        enableGutter ? 'container' : ''
      }`}
    >
      {media && typeof media === 'object' ? (
        <Media
          resource={media}
          className={imgClassName}
          imgClassName={imgClassName}
        />
      ) : null}
      {caption && (
        <div className={captionClassName}>
          <RichText data={caption} enableGutter={false} enableProse={false} />
        </div>
      )}
    </div>
  )
}
