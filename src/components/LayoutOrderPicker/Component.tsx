'use client'

import React, { useCallback } from 'react'
import { useField } from '@payloadcms/ui'
import './layoutOrderPicker.scss'

const LABELS = {
  title: 'TITRE',
  description: 'DESCRIPTION',
  list: 'ETAPES',
}

export const LayoutOrderPicker: React.FC = () => {
  const { value, setValue } = useField<Array<{ element: string }>>()

  const order = value || [{ element: 'title' }, { element: 'description' }, { element: 'list' }]

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', String(index))
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent, dropIndex: number) => {
      e.preventDefault()
      const dragIndex = parseInt(e.dataTransfer.getData('text/plain'))

      if (dragIndex === dropIndex) return

      const newOrder = [...order]
      const [removed] = newOrder.splice(dragIndex, 1)
      newOrder.splice(dropIndex, 0, removed)

      setValue(newOrder)
    },
    [order, setValue],
  )

  return (
    <div className="layoutOrderPicker">
      <label className="field-label">Ordre des éléments (glisser-déposer pour réorganiser)</label>
      <div className="dragDropZone">
        {order.map((item, index) => (
          <span
            key={item.element}
            className="dragItem"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {LABELS[item.element as keyof typeof LABELS]}
          </span>
        ))}
      </div>
    </div>
  )
}
