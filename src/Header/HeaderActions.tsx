'use client'

import React from 'react'
import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'

interface HeaderActionsProps {
  data: Header
  mobile?: boolean
  onMenuItemHover?: (index: number | null, immediate?: boolean) => void
  onMenuClose?: () => void
  activeMenuIndex?: number | null
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  data,
  mobile = false,
  onMenuItemHover,
  onMenuClose,
  activeMenuIndex,
}) => {
  const containerClass = mobile
    ? 'd-flex flex-column gap-3'
    : 'd-flex w-100 align-items-center justify-content-between flex-grow-1'

  const buttonClass = mobile ? 'btn w-100' : 'btn ms-3'

  return (
    <div className={containerClass}>
      <HeaderNav
        data={data}
        mobile={mobile}
        onMenuItemHover={onMenuItemHover}
        onMenuClose={onMenuClose}
        activeMenuIndex={activeMenuIndex}
      />

      <div className="btnGroup">
        {data.ctaButton3?.text && data.ctaButton3?.url && (
          <a className={`${buttonClass} btn-outline-primary`} href={data.ctaButton3.url}>
            {data.ctaButton3.text}
          </a>
        )}

        {data.ctaButton1?.text && data.ctaButton1?.url && (
          <a className={`${buttonClass} btn-primary text-white`} href={data.ctaButton1.url}>
            {data.ctaButton1.text}
          </a>
        )}

        {data.ctaButton2?.text && data.ctaButton2?.url && (
          <a className={`${buttonClass} btn-secondary text-white`} href={data.ctaButton2.url}>
            {data.ctaButton2.text}
          </a>
        )}
      </div>
    </div>
  )
}
