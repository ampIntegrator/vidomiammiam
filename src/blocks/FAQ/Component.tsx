'use client'

import React, { useState, useEffect, useRef } from 'react'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import './faq.scss'

export const FAQBlock: React.FC<FAQBlockProps> = ({ faqTitle, titleTag, faqText, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Dynamic title tag
  const TitleTag = (titleTag || 'h3') as React.ElementType

  // Séparer les questions en 2 colonnes (impaires et paires)
  const leftColumnItems = items?.filter((_, index) => index % 2 === 0) || []
  const rightColumnItems = items?.filter((_, index) => index % 2 === 1) || []

  const renderFaqItem = (item: any, originalIndex: number) => {
    const isOpen = openIndex === originalIndex
    const QuestionTag = (item.questionTag || 'h4') as React.ElementType

    return (
      <div key={originalIndex} className="faqElement">
        <QuestionTag
          className={`faqQuestion ${isOpen ? 'open' : ''}`}
          onClick={() => toggleQuestion(originalIndex)}
        >
          <span>{item.question}</span>
          <i className={`icon ${isOpen ? 'icon-minus-2' : 'icon-plus-2'}`}></i>
        </QuestionTag>
        <div className={`faqAnswer ${isOpen ? 'open' : ''}`}>
          <p>{item.answer}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`faqContainer ${isVisible ? 'animate-in' : ''}`} ref={containerRef}>
      <div className="row g-4">
        {(faqTitle || faqText) && (
          <div className="col-12">
            {faqTitle && <TitleTag className="faqTitle animate-title">{faqTitle}</TitleTag>}
            <div className="separator bg-pink animate-separator"></div>
            {faqText && <div className="faqText animate-text">{faqText}</div>}
          </div>
        )}

        {items && items.length > 0 && (
          <>
            <div className="col-lg-6 animate-left">
              {leftColumnItems.map((item, index) => renderFaqItem(item, index * 2))}
            </div>
            <div className="col-lg-6 animate-right">
              {rightColumnItems.map((item, index) => renderFaqItem(item, index * 2 + 1))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
