'use client'
import { useEffect } from 'react'

export const AdminBlocksCSS = () => {
  useEffect(() => {
    console.log('🎨 AdminBlocksCSS: Injecting CSS...')

    // Injecter le CSS pour les previews des blocs
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/admin-blocks-preview.css'
    link.onload = () => {
      console.log('✅ AdminBlocksCSS: CSS loaded successfully')
    }
    link.onerror = () => {
      console.error('❌ AdminBlocksCSS: Failed to load CSS')
    }
    document.head.appendChild(link)

    console.log('📍 AdminBlocksCSS: CSS link added to head')

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link)
        console.log('🗑️ AdminBlocksCSS: CSS removed from head')
      }
    }
  }, [])

  return null
}
