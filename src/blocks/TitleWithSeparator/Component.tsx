'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { TitleWithSeparatorBlock as TitleWithSeparatorBlockProps } from '@/payload-types'
import './titleWithSeparator.scss'

export const TitleWithSeparatorBlock: React.FC<TitleWithSeparatorBlockProps> = ({
  headingLevel,
  center,
  items,
  noBoxing,
  blockAlignment,
  singleBlockWidth,
  complementaryImage,
  imagePosition,
}) => {
  const centerClass = center ? 'centered' : ''
  const noBoxingClass = noBoxing === 'noBoxing' ? 'noInfraBox' : ''
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Dynamic heading tag
  const HeadingTag = (headingLevel || 'h3') as React.ElementType

  // Determine if there are 2 blocks
  const hasTwoBlocks = items && items.length === 2
  const hasSingleBlock = items && items.length === 1

  // Determine column class based on number of items and settings
  const getColumnClass = () => {
    if (!items) return 'col-lg-8'
    const itemCount = items.length
    if (itemCount === 1) {
      // Use singleBlockWidth if complementaryImage is present
      return complementaryImage ? singleBlockWidth || 'col-lg-8' : 'col-lg-8'
    }
    if (itemCount === 2) return 'col-lg-6'
    return 'col-lg-8'
  }

  const columnClass = getColumnClass()

  // Get complementary image column class
  const getComplementaryColumnClass = () => {
    if (!complementaryImage || !hasSingleBlock) return ''
    return singleBlockWidth === 'col-lg-6' ? 'col-lg-6' : 'col-lg-4'
  }

  const complementaryColumnClass = getComplementaryColumnClass()

  // Get row alignment class for single block (only when NO complementary image)
  const getRowAlignmentClass = () => {
    if (!hasSingleBlock || complementaryImage) return ''
    const align = blockAlignment || 'center'
    if (align === 'left') return 'justify-content-start'
    if (align === 'right') return 'justify-content-end'
    return 'justify-content-center'
  }

  const rowAlignmentClass = getRowAlignmentClass()

  // Get background image URL
  const getBackgroundImageUrl = () => {
    if (!complementaryImage || typeof complementaryImage !== 'object') return ''
    return `/media/${complementaryImage.filename}`
  }

  const backgroundImageUrl = getBackgroundImageUrl()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const hasComplementaryImage = hasSingleBlock && complementaryImage
  const imagePositionClass =
    hasComplementaryImage && imagePosition ? `image-${imagePosition}` : ''

  return (
    <div
      ref={containerRef}
      className={`titleWithSeparatorContainer ${noBoxingClass} ${hasTwoBlocks ? 'has-two-blocks' : ''} ${hasComplementaryImage ? 'has-complementary-image' : ''} ${imagePositionClass} ${isVisible ? 'animate-in' : ''}`}
    >
      <div className={`row g-4 ${rowAlignmentClass}`}>
        {/* Show complementary image on the left if position is 'left' */}
        {hasSingleBlock && complementaryImage && imagePosition === 'left' && (
          <div className={complementaryColumnClass}>
            <div
              className="infraBox complementary-image"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
          </div>
        )}

        {/* Content blocks */}
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <div key={index} className={columnClass}>
              <div className="infraBox">
                {item.title && (
                  <HeadingTag className={`blocTitle ${centerClass}`}>{item.title}</HeadingTag>
                )}
                <div className="separator bg-secondary"></div>
                {item.text && <p>{item.text}</p>}
              </div>
            </div>
          ))}

        {/* Show complementary image on the right if position is 'right' */}
        {hasSingleBlock && complementaryImage && imagePosition === 'right' && (
          <div className={complementaryColumnClass}>
            <div
              className="infraBox complementary-image"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}
