'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { TitleTextNoBoxingBlock as TitleTextNoBoxingBlockProps } from '@/payload-types'

export const TitleTextNoBoxingClientBlock: React.FC<TitleTextNoBoxingBlockProps> = ({
  headingLevel,
  center,
  title,
  text,
  ctaText,
  ctaUrl,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const rowClass = center ? 'row justify-content-center' : 'row'
  const colClass = center ? 'col-lg-8 center' : 'col-lg-8'
  const titleClass = center ? 'text-center' : ''
  const ctaClass = center ? 'text-center' : ''

  // Dynamic heading tag
  const HeadingTag = (headingLevel || 'h2') as React.ElementType

  return (
    <div
      className={`titleTextNoBoxingContainer ${isVisible ? 'animate-in' : ''}`}
      ref={containerRef}
    >
      <div className={rowClass}>
        <div className={colClass}>
          {title && (
            <HeadingTag className={`${titleClass} animate-title`}>{title}</HeadingTag>
          )}
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
}
