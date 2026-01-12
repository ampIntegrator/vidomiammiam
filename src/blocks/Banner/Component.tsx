import React from 'react'
import type { BannerBlock as BannerBlockType } from '@/payload-types'
import RichText from '@/components/RichText'

type Props = BannerBlockType & {
  className?: string
}

export const BannerBlock: React.FC<Props> = ({ className, content, style = 'info' }) => {
  const styleClasses = {
    info: 'bg-blue-100 border-blue-500 text-blue-900',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-900',
    error: 'bg-red-100 border-red-500 text-red-900',
    success: 'bg-green-100 border-green-500 text-green-900',
  }

  const selectedStyle = styleClasses[style as keyof typeof styleClasses] || styleClasses.info

  return (
    <div className={`${className || ''} border-l-4 p-4 ${selectedStyle}`}>
      {content && <RichText data={content} enableGutter={false} />}
    </div>
  )
}
