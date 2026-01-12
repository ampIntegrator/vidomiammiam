import React from 'react'
import type { FWImageBlock as FWImageBlockType } from '@/payload-types'
import { FWImageClient } from './Component.client'

type FWImageBlockProps = FWImageBlockType & {
  id?: string
}

export const FWImageBlock: React.FC<FWImageBlockProps> = (props) => {
  return <FWImageClient {...props} />
}
