'use client'

import React from 'react'

type Props = {
  html: string
  className?: string
}

export const CustomHTML: React.FC<Props> = ({ html, className = '' }) => {
  if (!html) {
    return null
  }

  return (
    <section
      className={`custom-html-section ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
