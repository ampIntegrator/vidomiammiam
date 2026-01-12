import React from 'react'
import { SimpleHero } from '@/heros/Simple'

interface RenderHeroProps {
  simpleHeading?: string
  pageTitle?: string
  headingColor?: 'primary' | 'danger' | 'success' | 'warning' | 'teal' | 'purple' | 'info'
}

export const RenderHero: React.FC<RenderHeroProps> = (props) => {
  return <SimpleHero {...props} />
}
