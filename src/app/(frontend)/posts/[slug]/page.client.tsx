'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  useEffect(() => {
    // Add single-post class to body
    document.body.classList.add('single-post')

    // Cleanup: remove class when component unmounts
    return () => {
      document.body.classList.remove('single-post')
    }
  }, [])

  return <React.Fragment />
}

export default PageClient
