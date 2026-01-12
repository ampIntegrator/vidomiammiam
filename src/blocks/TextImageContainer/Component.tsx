'use client'

import React, { useEffect, useRef, useState } from 'react'
import type {
  TextImageContainerBlock as TextImageContainerBlockProps,
  Media,
} from '@/payload-types'
import './textImageContainer.scss'

export const TextImageContainerBlock: React.FC<TextImageContainerBlockProps> = ({
  textColumnWidth,
  image,
  layout,
  headingLevel,
  center,
  title,
  text,
  ctaText,
  ctaUrl,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Hard-coded to primary
  const centerClass = center ? 'centered' : ''
  const ctaClass = center ? 'text-center' : ''
  const btnColorClass = 'btn-primary'

  // Dynamic heading tag
  const HeadingTag = (headingLevel || 'h3') as React.ElementType

  // Calculate complementary column width for image
  const getImageColumnClass = () => {
    if (textColumnWidth === 'col-lg-4') return 'col-lg-8'
    if (textColumnWidth === 'col-lg-6') return 'col-lg-6'
    if (textColumnWidth === 'col-lg-8') return 'col-lg-4'
    return 'col-lg-6'
  }

  const imageColumnClass = getImageColumnClass()

  // Get image URL
  const imageUrl = typeof image === 'object' && image !== null ? (image as Media).url : ''

  // Text column content
  const textColumn = (
    <div className={`${textColumnWidth} ${layout === 'imageText' ? 'animate-slide-left' : 'animate-slide-right'}`}>
      <div className="infraBox">
        <div className="content">
          {title && <HeadingTag className={`blocTitle ${centerClass} animate-title`}>{title}</HeadingTag>}
          <div className={`separator animate-separator`}></div>
          {text && <p className="animate-text">{text}</p>}
          {ctaText && ctaUrl && (
            <div className={`${ctaClass} animate-cta`}>
              <a className={`btn btn-secondary text-white mt-4`} href={ctaUrl}>
                {ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  // Image column content
  const imageColumn = (
    <div className={`${imageColumnClass} ${layout === 'imageText' ? 'animate-slide-right' : 'animate-slide-left'}`}>
      <div
        className="imageContainer"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </div>
  )

  return (
    <div ref={containerRef} className={`textImageContainer ${isVisible ? 'animate-in' : ''}`}>
      <div className="row g-0">
        {layout === 'imageText' ? (
          <>
            {imageColumn}
            {textColumn}
          </>
        ) : (
          <>
            {textColumn}
            {imageColumn}
          </>
        )}
      </div>
    </div>
  )
}
