'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { CTABlock as CTABlockProps } from '@/payload-types'
import './cta.scss'

export const CTABlock: React.FC<CTABlockProps> = ({
  alignment = 'center',
  buttons,
  backgroundColor,
  paddingTop,
  paddingBottom,
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

  if (!buttons || buttons.length === 0) {
    return null
  }

  // Determine alignment class
  const alignmentClass =
    alignment === 'center'
      ? 'justify-content-center'
      : alignment === 'right'
        ? 'justify-content-end'
        : 'justify-content-start'

  // Determine button class based on position and total count
  const getButtonClass = (index: number) => {
    const totalButtons = buttons.length

    // First button is always outline-success
    if (index === 0) {
      return 'btn btn-success text-white'
    }

    // Second button (index 1)
    if (index === 1) {
      return 'btn btn-secondary text-white'
    }

    // Third button (index 2) - solid secondary
    if (index === 2) {
      return 'btn btn-outline-secondary'
    }

    // Default fallback
    return 'btn btn-secondary text-white'
  }

  // Determine animation classes based on button count
  const getAnimationClass = (index: number) => {
    const totalButtons = buttons.length

    if (totalButtons === 1) {
      return 'animate-single'
    }

    if (totalButtons === 2) {
      return index === 0 ? 'animate-converge-left' : 'animate-converge-right'
    }

    if (totalButtons === 3) {
      if (index === 0) return 'animate-triple-left'
      if (index === 1) return 'animate-triple-center'
      if (index === 2) return 'animate-triple-right'
    }

    return ''
  }

  const buttonCountClass = `btn-count-${buttons.length}`

  return (
    <div
      ref={containerRef}
      className={`ctaContainer ${backgroundColor || ''} ${paddingTop || ''} ${paddingBottom || ''} ${isVisible ? 'animate-in' : ''} ${buttonCountClass}`}
    >
      <div className={`d-flex ${alignmentClass}`}>
        <div className="btn-group bg-light" role="group" aria-label="Call to action buttons">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.url}
              className={`${getButtonClass(index)} ${getAnimationClass(index)}`}
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
