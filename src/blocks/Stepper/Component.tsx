import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { StepperBlock as StepperBlockType } from '@/payload-types'
import { StepperBlock } from './Component.client'

export const Stepper: React.FC<StepperBlockType> = async (props) => {
  const { steps } = props

  if (!steps || steps.length === 0) {
    return null
  }

  // Fetch all forms referenced in steps
  const payload = await getPayload({ config: configPromise })
  const stepsWithForms = await Promise.all(
    steps.map(async (step) => {
      if (step.contentType === 'form' && step.form) {
        try {
          const formId = typeof step.form === 'string' ? step.form : step.form.id
          const form = await payload.findByID({
            collection: 'forms',
            id: formId,
            depth: 2,
          })
          return {
            ...step,
            formData: form,
          }
        } catch (error) {
          console.error('Error loading form:', error)
          return step
        }
      }
      return step
    }),
  )

  return <StepperBlock {...props} steps={stepsWithForms} />
}
