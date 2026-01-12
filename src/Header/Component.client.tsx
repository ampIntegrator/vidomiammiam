'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Identity } from '@/payload-types'

import { HeaderActions } from './HeaderActions'
import { MobileMenu } from './MobileMenu'
import './header.scss'

interface HeaderClientProps {
  data: Header
  identity: Identity
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, identity }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [bannerClosed, setBannerClosed] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  const handleMenuItemHover = (index: number | null) => {
    if (activeMenuIndex !== null && index !== null && index !== activeMenuIndex) {
      // Fermer d'abord, puis ouvrir le nouveau (transition entre deux menus différents)
      setIsTransitioning(true)
      setActiveMenuIndex(null)
      setTimeout(() => {
        setActiveMenuIndex(index)
        setIsTransitioning(false)
      }, 200)
    } else {
      // Ouvrir, fermer, ou rester sur le même
      setActiveMenuIndex(index)
    }
  }

  const handleMenuClose = () => {
    setActiveMenuIndex(null)
  }

  // Check if banner should be visible based on dates
  const isBannerInDateRange = () => {
    if (!data.banner?.enabled) return false

    const now = new Date()
    const startDate = data.banner.startDate ? new Date(data.banner.startDate) : null
    const endDate = data.banner.endDate ? new Date(data.banner.endDate) : null

    if (startDate && now < startDate) return false
    if (endDate && now > endDate) return false

    return true
  }

  // Auto-close banner after specified seconds
  useEffect(() => {
    if (
      data.banner?.enabled &&
      data.banner.autoCloseAfter &&
      data.banner.autoCloseAfter > 0 &&
      !bannerClosed &&
      isBannerInDateRange()
    ) {
      const timer = setTimeout(() => {
        setBannerClosed(true)
      }, data.banner.autoCloseAfter * 1000)

      return () => clearTimeout(timer)
    }
  }, [data.banner, bannerClosed])

  // Force open "Services" menu on mount
  useEffect(() => {
    const servicesIndex = data.navItems?.findIndex((item) =>
      item.link?.label?.toLowerCase().includes('service'),
    )
    if (servicesIndex !== undefined && servicesIndex !== -1) {
      setActiveMenuIndex(servicesIndex)
    }
  }, [data.navItems])

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Scroll detection for is-scrolled class (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      // Only apply is-scrolled on desktop (xl breakpoint = 1200px)
      const isDesktop = window.innerWidth >= 1200

      if (!isDesktop) {
        setIsScrolled(false)
        document.body.classList.remove('is-scrolled')
        return
      }

      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      const scrolled = scrollPosition > 15

      setIsScrolled(scrolled)

      if (scrolled) {
        document.body.classList.add('is-scrolled')
      } else {
        document.body.classList.remove('is-scrolled')
      }
    }

    const handleResize = () => {
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header
        {...(theme ? { 'data-theme': theme } : {})}
        className={`${isScrolled ? 'is-scrolled' : ''} ${activeMenuIndex !== null && data.navItems?.[activeMenuIndex]?.megaMenuSlots ? 'sub-is-open' : ''}`}
      >
        {isBannerInDateRange() && !bannerClosed && data.banner && (
          <div id="banniere" className="bg-secondary">
            <div className="container d-flex justify-content-between">
              <div className="banniere d-flex">
                {data.banner.icon && <i className={`text-white icon ${data.banner.icon}`}></i>}
                {data.banner.text && <p className="m-0">{data.banner.text}</p>}
              </div>
              <div className="ctaBanniere">
                {data.banner.buttonText && data.banner.buttonUrl && (
                  <a href={data.banner.buttonUrl} className="btn btn-sm btn-primary text-white">
                    {data.banner.buttonText}
                  </a>
                )}
                <button
                  className="btn btn-link p-0"
                  id="closerBanner"
                  onClick={() => setBannerClosed(true)}
                >
                  <i className="text-white icon icon-xmark-1"></i>
                </button>
              </div>
            </div>
          </div>
        )}
        <nav className="container navbar">
          <div className="top">
            <Link className="navbar-brand fw-bold me-3 p-0" href="/">
              {identity.logo && typeof identity.logo === 'object' && 'url' in identity.logo && (
                <img
                  className="logo me-2"
                  src={identity.logo.url || ''}
                  alt={identity.logo.alt || identity.siteName || 'Logo'}
                />
              )}
              {identity.siteName && <span className="position-relative">{identity.siteName}</span>}
            </Link>

            <HeaderActions
              data={data}
              onMenuItemHover={handleMenuItemHover}
              onMenuClose={handleMenuClose}
              activeMenuIndex={activeMenuIndex}
            />

            <button
              id="menuToggler"
              className="d-block d-xl-none p-2 rounded-2"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="bg-primary"></div>
              <div className="bg-primary"></div>
              <div className="bg-primary"></div>
            </button>
          </div>

          <div
            className={`underMenu ${
              activeMenuIndex !== null &&
              data.navItems?.[activeMenuIndex]?.megaMenuSlots &&
              !isTransitioning
                ? 'open'
                : ''
            }`}
            onMouseEnter={() => {
              // Rester sur le menu actif quand on entre dans le sous-menu
              if (activeMenuIndex !== null) {
                handleMenuItemHover(activeMenuIndex)
              }
            }}
            onMouseLeave={handleMenuClose}
          >
            <div className="subMenuBorder"></div>
            {activeMenuIndex !== null &&
              data.navItems?.[activeMenuIndex]?.megaMenuSlots &&
              (() => {
                const activeItem = data.navItems?.[activeMenuIndex]
                if (!activeItem) return null
                return (
                  <div className="row g-4">
                    <div className="col-lg-7">
                      <div className="row g-5">
                        {activeItem.megaMenuSlots?.slice(0, 2).map((slot, idx) => (
                          <div key={idx} className="col-6">
                            <div className="mt-2">
                              <h3 className="subMenuTitle">{slot.title}</h3>
                              <ul>
                                {slot.links?.map((linkItem, linkIdx) => (
                                  <li key={linkIdx}>
                                    <a href={linkItem.url}>
                                      <i className={`icon ${linkItem.icon}`}></i>
                                      <div>
                                        <strong>{linkItem.label}</strong>
                                        <span>{linkItem.description}</span>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div id="pushedContent" className="col-lg-5">
                      {activeItem.featuredPost && typeof activeItem.featuredPost === 'object' ? (
                        <div className="slot slot04">
                          <div className="pushedPost">
                            <a
                              href={`/posts/${activeItem.featuredPost.slug}`}
                              className="position-absolute w-100 d-block h-100"
                              style={{ zIndex: 1 }}
                            />
                            <div
                              className="bgi h160 mb-3 rounded-3 overflow-hidden"
                              style={{
                                backgroundImage:
                                  activeItem.featuredPost.heroImage &&
                                  typeof activeItem.featuredPost.heroImage === 'object'
                                    ? `url(${activeItem.featuredPost.heroImage.url})`
                                    : 'url(/media/todd-kent-178j8tJrNlc-unsplash-600x400.jpg)',
                              }}
                            ></div>
                            <h3 className="subMenuTitle mb-3">{activeItem.featuredPost.title}</h3>
                            <span className="flexCSB">
                              Voir plus <i className="icon icon-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="slot slot04">
                          <div
                            className="bgi h160 mb-3 rounded-3 overflow-hidden"
                            style={{
                              backgroundImage:
                                'url(/media/todd-kent-178j8tJrNlc-unsplash-600x400.jpg)',
                            }}
                          ></div>
                          <h3 className="subMenuTitle mb-3">
                            Ceci est un article dans le megamenu bien visible
                          </h3>
                          <a href="#" className="btn btn-primary">
                            En savoir plus
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })()}
          </div>
        </nav>
      </header>

      <MobileMenu
        data={data}
        identity={identity}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
