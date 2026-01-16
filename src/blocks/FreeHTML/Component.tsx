'use client'

import React from 'react'
import type { FreeHTMLBlock as FreeHTMLBlockType } from '@/payload-types'
import './freeHTML.scss'

export const FreeHTMLBlock: React.FC<FreeHTMLBlockType> = ({
  backgroundColor,
  paddingTop,
  paddingBottom,
  fullWidth,
  htmlContent,
}) => {
  if (!htmlContent) {
    return null
  }

  const containerClass = fullWidth ? 'container-fluid' : 'container'

  return (
    <section
      className={`freeHTML ${backgroundColor || ''} ${paddingTop || ''} ${paddingBottom || ''}`}
    >
      <div className={containerClass}>
        <div className="row">
          <div className="col-12">
            <div
              className="freeContainer"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
