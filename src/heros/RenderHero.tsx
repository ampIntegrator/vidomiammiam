import React from 'react'
import { SimpleHero } from '@/heros/Simple'
import { FullScreenHero } from '@/heros/FullScreenHero/Component'
import type { Page } from '@/payload-types'

interface RenderHeroProps {
  hero?: Page['hero']
  pageTitle?: string
  headingColor?: 'primary' | 'danger' | 'success' | 'warning' | 'teal' | 'purple' | 'info'
}

export const RenderHero: React.FC<RenderHeroProps> = ({ hero, pageTitle, headingColor }) => {
  const heroType = hero?.type || 'simple'

  if (heroType === 'fullScreen') {
    return (
      <FullScreenHero
        backgroundMedia={hero?.backgroundMedia}
        title={hero?.title}
        description={hero?.description}
        primaryButton={hero?.primaryButton}
        secondaryButton={hero?.secondaryButton}
      />
    )
  }

  // Default to simple hero
  return <SimpleHero simpleHeading={hero?.simpleHeading} pageTitle={pageTitle} headingColor={headingColor} />
}
