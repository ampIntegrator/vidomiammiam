import type { Metadata } from 'next/types'
import React from 'react'

export default function SandboxPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="mb-8 lg:mb-16">Sandbox</h1>

          <div className="max-w-[50rem]">
            <p>
              This is your sandbox page. You can use it to test components, features, and ideas.
            </p>

            <h2>Getting Started</h2>
            <p>
              Edit this page at <code>src/app/(frontend)/sandbox/page.tsx</code> to add your own
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Sandbox | Upto1',
    description: 'Sandbox page for testing',
  }
}
