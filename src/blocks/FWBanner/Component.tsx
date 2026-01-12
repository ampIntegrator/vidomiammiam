import React from 'react'
import Link from 'next/link'
import type { FWBannerBlock as FWBannerBlockType } from '@/payload-types'

import './FWBanner.scss'

type FWBannerBlockProps = FWBannerBlockType & {
  id?: string
}

export const FWBannerBlock: React.FC<FWBannerBlockProps> = ({
  height = 'normal',
  titleTag = 'h2',
  title,
  description,
  ctaText,
  ctaUrl,
}) => {
  // Hard-coded to primary
  const bgClass = 'bg-primary'
  const heightClass = height
  const textColorClass = 'text-white'
  const separatorBgClass = 'bg-white'

  // Dynamic heading tag
  const TitleTag = titleTag as React.ElementType

  // Only show CTA if both text and URL are provided
  const showCta = ctaText && ctaUrl

  return (
    <div className={`fwBanner ${bgClass} withText ${heightClass}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="text-center">
              <TitleTag className={`fwTitle ${textColorClass}`}>{title}</TitleTag>
              <div className={`separator ${separatorBgClass}`}></div>
              <p className={textColorClass}>{description}</p>
              {showCta && (
                <Link href={ctaUrl} className={`btn btn-outline ${textColorClass}`}>
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
