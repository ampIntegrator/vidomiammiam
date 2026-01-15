'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { TicketBoxBlock as TicketBoxBlockProps } from '@/payload-types'
import Link from 'next/link'
import './ticketBox.scss'

export const TicketBoxBlock: React.FC<TicketBoxBlockProps> = ({
  tickets,
  alignment,
  backgroundColor,
  paddingTop,
  paddingBottom,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!tickets || tickets.length === 0) {
    return null
  }

  // Determine alignment class for single ticket
  const alignmentMap = {
    left: 'justify-content-start',
    center: 'justify-content-center',
    right: 'justify-content-end',
  }

  const isSingleTicket = tickets.length === 1
  const alignmentClass = isSingleTicket
    ? alignmentMap[alignment as keyof typeof alignmentMap] || alignmentMap.left
    : ''

  return (
    <div
      ref={containerRef}
      className={`ticketContainer ${backgroundColor || ''} ${paddingTop || ''} ${paddingBottom || ''} ${isVisible ? 'animate-in' : ''} ${isSingleTicket ? 'single-ticket' : 'double-ticket'}`}
    >
      <div className={`row g-4 ${alignmentClass}`}>
        {tickets.map((ticket, index) => {
          const isLeftTicket = index === 0
          const ticketAnimationClass = isSingleTicket
            ? 'ticket-single'
            : isLeftTicket
              ? 'ticket-left'
              : 'ticket-right'

          return (
            <div key={index} className={`col-lg-6 ${ticketAnimationClass}`}>
              <Link href={ticket.link || '#'} className={`ticket p-2 flexCSB w-100`}>
                {ticket.icon && <i className={`icon ${ticket.icon} fs-2 animate-icon`}></i>}
                {ticket.text && (
                  <p className="flex-grow-1 px-3 text-left animate-text">{ticket.text}</p>
                )}
                {ticket.linkText && (
                  <span className="btn btn-outline-primary btn-sm animate-btn">
                    {ticket.linkText}
                  </span>
                )}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
