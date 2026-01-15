import React from 'react'

export type CodeBlockProps = {
  className?: string
  code?: string
  language?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  code,
  language = 'javascript',
}) => {
  return (
    <div className={className || ''}>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
