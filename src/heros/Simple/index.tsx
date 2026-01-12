import React from 'react'
import './simple-hero.scss'

interface SimpleHeroProps {
  simpleHeading?: string
  pageTitle?: string
}

export const SimpleHero: React.FC<SimpleHeroProps> = ({
  simpleHeading,
  pageTitle,
}) => {
  const heading = simpleHeading || pageTitle || ''

  return (
    <section className="topOfPage pb-5">
      <div className="container py-4">
        <h1
          className="text-center m-0"
          style={{ color: 'var(--color-primary)' }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      </div>
    </section>
  )
}
