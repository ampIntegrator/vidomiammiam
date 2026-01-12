'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

interface HeaderNavProps {
  data: HeaderType
  mobile?: boolean
  onMenuItemHover?: (index: number | null, immediate?: boolean) => void
  onMenuClose?: () => void
  activeMenuIndex?: number | null
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, mobile = false, onMenuItemHover, onMenuClose, activeMenuIndex = null }) => {
  const navItems = data?.navItems || []

  if (mobile) {
    return (
      <ul id="topNavMobile" className="d-flex flex-column m-0 p-0">
        {navItems.map(({ link }, i) => (
          <li key={i} className="nav-item">
            <CMSLink {...link} className="text-dark" />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul id="topNavDesk" className="p-0 flexCS m-0" onMouseLeave={() => onMenuClose?.()}>
      {navItems.map(({ link, hasMegaMenu }, i) => {
        const isActive = activeMenuIndex === i && hasMegaMenu
        return (
          <li
            key={i}
            className="nav-item"
            onMouseEnter={() => {
              if (hasMegaMenu) {
                onMenuItemHover?.(i)
              } else {
                // Fermer le menu actuel si on hover un nav-link sans megaMenu
                onMenuItemHover?.(null)
              }
            }}
          >
            {hasMegaMenu ? (
              <a href={link.url || '#'} className={`nav-link ${isActive ? 'active' : ''}`}>
                {link.label}
                <i className="icon icon-chevron-down-1 ms-2 text-primary"></i>
              </a>
            ) : (
              <CMSLink {...link} className="nav-link" />
            )}
          </li>
        )
      })}
    </ul>
  )
}
