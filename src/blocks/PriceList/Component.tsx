'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { PriceListBlock as PriceListBlockType, Media } from '@/payload-types'
import Link from 'next/link'
import './priceList.scss'

export const PriceListBlock: React.FC<PriceListBlockType> = ({ items, premiumCard, premiumRibbonText }) => {
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

  if (!items || items.length === 0) {
    return null
  }

  const itemCount = items.length

  // Determine column class based on number of items
  const getColClass = () => {
    switch (itemCount) {
      case 1:
        return 'col-lg-5'
      case 2:
        return 'col-lg-5'
      case 3:
        return 'col-lg-4'
      case 4:
        return 'col-lg-3'
      default:
        return 'col-lg-5'
    }
  }

  const colClass = getColClass()

  // Determine animation class and delay based on position (queue effect from right)
  const getCardAnimationClass = (index: number) => {
    if (itemCount === 1) {
      return 'animate-queue-0' // Single card, no delay
    }
    // For 2-4 cards: each arrives from right with staggered delay
    return `animate-queue-${index}`
  }

  const cardCountClass = `card-count-${itemCount}`

  return (
    <div
      ref={containerRef}
      className={`priceListContainer ${cardCountClass} ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="row g-4 justify-content-center">
        {items.map((item, index) => {
          // Get thumbnail image URL
          const thumbnailUrl =
            typeof item.thumbnailImage === 'object' && item.thumbnailImage !== null
              ? (item.thumbnailImage as Media).url
              : ''

          // Dynamic title tag
          const TitleTag = (item.titleTag || 'h2') as React.ElementType

          // Check if URL is internal or external
          const isInternalLink = item.ctaUrl?.startsWith('/')

          // Check if this card is the premium one (index + 1 to match 1-4 selection)
          const isPremium = premiumCard && premiumCard !== 'none' && parseInt(premiumCard) === index + 1
          const premiumClass = isPremium ? 'premium' : ''

          return (
            <div key={index} className={`${colClass} ${getCardAnimationClass(index)}`}>
              <div className={`card overflow-hidden shadow ${premiumClass}`}>
                {/* Thumbnail */}
                <div
                  className="card-thumbnail overflow-hidden animate-thumbnail"
                  style={{ backgroundImage: `url(${thumbnailUrl})` }}
                >
                  {isPremium && premiumRibbonText && (
                    <div className="premium-ribbon">
                      <span>{premiumRibbonText}</span>
                    </div>
                  )}
                </div>

                {/* Header */}
                <div className="card-header animate-header">
                  <div className="card-category px-3 py-2">
                    <span>{item.category}</span>
                  </div>
                  <TitleTag className="card-title px-3 my-0">{item.title}</TitleTag>
                </div>

                {/* Body */}
                <div className="card-body animate-body">
                  <h3 className="pricing-card-title m-0">
                    {item.price}
                    {item.priceUnit && <sup>{item.priceUnit}</sup>}
                  </h3>
                  <p className="my-3">{item.description}</p>
                  {item.features && item.features.length > 0 && (
                    <ul className="list-unstyled mb-4">
                      {item.features.map((featureItem, featureIndex) => (
                        <li key={featureIndex}>{featureItem.feature}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer */}
                <div className="card-footer animate-footer">
                  {isInternalLink ? (
                    <Link href={item.ctaUrl || '#'} className="btn w-100">
                      {item.ctaText}
                    </Link>
                  ) : (
                    <a
                      href={item.ctaUrl || '#'}
                      className="btn w-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.ctaText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
