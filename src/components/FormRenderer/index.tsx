'use client'

import React, { useState } from 'react'
import Select from 'react-select'
import type { Form as FormType } from '@/payload-types'

interface FormRendererProps {
  form: FormType
  className?: string
  onValidate?: (data: Record<string, any>) => void
  onSubmitSuccess?: (data: Record<string, any>) => void
  isLastStep?: boolean
  overrideColor?: string
  hideButtons?: boolean
}

export const FormRenderer: React.FC<FormRendererProps> = ({
  form,
  className = '',
  onValidate,
  onSubmitSuccess,
  isLastStep = false,
  overrideColor,
  hideButtons = false,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  if (!form || !form.fields || form.fields.length === 0) {
    return <div className="alert alert-warning">Ce formulaire n'a pas encore de champs.</div>
  }

  // Use override color from stepper, or fall back to form's mainColor
  const colorValue = overrideColor || (form as any).mainColor || 'primary'
  const colorClass = `color${colorValue.toLowerCase()}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // If this is NOT the last step in stepper, just validate and move to next
      if (onValidate && !isLastStep) {
        onValidate(formData)
        setFormData({})
        setIsSubmitting(false)
        return
      }

      // If this IS the last step in stepper, submit all data
      if (onSubmitSuccess && isLastStep) {
        onSubmitSuccess(formData)
        setSubmitSuccess(true)
        setIsSubmitting(false)
        return
      }

      // Standalone form (not in stepper) - submit directly
      const response = await fetch(`/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: form.id,
          submissionData: formData,
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({})
      } else {
        throw new Error('Erreur lors de la soumission du formulaire')
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  // Show confirmation message only for standalone forms
  if (submitSuccess && !onValidate && !onSubmitSuccess && form.confirmationMessage) {
    return (
      <div className={`form-confirmation ${className}`}>
        <div className="alert alert-success">
          {typeof form.confirmationMessage === 'string'
            ? form.confirmationMessage
            : 'Merci pour votre soumission !'}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`payload-form ${colorClass} ${className}`}>
      {form.fields.map((field: any) => {
        const fieldName = field.name || field.label?.toLowerCase().replace(/\s+/g, '-')

        switch (field.blockType) {
          case 'text':
          case 'email':
            return (
              <fieldset key={field.id} className="inputField">
                <input
                  placeholder=""
                  type={field.blockType === 'email' ? 'email' : 'text'}
                  id={fieldName}
                  name={fieldName}
                  required={field.required}
                  value={formData[fieldName] || ''}
                  onChange={(e) => handleFieldChange(fieldName, e.target.value)}
                />
                <label htmlFor={fieldName}>
                  {field.label}
                  {field.required && <span>*</span>}
                </label>
              </fieldset>
            )

          case 'textarea':
            return (
              <fieldset key={field.id} className="withText">
                <textarea
                  id={fieldName}
                  placeholder=""
                  name={fieldName}
                  required={field.required}
                  rows={4}
                  value={formData[fieldName] || ''}
                  onChange={(e) => handleFieldChange(fieldName, e.target.value)}
                />
                <label htmlFor={fieldName}>
                  {field.label}
                  {field.required && <span>*</span>}
                </label>
              </fieldset>
            )

          case 'select':
            const selectOptions =
              field.options?.map((option: any) => ({
                value: option.value,
                label: option.label,
              })) || []

            const isMultiple = (field as any).allowMultiple === true

            // For multiple select
            if (isMultiple) {
              const selectedMultiOptions = Array.isArray(formData[fieldName])
                ? selectOptions.filter((opt: any) => formData[fieldName].includes(opt.value))
                : []

              return (
                <fieldset key={field.id}>
                  <label htmlFor={fieldName}>
                    {field.label}
                    {field.required && <span>*</span>}
                  </label>
                  <Select
                    instanceId={fieldName}
                    inputId={fieldName}
                    name={fieldName}
                    options={selectOptions}
                    value={selectedMultiOptions}
                    onChange={(selected: any) => {
                      const values = selected ? selected.map((s: any) => s.value) : []
                      handleFieldChange(fieldName, values)
                    }}
                    placeholder="Sélectionner..."
                    isMulti
                    isClearable
                    closeMenuOnSelect={false}
                    classNamePrefix="react-select"
                    menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    classNames={{
                      menuPortal: () => colorClass,
                    }}
                  />
                  {field.required && (
                    <input
                      type="text"
                      value={
                        Array.isArray(formData[fieldName]) && formData[fieldName].length > 0
                          ? 'valid'
                          : ''
                      }
                      required
                      tabIndex={-1}
                      aria-hidden="true"
                      onChange={() => {}}
                    />
                  )}
                </fieldset>
              )
            }

            // For single select
            const selectedOption =
              selectOptions.find((opt: any) => opt.value === formData[fieldName]) || null

            return (
              <fieldset key={field.id}>
                <label htmlFor={fieldName}>
                  {field.label}
                  {field.required && <span>*</span>}
                </label>
                <Select
                  instanceId={fieldName}
                  inputId={fieldName}
                  name={fieldName}
                  options={selectOptions}
                  value={selectedOption}
                  onChange={(selected: any) => handleFieldChange(fieldName, selected?.value || '')}
                  placeholder="Sélectionner..."
                  isClearable={!field.required}
                  classNamePrefix="react-select"
                  menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  }}
                  classNames={{
                    menuPortal: () => colorClass,
                  }}
                />
                {field.required && (
                  <input
                    type="text"
                    value={formData[fieldName] || ''}
                    required
                    tabIndex={-1}
                    aria-hidden="true"
                    onChange={() => {}}
                  />
                )}
              </fieldset>
            )

          case 'multiselect':
            const multiselectOptions =
              field.options?.map((option: any) => ({
                value: option.value,
                label: option.label,
              })) || []

            const selectedMultiOptions = Array.isArray(formData[fieldName])
              ? multiselectOptions.filter((opt: any) => formData[fieldName].includes(opt.value))
              : []

            return (
              <fieldset key={field.id}>
                <label htmlFor={fieldName}>
                  {field.label}
                  {field.required && <span>*</span>}
                </label>
                <Select
                  instanceId={fieldName}
                  inputId={fieldName}
                  name={fieldName}
                  options={multiselectOptions}
                  value={selectedMultiOptions}
                  onChange={(selected: any) => {
                    const values = selected ? selected.map((s: any) => s.value) : []
                    handleFieldChange(fieldName, values)
                  }}
                  placeholder="Sélectionner..."
                  isMulti
                  isClearable
                  closeMenuOnSelect={false}
                  classNamePrefix="react-select"
                  menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  }}
                  classNames={{
                    menuPortal: () => colorClass,
                  }}
                />
                {field.required && (
                  <input
                    type="text"
                    value={
                      Array.isArray(formData[fieldName]) && formData[fieldName].length > 0
                        ? 'valid'
                        : ''
                    }
                    required
                    tabIndex={-1}
                    aria-hidden="true"
                    onChange={() => {}}
                  />
                )}
              </fieldset>
            )

          case 'checkbox':
            return (
              <fieldset key={field.id}>
                <div className="inputCheckBox">
                  <input
                    type="checkbox"
                    id={fieldName}
                    name={fieldName}
                    required={field.required}
                    checked={formData[fieldName] || false}
                    onChange={(e) => handleFieldChange(fieldName, e.target.checked)}
                  />
                  <label htmlFor={fieldName}>
                    {field.label}
                    {field.required && <span>*</span>}
                  </label>
                </div>
              </fieldset>
            )

          case 'number':
            return (
              <fieldset key={field.id} className="inputField">
                <input
                  type="number"
                  id={fieldName}
                  placeholder=""
                  name={fieldName}
                  required={field.required}
                  value={formData[fieldName] || ''}
                  onChange={(e) => handleFieldChange(fieldName, e.target.value)}
                />
                <label htmlFor={fieldName}>
                  {field.label}
                  {field.required && <span>*</span>}
                </label>
              </fieldset>
            )

          default:
            return null
        }
      })}

      {submitError && <div className="alert alert-danger">{submitError}</div>}

      {!hideButtons && (
        <div className="formFooter">
          <button className="btn btnSubmit" type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? 'Traitement...'
              : isLastStep
                ? form.submitButtonLabel || 'Envoyer'
                : 'Suivant'}
          </button>
        </div>
      )}
    </form>
  )
}
