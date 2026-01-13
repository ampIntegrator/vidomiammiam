'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { Page } from '@/payload-types'

import './fullScreenHero.scss'

type FullScreenHeroProps = {
  backgroundMedia?: Page['hero']['backgroundMedia']
  title?: string
  description?: string
  primaryButton?: Page['hero']['primaryButton']
  secondaryButton?: Page['hero']['secondaryButton']
}

export const FullScreenHero: React.FC<FullScreenHeroProps> = ({
  backgroundMedia,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  const showPrimaryButton = primaryButton?.enabled && primaryButton?.text && primaryButton?.link
  const showSecondaryButton =
    secondaryButton?.enabled && secondaryButton?.text && secondaryButton?.link

  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleScrollClick = () => {
    console.log('Scroll button clicked!')
    // Scroll to the height of the fullscreen section (100vh)
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Add class to body on mount
    document.body.classList.add('with-heroFW')

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

      if (scrollPosition > 70) {
        document.body.classList.remove('with-heroFW')
      } else {
        document.body.classList.add('with-heroFW')
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Cleanup
    return () => {
      document.body.classList.remove('with-heroFW')
      window.removeEventListener('scroll', handleScroll)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Determine if media is video or image
  const isVideo =
    backgroundMedia &&
    typeof backgroundMedia === 'object' &&
    backgroundMedia.mimeType?.includes('video')
  const isImage =
    backgroundMedia &&
    typeof backgroundMedia === 'object' &&
    !backgroundMedia.mimeType?.includes('video')

  // Get background image URL for CSS
  const backgroundImageStyle =
    isImage && typeof backgroundMedia === 'object'
      ? { backgroundImage: `url(/media/${backgroundMedia.filename})` }
      : {}

  return (
    <>
      {/* Add body class immediately before React hydration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.body.classList.add('with-heroFW');`,
        }}
      />
      <section
        ref={sectionRef}
        className={`fullScreenTop ${isVisible ? 'animate-in' : ''}`}
        style={backgroundImageStyle}
      >
        {isVideo && typeof backgroundMedia === 'object' && (
          <video autoPlay loop muted playsInline>
            <source src={`/media/${backgroundMedia.filename}`} />
          </video>
        )}
        <div className="container">
          <div className="row g-0 justify-content-center">
            <div className="col-lg-8 text-center">
              {title && <h1 className="pageTitle animate-title">{title}</h1>}
              {description && <p className="animate-text">{description}</p>}
              {(showPrimaryButton || showSecondaryButton) && (
                <div className="btn-group animate-cta">
                  {showPrimaryButton &&
                    primaryButton?.link &&
                    (() => {
                      const href =
                        primaryButton.link.type === 'reference' &&
                        typeof primaryButton.link.reference?.value === 'object' &&
                        primaryButton.link.reference.value.slug
                          ? `${primaryButton.link.reference.relationTo !== 'pages' ? `/${primaryButton.link.reference.relationTo}` : ''}/${primaryButton.link.reference.value.slug}`
                          : primaryButton.link.url || '#'

                      const linkProps = primaryButton.link.newTab
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {}

                      return (
                        <Link href={href} className="btn btn-primary" {...linkProps}>
                          {primaryButton.text}
                        </Link>
                      )
                    })()}
                  {showSecondaryButton &&
                    secondaryButton?.link &&
                    (() => {
                      const href =
                        secondaryButton.link.type === 'reference' &&
                        typeof secondaryButton.link.reference?.value === 'object' &&
                        secondaryButton.link.reference.value.slug
                          ? `${secondaryButton.link.reference.relationTo !== 'pages' ? `/${secondaryButton.link.reference.relationTo}` : ''}/${secondaryButton.link.reference.value.slug}`
                          : secondaryButton.link.url || '#'

                      const linkProps = secondaryButton.link.newTab
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {}

                      return (
                        <Link href={href} className="btn btn-secondary" {...linkProps}>
                          {secondaryButton.text}
                        </Link>
                      )
                    })()}
                </div>
              )}
            </div>
          </div>
        </div>
        <button id="scroller" onClick={handleScrollClick}>
          {/* <i className="icon icon-arrow-bold-down"></i> */}
          <i className="icon icon-double-chevron-down"></i>
        </button>
      </section>
    </>
  )
}
