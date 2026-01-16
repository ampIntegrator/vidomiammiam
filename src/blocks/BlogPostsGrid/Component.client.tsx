'use client'

import React, { useState, useRef, useEffect } from 'react'
import type { Post } from '@/payload-types'
import Link from 'next/link'
import { formatDate } from '@/utilities/formatDate'

type Props = {
  className?: string
  title?: string
  centerTitle?: boolean
  layout?: string
  mainColor?: string
  backgroundColor?: string
  paddingTop?: string
  paddingBottom?: string
  posts: Post[]
}

export const BlogPostsGridClient: React.FC<Props> = ({
  className,
  title = 'En direct de notre blog',
  centerTitle = true,
  layout = 'normal',
  mainColor = 'primary',
  backgroundColor,
  paddingTop,
  paddingBottom,
  posts,
}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Détection du breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992) // lg breakpoint
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // IntersectionObserver pour les animations au scroll
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

  // Calcul du nombre d'items par page selon le layout et le breakpoint
  const getPostsPerPage = () => {
    if (isDesktop) {
      return layout === 'oneCol' ? 3 : 2
    } else {
      // Tablette et mobile
      const isMobile = window.innerWidth < 768
      if (layout === 'oneCol') {
        return isMobile ? 1 : 2 // 1 en mobile, 2 en tablette
      } else {
        return 1 // Format large : toujours 1 en mobile/tablette
      }
    }
  }

  const postsPerPage = getPostsPerPage()
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const startIndex = currentPage * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = posts.slice(startIndex, endIndex)

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))
  }

  // Gestion du swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!isDesktop) {
      const swipeThreshold = 50
      const diff = touchStartX.current - touchEndX.current

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next
          handleNext()
        } else {
          // Swipe right - prev
          handlePrev()
        }
      }
    }
  }

  // Capitalize first letter for CSS class
  const layoutClass = layout === 'oneCol' ? 'oneCol' : ''
  const colClass = layout === 'oneCol' ? 'col-md-6 col-lg-4' : 'col-md-6'

  return (
    <div
      className={`postsContainer ${backgroundColor || ''} ${paddingTop || ''} ${paddingBottom || ''} ${isVisible ? 'animate-in' : ''} ${className || ''}`}
    >
      <div className="container" ref={containerRef}>
        <div
          className="row g-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {title && (
            <div className="col-12">
              <h2 className={`blogGridTitle ${centerTitle ? 'text-center' : ''}`}>{title}</h2>
              <div className={`separator bg-secondary mt-2 mb-0 ${centerTitle ? 'mx-auto' : 'ms-0'}`}></div>
            </div>
          )}

          {currentPosts.map((post, index) => {
            const firstCategory =
              post.categories && post.categories.length > 0
                ? typeof post.categories[0] === 'object'
                  ? post.categories[0].title
                  : ''
                : ''

            return (
              <div key={post.id} className={`${colClass} animate-post-${index}`}>
                <div className={`blogPost ${layoutClass}`}>
                  <div className="row g-0 overflow-hidden position-relative">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="position-absolute top-0 w-100 h-100 start-0 z-3"
                      aria-label={`Lire l'article: ${post.title}`}
                    />
                    <div className="col-8 p-3">
                      <div className="flexCSB">
                        {firstCategory && (
                          <strong className="d-inline-block fz14">{firstCategory}</strong>
                        )}
                        {post.publishedAt && <small>{formatDate(post.publishedAt)}</small>}
                      </div>
                      <h3 className="postBlogTitle">
                        <span>{post.title}</span>
                      </h3>
                      {post.meta?.description && (
                        <p className="card-text mb-3">{post.meta.description}</p>
                      )}
                      <span className="voirPlus">
                        Voir plus <i className="icon icon-arrow-right"></i>
                      </span>
                    </div>
                    <div className="col-4 h-100">
                      {post.heroImage &&
                        typeof post.heroImage === 'object' &&
                        post.heroImage.url && (
                          <div
                            className="bgi"
                            style={{ backgroundImage: `url(${post.heroImage.url})` }}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {totalPages > 1 && isDesktop && (
            <div className="col-12">
              <div className="navigation">
                <button className="prev" onClick={handlePrev} disabled={currentPage === 0}>
                  <i className="icon icon-circle-arrow-left-3"></i>
                </button>
                <div className="bullets">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                      key={index}
                      className={`bullet ${index === currentPage ? 'active' : ''}`}
                      onClick={() => setCurrentPage(index)}
                    ></div>
                  ))}
                </div>
                <button
                  className="next"
                  onClick={handleNext}
                  disabled={currentPage === totalPages - 1}
                >
                  <i className="icon icon-circle-arrow-right-3"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
