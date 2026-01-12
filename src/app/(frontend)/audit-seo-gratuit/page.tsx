import React from 'react'
import { SeoAuditForm } from '@/components/SeoAuditForm'

export const metadata = {
  title: 'Audit SEO Gratuit | Diagnostic Personnalisé | Upto1',
  description:
    'Obtenez votre audit SEO gratuit et personnalisé en 5 minutes. Score de maturité digitale, quick wins, et plan d\'action détaillé pour booster vos performances.',
}

export default function AuditSeoGratuitPage() {
  return (
    <div className="container py-16">
      <SeoAuditForm />
    </div>
  )
}
