import React from 'react'
import type { CallToActionBlock as CallToActionBlockType } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type Props = CallToActionBlockType & {
  className?: string
}

export const CallToActionBlock: React.FC<Props> = ({ className, links, richText }) => {
  return (
    <div className={`${className || ''} bg-gray-50 p-8 rounded-lg my-8`}>
      {richText && (
        <div className="mb-6">
          <RichText data={richText} enableGutter={false} />
        </div>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <CMSLink key={index} {...link.link} />
          ))}
        </div>
      )}
    </div>
  )
}
