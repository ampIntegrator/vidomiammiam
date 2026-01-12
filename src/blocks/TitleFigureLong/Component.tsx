import React from 'react'
import type { TitleFigureLongBlock as TitleFigureLongBlockProps } from '@/payload-types'
import './titleFigureLong.scss'

export const TitleFigureLongBlock: React.FC<TitleFigureLongBlockProps> = ({
  headingLevel,
  items,
  noBoxing,
}) => {
  // Hard-coded to primary
  const HeadingTag = (headingLevel || 'h3') as React.ElementType
  const noBoxingClass = noBoxing === 'noBoxing' ? 'noInfraBox' : ''

  return (
    <div className={`titleFigureLongContainer ${noBoxingClass}`}>
      <div className="row g-4">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="infraBox">
                <HeadingTag className={`blocTitle withFigure `}>
                  <span>{item.figure}</span>
                  <span dangerouslySetInnerHTML={{ __html: item.title }} />
                </HeadingTag>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
