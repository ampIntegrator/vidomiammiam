'use client'

import React, { useState } from 'react'
import Select from 'react-select'

interface InlineFormRendererProps {
  fields: any[]
  className?: string
  onValidate?: (data: Record<string, any>) => void
  onSubmitSuccess?: (data: Record<string, any>) => void
  isLastStep?: boolean
  overrideColor?: string
  hideButtons?: boolean
}

export const InlineFormRenderer: React.FC<InlineFormRendererProps> = ({
  fields,
  className = '',
  onValidate,
  onSubmitSuccess,
  isLastStep = false,
  overrideColor = 'primary',
  hideButtons = false,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  if (!fields || fields.length === 0) {
    return <div className="alert alert-warning">Aucun champ défini pour cette étape.</div>
  }

  const colorClass = `color${overrideColor.toLowerCase()}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // If this is NOT the last step, just validate and move to next
      if (onValidate && !isLastStep) {
        onValidate(formData)
        setFormData({})
        setIsSubmitting(false)
        return
      }

      // If this IS the last step, submit all data
      if (onSubmitSuccess && isLastStep) {
        onSubmitSuccess(formData)
        setIsSubmitting(false)
        return
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

  return (
    <form onSubmit={handleSubmit} className={`payload-form ${colorClass} ${className}`}>
      {fields.map((field: any) => {
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

            const isMultiple = field.allowMultiple === true

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
                      style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
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
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
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
            {isSubmitting ? 'Traitement...' : isLastStep ? 'Envoyer' : 'Suivant'}
          </button>
        </div>
      )}
    </form>
  )
}
