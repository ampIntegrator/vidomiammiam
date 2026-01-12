'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { BoxedImageBlock as BoxedImageBlockType, Media } from '@/payload-types'
import './boxedImage.scss'

export const BoxedImageBlock: React.FC<BoxedImageBlockType> = ({
  backgroundColor = 'bg-primary',
  paddingTop = 'pt-4',
  paddingBottom = 'pb-4',
  height = 'normal',
  backgroundImage,
  overlayOpacity = 'overlay-opacity-25',
  quoteTag = 'h3',
  quote,
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
    <section className={backgroundColor}>
      <div className={`container ${paddingTop} ${paddingBottom}`}>
        <div className="row">
          <div className="col-12">
            <div
              ref={containerRef}
              className={`boxedImageContainer ${heightClass} ${overlayOpacity} ${isVisible ? 'animate-in' : ''}`}
              style={{
                backgroundImage: `url(${bgImageUrl})`,
              }}
            >
              {quote && (
                <div className="row justify-content-center position-relative">
                  <div className="col-lg-8 text-center">
                    <QuoteTag className="boxedImageTitle text-white animate-text">
                      {quote.split('').map((char, index) => (
                        <span
                          key={index}
                          className="char"
                          style={{
                            animationDelay: `${1 + index * 0.02}s`,
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </QuoteTag>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
