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
      <pre
        style={{
          backgroundColor: 'var(--color-black)',
          color: 'var(--color-light)',
          padding: '1rem',
          borderRadius: '0px',
          overflowX: 'auto',
          border: '1px solid var(--post-main-color)',
          margin: '1.5rem 0',
        }}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
