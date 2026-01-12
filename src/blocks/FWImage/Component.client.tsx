'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { FWImageBlock as FWImageBlockType, Media } from '@/payload-types'

import './FWImage.scss'

type FWImageClientProps = FWImageBlockType & {
  id?: string
}

export const FWImageClient: React.FC<FWImageClientProps> = ({
  height = 'normal',
  backgroundImage,
  overlayOpacity = 'overlay-opacity-25',
  quoteTag = 'h3',
  quote,
  enableParallax = true,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const [revealProgress, setRevealProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const scrolled = window.pageYOffset
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate reveal progress (0 to 1)
      // Starts when section enters viewport, completes when fully in view
      const sectionBottom = sectionTop + sectionHeight
      const viewportBottom = scrolled + windowHeight
      const viewportTop = scrolled

      if (viewportBottom > sectionTop && viewportTop < sectionBottom) {
        // Calculate how much of the section is visible (slower progression)
        const visibleStart = Math.max(0, viewportBottom - sectionTop)
        const visibleRange = sectionHeight * 1.5 // Slower: extends the reveal range
        const progress = Math.min(1, visibleStart / visibleRange)

        setRevealProgress(progress)

        // Parallax effect
        if (enableParallax) {
          const yPos = (scrolled - sectionTop) * 0.6
          section.style.backgroundPosition = `center calc(50% + ${yPos}px)`
        }

        // Apply reveal effects in 2 phases:
        // Phase 1 (0 → 0.5): Text appears (primary → white on primary background)
        // Phase 2 (0.5 → 1): Overlay fades (primary → transparent, revealing image)

        if (textRef.current) {
          // Text transitions from primary to white (first half of animation)
          const textProgress = Math.min(1, progress * 2) // 0→1 during first 50% of scroll

          // Interpolate from primary (#428161 = rgb(66, 129, 97)) to white (#ffffff)
          const r = Math.round(66 + (255 - 66) * textProgress)
          const g = Math.round(129 + (255 - 129) * textProgress)
          const b = Math.round(97 + (255 - 97) * textProgress)

          textRef.current.style.color = `rgb(${r}, ${g}, ${b})`
        }

        if (overlayRef.current) {
          // Overlay fades after text is white (second half of animation)
          const overlayProgress = Math.max(0, (progress - 0.5) * 2) // 0→1 during last 50% of scroll
          overlayRef.current.style.opacity = `${1 - overlayProgress}`
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableParallax])

  // Get background image URL
  const bgImageUrl =
    typeof backgroundImage === 'object' && backgroundImage !== null
      ? (backgroundImage as Media).url
      : ''

  // Map height to CSS class
  const heightClass = height

  // Dynamic heading tag
  const QuoteTag = quoteTag as React.ElementType

  return (
    <div
      ref={sectionRef}
      className={`fwImage ${heightClass}`}
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: enableParallax ? '110%' : 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: enableParallax ? 'fixed' : 'scroll',
      }}
    >
      {/* Primary overlay that fades out on scroll */}
      <div
        ref={overlayRef}
        className="reveal-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 1,
          transition: 'opacity 0.1s ease-out',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div className="text-center py-4">
              <QuoteTag
                ref={textRef}
                className="fwTitle"
                style={{
                  transition: 'color 0.1s ease-out',
                }}
              >
                {quote}
              </QuoteTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
