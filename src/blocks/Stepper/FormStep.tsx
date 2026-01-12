import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FormRenderer } from '@/components/FormRenderer'
import type { Form } from '@/payload-types'

interface FormStepProps {
  formId: string | number
}

export const FormStep: React.FC<FormStepProps> = async ({ formId }) => {
  try {
    const payload = await getPayload({ config: configPromise })

    const form = await payload.findByID({
      collection: 'forms',
      id: typeof formId === 'string' ? formId : String(formId),
      depth: 2,
    })

    if (!form) {
      return <div className="alert alert-warning">Formulaire non trouvé</div>
    }

    return <FormRenderer form={form as Form} />
  } catch (error) {
    console.error('Error loading form:', error)
    return <div className="alert alert-danger">Erreur lors du chargement du formulaire</div>
  }
}
