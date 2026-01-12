'use client'
import React from 'react'

interface BlockPreviewProps {
  imagePath: string
  altText?: string
}

export const BlockPreview: React.FC<BlockPreviewProps> = ({ imagePath, altText = 'Block preview' }) => {
  console.log('BlockPreview component loaded!', { imagePath, altText })

  return (
    <div
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: '#ffeb3b',
        borderRadius: '6px',
        border: '3px solid #ff0000',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#000' }}>BLOCK PREVIEW TEST - Component is working!</h3>
      <p style={{ margin: '0 0 0.5rem 0', color: '#000' }}>Image path: {imagePath}</p>
      <img
        src={imagePath}
        alt={altText}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '4px',
          display: 'block',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  )
}
