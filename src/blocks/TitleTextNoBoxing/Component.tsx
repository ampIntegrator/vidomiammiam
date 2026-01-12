import React from 'react'
import type { TitleTextNoBoxingBlock as TitleTextNoBoxingBlockProps } from '@/payload-types'
import { TitleTextNoBoxingClientBlock } from './Component.client'
import './titleTextNoBoxing.scss'

export const TitleTextNoBoxingBlock: React.FC<TitleTextNoBoxingBlockProps> = (props) => {
  // Use client component with animations
  return <TitleTextNoBoxingClientBlock {...props} />
}
