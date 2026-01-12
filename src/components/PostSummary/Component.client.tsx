'use client'

import React, { useEffect, useState } from 'react'
import '@/components/PostSummary/postSummary.scss'

interface HeadingItem {
  id: string
  text: string
  level: number
}

interface PostSummaryProps {}

export const PostSummary: React.FC<PostSummaryProps> = () => {
  const mainColor = 'primary'
  const [headings, setHeadings] = useState<HeadingItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract h2, h3, h4 from the article content
    const article = document.querySelector('.postContent')
    if (!article) return

    const headingElements = article.querySelectorAll('h2, h3, h4')
    const headingData: HeadingItem[] = []

    headingElements.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      let id = heading.id

      // If heading doesn't have an id, create one
      if (!id) {
        id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        heading.id = id
      }

      headingData.push({ id, text, level })
    })

    setHeadings(headingData)

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -80% 0px',
      },
    )

    headingElements.forEach((heading) => {
      observer.observe(heading)
    })

    return () => {
      headingElements.forEach((heading) => {
        observer.unobserve(heading)
      })
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
      setActiveId(id)
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="summaryBox" data-main-color={mainColor}>
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          onClick={(e) => handleClick(e, heading.id)}
          className={`summaryLink ${activeId === heading.id ? 'active' : ''} level-${heading.level}`}
        >
          {heading.text}
        </a>
      ))}
    </div>
  )
}
