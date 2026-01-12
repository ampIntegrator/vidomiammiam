'use client'

import React, { useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

interface MobileMenuNavProps {
  data: HeaderType
}

export const MobileMenuNav: React.FC<MobileMenuNavProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const navItems = data?.navItems || []

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mobile-nav-accordion">
      {navItems.map((item, i) => {
        const hasMegaMenu = item.hasMegaMenu && item.megaMenuSlots && item.megaMenuSlots.length > 0
        const isOpen = openIndex === i
        const itemColor = item.color || 'primary'

        return (
          <div key={i} className="mobile-nav-item">
            <div className="mobile-nav-header">
              <CMSLink {...item.link} className="mobile-nav-link" />
              {hasMegaMenu && (
                <button
                  className="mobile-nav-toggle"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={isOpen}
                >
                  <i
                    className={`icon icon-chevron-down-1 ${isOpen ? 'rotate' : ''}`}
                    style={{ color: `var(--color-${itemColor})` }}
                  ></i>
                </button>
              )}
            </div>

            {hasMegaMenu && (
              <div className={`mobile-nav-submenu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-nav-submenu-content">
                  {item.megaMenuSlots?.map((slot, idx) => (
                    <div key={idx} className="mobile-nav-slot">
                      <h3
                        className="mobile-nav-slot-title"
                        style={{ color: `var(--color-${itemColor})` }}
                      >
                        {slot.title}
                      </h3>
                      <ul className="mobile-nav-slot-links">
                        {slot.links?.map((linkItem, linkIdx) => (
                          <li key={linkIdx}>
                            <a href={linkItem.url}>{linkItem.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
