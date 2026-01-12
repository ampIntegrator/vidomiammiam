import React from 'react'
import { SeoAuditForm } from '@/components/SeoAuditForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit SEO Gratuit - Formulaire | Upto1',
  description: 'Demandez votre audit SEO gratuit en 5 étapes. Recevez une analyse complète de votre site web dans les 60 minutes.',
}

export default function AuditFormPage() {
  return (
    <article className="pt-16 pb-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Demandez votre audit SEO gratuit
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Complétez ce formulaire en 5 étapes pour recevoir une analyse SEO personnalisée de votre site web.
            Livraison par email en ~60 minutes.
          </p>
        </div>

        <SeoAuditForm />
      </div>
    </article>
  )
}
