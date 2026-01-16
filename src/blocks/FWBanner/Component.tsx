import React from 'react'
import Link from 'next/link'
import type { FWBannerBlock as FWBannerBlockType } from '@/payload-types'

import './FWBanner.scss'

type FWBannerBlockProps = FWBannerBlockType & {
  id?: string
}

export const FWBannerBlock: React.FC<FWBannerBlockProps> = ({
  backgroundColor,
  paddingTop,
  paddingBottom,
  titleTag = 'h2',
  title,
  description,
  ctaText,
  ctaUrl,
}) => {
  const bgClass = backgroundColor || 'bg-primary'

  // Check if background is light (green or ivory)
  const isLightBackground = backgroundColor === 'bg-green' || backgroundColor === 'bg-ivory'

  // Apply different colors based on background
  const textColorClass = isLightBackground ? 'text-ink' : 'text-white'
  const separatorBgClass = isLightBackground ? 'bg-secondary' : 'bg-white'
  const buttonClass = isLightBackground ? 'btn-secondary' : `btn-outline ${textColorClass}`

  // Dynamic heading tag
  const TitleTag = titleTag as React.ElementType

  // Only show CTA if both text and URL are provided
  const showCta = ctaText && ctaUrl

  return (
    <div className={`fwBanner ${bgClass} withText ${paddingTop || ''} ${paddingBottom || ''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="text-center">
              <TitleTag className={`fwTitle ${textColorClass}`}>{title}</TitleTag>
              <div className={`separator ${separatorBgClass}`}></div>
              <p className={textColorClass}>{description}</p>
              {showCta && (
                <Link href={ctaUrl} className={`btn ${buttonClass}`}>
                  {ctaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
