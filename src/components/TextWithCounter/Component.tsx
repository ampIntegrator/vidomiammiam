'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'

export const TextWithCounter100: React.FC = () => {
  const { value, setValue } = useField<string>()
  const maxLength = 100
  const currentLength = value?.length || 0
  const remaining = maxLength - currentLength

  return (
    <div>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => {
          if (e.target.value.length <= maxLength) {
            setValue(e.target.value)
          }
        }}
        maxLength={maxLength}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '14px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <div
        style={{
          fontSize: '12px',
          marginTop: '4px',
          color: remaining < 20 ? '#ff0066' : '#666',
        }}
      >
        {currentLength} / {maxLength} caractères
        {remaining < 20 && ` (${remaining} restants)`}
      </div>
    </div>
  )
}

export const TextWithCounter90: React.FC = () => {
  const { value, setValue } = useField<string>()
  const maxLength = 90
  const currentLength = value?.length || 0
  const remaining = maxLength - currentLength

  return (
    <div>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => {
          if (e.target.value.length <= maxLength) {
            setValue(e.target.value)
          }
        }}
        maxLength={maxLength}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '14px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <div
        style={{
          fontSize: '12px',
          marginTop: '4px',
          color: remaining < 20 ? '#ff0066' : '#666',
        }}
      >
        {currentLength} / {maxLength} caractères
        {remaining < 20 && ` (${remaining} restants)`}
      </div>
    </div>
  )
}
