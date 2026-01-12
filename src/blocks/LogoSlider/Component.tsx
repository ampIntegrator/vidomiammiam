import React from 'react'
import type { LogoSliderBlock as LogoSliderBlockProps } from '@/payload-types'
import type { Media } from '@/payload-types'
import './logoSlider.scss'

export const LogoSliderBlock: React.FC<LogoSliderBlockProps> = ({
  logos,
  imageMaxHeight = 44,
  scrollSpeed = 'normal',
}) => {
  if (!logos || logos.length === 0) {
    return null
  }

  // Map speed to CSS class
  const speedClass =
    scrollSpeed === 'fast' ? 'speed-fast' : scrollSpeed === 'slow' ? 'speed-slow' : 'speed-normal'

  // Calculate how many duplications we need to fill the screen
  // Estimate: each logo takes ~150px, screen width ~1920px max
  // If we have less than 13 logos (1920/150), we need to duplicate more
  const minLogosNeeded = 15 // Enough to fill most screens
  const duplications = Math.ceil(minLogosNeeded / logos.length)

  // Create array of duplications
  const logoSets = Array.from({ length: duplications }, (_, setIndex) =>
    logos.map((item, index) => {
      const logo = item.logo as Media
      if (!logo || typeof logo === 'string') return null

      return (
        <li key={`logo-${setIndex}-${index}`}>
          <img
            src={logo.url || ''}
            alt={item.alt || logo.alt || `Logo ${index + 1}`}
            loading="lazy"
          />
        </li>
      )
    }),
  )

  return (
    <div className={`clientSlider ${speedClass} mb-5`}>
      <div className="slider-track" style={{ '--logo-max-height': `${imageMaxHeight}px` } as any}>
        <ul>{logoSets}</ul>
      </div>
    </div>
  )
}
