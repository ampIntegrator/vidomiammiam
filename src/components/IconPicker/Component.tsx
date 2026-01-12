'use client'

import React, { useState, useEffect } from 'react'
import { useField } from '@payloadcms/ui'
import { nucleoIcons } from '@/utilities/nucleoIcons'

export const IconPicker: React.FC = () => {
  const { value, setValue } = useField<string>()
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Load icon CSS dynamically in admin context
  useEffect(() => {
    // Check if CSS is already loaded
    const existingLink = document.getElementById('nucleo-icons-css')
    if (!existingLink) {
      const link = document.createElement('link')
      link.id = 'nucleo-icons-css'
      link.rel = 'stylesheet'
      link.href = '/fonts/icons.css' // Will be served from public or we need to copy it
      document.head.appendChild(link)
    }
  }, [])

  const filteredIcons = nucleoIcons.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelectIcon = (iconName: string) => {
    setValue(iconName)
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <>
      <style>
        {`
          .icon-picker-wrapper .icon {
            color: var(--color-gray-600);
          }
        `}
      </style>
      <div className="icon-picker-wrapper" style={{ position: 'relative' }}>
        {/* Selected Icon Display */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: '1px solid var(--color-gray-400)',
          borderRadius: '4px',
          padding: '12px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'var(--color-white)',
          marginBottom: '16px',
        }}
      >
        {value ? (
          <>
            <i className={`icon ${value}`} style={{ fontSize: '24px' }} />
            <span>{value}</span>
          </>
        ) : (
          <span style={{ color: 'var(--color-gray-500)' }}>Click to select an icon</span>
        )}
      </div>

      {/* Icon Picker Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-gray-400)',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            padding: '20px',
            maxWidth: '800px',
            width: '90vw',
            maxHeight: '80vh',
            overflow: 'auto',
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h3 style={{ margin: 0 }}>Select an Icon</h3>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '0',
                  lineHeight: '1',
                }}
              >
                ×
              </button>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search icons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--color-gray-400)',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            />
            <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--color-gray-700)' }}>
              Showing {filteredIcons.length} of {nucleoIcons.length} icons
            </div>
          </div>

          {/* Icons Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
              gap: '8px',
            }}
          >
            {filteredIcons.map((iconName) => (
              <div
                key={iconName}
                onClick={() => handleSelectIcon(iconName)}
                title={iconName}
                style={{
                  border: value === iconName ? '2px solid var(--color-primary)' : '1px solid var(--color-gray-300)',
                  borderRadius: '4px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backgroundColor: value === iconName ? 'var(--color-gray-200)' : 'var(--color-white)',
                  transition: 'all 0.2s',
                  minHeight: '60px',
                }}
                onMouseEnter={(e) => {
                  if (value !== iconName) {
                    e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'
                    e.currentTarget.style.borderColor = 'var(--color-gray-500)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (value !== iconName) {
                    e.currentTarget.style.backgroundColor = 'var(--color-white)'
                    e.currentTarget.style.borderColor = 'var(--color-gray-300)'
                  }
                }}
              >
                <i className={`icon ${iconName}`} style={{ fontSize: '32px' }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 9998,
          }}
        />
      )}
      </div>
    </>
  )
}
