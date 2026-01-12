'use client'

import React, { useState, useEffect, useRef } from 'react'
import type { TabsBlock as TabsBlockType, Media } from '@/payload-types'
import './tabs.scss'

export const TabsBlock: React.FC<TabsBlockType> = ({
  id,
  tabsWidth = 'col-lg-12',
  image,
  layout = 'tabsImage',
  overlayOpacity = 'overlay-opacity-25',
  items,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0) // Premier onglet actif par défaut
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

  // Use the stable ID from Payload instead of generating a random one
  // This ensures the same ID is used during SSR and client hydration
  const tabsId = `tabs-${id || 'default'}`

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  // Check if we have an image
  const hasImage = tabsWidth !== 'col-lg-12'

  // Calculate image column class
  const getImageColumnClass = () => {
    if (tabsWidth === 'col-lg-6') return 'col-lg-6'
    if (tabsWidth === 'col-lg-9') return 'col-lg-3'
    return ''
  }

  const imageColumnClass = getImageColumnClass()

  // Get image URL
  const imageUrl = typeof image === 'object' && image !== null ? (image as Media).url : ''

  // Tabs content
  const tabsContent = (
    <div className={`col-12 ${tabsWidth}`}>
      <div className="tabs">
        <ul className="nav nav-tabs nav-justified animate-tabs-nav" id={tabsId} role="tablist">
          {items.map((item, index) => {
            const isActive = activeTab === index
            const tabId = `${tabsId}-tab-${index}`
            const panelId = `${tabsId}-panel-${index}`

            return (
              <li key={index} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  id={tabId}
                  type="button"
                  role="tab"
                  aria-controls={panelId}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabClick(index)}
                >
                  {item.title}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="tab-content animate-tabs-content" id={`${tabsId}-content`}>
          {items.map((item, index) => {
            const isActive = activeTab === index
            const tabId = `${tabsId}-tab-${index}`
            const panelId = `${tabsId}-panel-${index}`

            return (
              <div
                key={index}
                className={`tab-pane fade ${isActive ? 'show active' : ''}`}
                id={panelId}
                role="tabpanel"
                aria-labelledby={tabId}
                tabIndex={0}
              >
                {item.content}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  // Image content - determine direction based on layout
  const imageAnimationClass = layout === 'tabsImage' ? 'animate-image-right' : 'animate-image-left'

  const imageContent = hasImage ? (
    <div className={`col-12 ${imageColumnClass} ${imageAnimationClass}`}>
      <div
        className={`tabsImage ${overlayOpacity || 'overlay-opacity-25'}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  ) : null

  // If no image, just render tabs
  if (!hasImage) {
    return (
      <div className={`tabsContainer ${isVisible ? 'animate-in' : ''}`} ref={containerRef}>
        {tabsContent}
      </div>
    )
  }

  // If image, render in layout order
  return (
    <div className={`tabsContainer ${isVisible ? 'animate-in' : ''}`} ref={containerRef}>
      <div className="row g-0">
        {layout === 'tabsImage' ? (
          <>
            {tabsContent}
            {imageContent}
          </>
        ) : (
          <>
            {imageContent}
            {tabsContent}
          </>
        )}
      </div>
    </div>
  )
}
