'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { IconsBoxBlock as IconsBoxBlockProps } from '@/payload-types'
import './iconsBox.scss'

export const IconsBoxBlock: React.FC<IconsBoxBlockProps> = ({
  headingLevel,
  center,
  items,
  noBoxing,
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

  const centerClass = center ? 'center' : ''
  const noBoxingClass = noBoxing === 'noBoxing' ? 'noInfraBox' : ''

  // Dynamic heading tag
  const HeadingTag = (headingLevel || 'h3') as React.ElementType

  // Determine column class based on number of items
  const getColumnClass = () => {
    if (!items) return 'col'
    const itemCount = items.length
    if (itemCount === 2) return 'col-md-6'
    if (itemCount === 3) return 'col-lg-4'
    if (itemCount === 4) return 'col-md-6 col-lg-3'
    return 'col'
  }

  const columnClass = getColumnClass()

  return (
    <div
      ref={containerRef}
      className={`iconsBoxContainer ${noBoxingClass} ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="row g-4">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <div key={index} className={columnClass}>
              <div className={`infraBox iconsBox ${centerClass}`}>
                {item.icon && <i className={`icon ${item.icon} animate-icon`}></i>}
                {item.title && (
                  <HeadingTag className="iconsBoxTitle animate-title">{item.title}</HeadingTag>
                )}
                {item.description && (
                  <p className="text-sm opacity-90 animate-text">{item.description}</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
