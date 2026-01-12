'use client'

import React, { useEffect } from 'react'
import type { Header, Identity } from '@/payload-types'
import { MobileMenuNav } from './MobileMenuNav'
import './mobileMenu.scss'

interface MobileMenuProps {
  data: Header
  identity: Identity
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ data, identity, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <p className="fw-500 m-0 text-white fs-4">Menu</p>
          <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mobile-menu-body">
          {/* CTA Buttons */}
          <div className="mobile-menu-cta">
            {data.ctaButton1?.text && data.ctaButton1?.url && (
              <a
                className="btn btn-sm text-white w-100 btn-primary"
                href={data.ctaButton1.url}
              >
                {data.ctaButton1.text}
              </a>
            )}

            {data.ctaButton2?.text && data.ctaButton2?.url && (
              <a
                className="btn btn-sm text-white w-100 btn-secondary"
                href={data.ctaButton2.url}
              >
                {data.ctaButton2.text}
              </a>
            )}

            {data.ctaButton3?.text && data.ctaButton3?.url && (
              <a
                className="btn btn-sm text-white w-100 btn-primary"
                href={data.ctaButton3.url}
              >
                {data.ctaButton3.text}
              </a>
            )}
          </div>

          {/* Navigation Accordion */}
          <MobileMenuNav data={data} />
        </div>
      </div>
    </div>
  )
}
