'use client'
import React from 'react'

interface BlockLabelProps {
  title: string
  imagePath: string
}

export const BlockLabel: React.FC<BlockLabelProps> = ({ title, imagePath }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src={imagePath}
        alt={title}
        style={{
          width: '60px',
          height: '34px',
          objectFit: 'cover',
          borderRadius: '4px',
          border: '1px solid #e0e0e0',
        }}
      />
      <span>{title}</span>
    </div>
  )
}
