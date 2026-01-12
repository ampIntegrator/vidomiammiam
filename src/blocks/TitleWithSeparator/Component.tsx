import React from 'react'
import type { TitleWithSeparatorBlock as TitleWithSeparatorBlockProps } from '@/payload-types'
import './titleWithSeparator.scss'

export const TitleWithSeparatorBlock: React.FC<TitleWithSeparatorBlockProps> = ({
  headingLevel,
  center,
  items,
  noBoxing,
}) => {
  const centerClass = center ? 'centered' : ''
  const noBoxingClass = noBoxing === 'noBoxing' ? 'noInfraBox' : ''

  // Dynamic heading tag
  const HeadingTag = (headingLevel || 'h3') as React.ElementType

  // Determine column class based on number of items
  const getColumnClass = () => {
    if (!items) return 'col-lg-8'
    const itemCount = items.length
    if (itemCount === 1) return 'col-lg-8'
    if (itemCount === 2) return 'col-lg-6'
    return 'col-lg-8'
  }

  const columnClass = getColumnClass()

  return (
    <div className={`titleWithSeparatorContainer ${noBoxingClass}`}>
      <div className="row g-4">
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
      </div>
    </div>
  )
}
