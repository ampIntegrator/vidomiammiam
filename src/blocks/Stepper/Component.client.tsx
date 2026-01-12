'use client'

import React, { useState, useRef } from 'react'
import type { StepperBlock as StepperBlockType } from '@/payload-types'
import { FormRenderer } from '@/components/FormRenderer'
import { InlineFormRenderer } from '@/components/InlineFormRenderer'
import { Media } from '@/components/Media'
import './stepper.scss'

export const StepperBlock: React.FC<StepperBlockType> = ({
  color = 'primary',
  centered = false,
  layoutElements,
  steps,
  image,
  stepperWidth = '8',
  stepperPosition = 'left',
  finalScreen,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [allFormData, setAllFormData] = useState<Record<string, any>>({})
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const imageRef = useRef<HTMLDivElement>(null)

  if (!steps || steps.length === 0) {
    return null
  }

  // Convert color to PascalCase for CSS class
  const colorValue = color || 'primary'
  const colorClass = `color${colorValue.charAt(0).toUpperCase() + colorValue.slice(1)}`

  // Calculate image column width based on stepper width
  const imageWidth = stepperWidth === '6' ? '6' : '4'

  // Generate classes for stepper
  const stepperClasses = ['stepper', 'transparent', colorClass, centered ? 'center' : '']
    .filter(Boolean)
    .join(' ')

  // Render title
  const renderTitle = () => {
    return (
      <h3 className="stepperTitle" key="title">
        {steps[activeStep]?.title}
      </h3>
    )
  }

  // Render description (only if not empty)
  const renderDescription = () => {
    const desc = steps[activeStep]?.description
    if (!desc || desc.trim() === '') return null

    return (
      <p className="stepperDesc" key="description">
        {desc}
      </p>
    )
  }

  // Render list of steps
  const renderList = () => {
    // If completed, show configured icon
    if (isCompleted) {
      const iconClass = finalScreen?.icon || 'icon-thumbs-up'
      return (
        <div className="olStepper completed p-0" key="list">
          <i className={`icon ${iconClass}`}></i>
        </div>
      )
    }

    // Normal stepper view
    return (
      <ol className="olStepper p-0" key="list">
        {steps.map((_, index) => {
          const isActive = activeStep === index

          return (
            <li key={index} className={`stepperItem ${isActive ? 'active' : ''}`}>
              <span></span>
            </li>
          )
        })}
      </ol>
    )
  }

  // Get ordered elements based on layoutElements array
  const getOrderedElements = () => {
    const elements = {
      title: renderTitle(),
      description: renderDescription(),
      list: renderList(),
    }

    // Default order if layoutElements is not set
    const defaultOrder = [{ element: 'title' }, { element: 'description' }, { element: 'list' }]

    const order = (Array.isArray(layoutElements) ? layoutElements : defaultOrder) as {
      element: string
    }[]

    return order
      .map((item) => {
        const elementType = item.element as keyof typeof elements
        return elements[elementType]
      })
      .filter(Boolean)
  }

  // Handle intermediate step validation (not submission)
  const handleStepValidation = (stepData: Record<string, any>) => {
    // Store data from this step
    setAllFormData((prev) => ({
      ...prev,
      ...stepData,
    }))

    // Move to next step
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  // Handle final form submission (last step)
  const handleFinalSubmit = async (finalStepData: Record<string, any>) => {
    // Combine all data from all steps
    const completeFormData = {
      ...allFormData,
      ...finalStepData,
    }

    // Submit all data at once
    try {
      const currentStep = steps[activeStep]

      // For formBuilder type (inline forms), we don't need a form ID
      // We'll just store the data in a generic stepper-submissions collection (or log it)
      if (currentStep.contentType === 'formBuilder') {
        // For now, we'll just mark as completed
        // You can add your own submission logic here (e.g., send to an API, store in database, etc.)
        console.log('Stepper inline form data:', completeFormData)

        setIsCompleted(true)
        alert('Formulaire soumis avec succès !')
        return
      }

      // For regular form type, use the form-submissions API
      const formId =
        currentStep.contentType === 'form' && (currentStep as any).formData
          ? (currentStep as any).formData.id
          : null

      if (!formId) {
        throw new Error('Form ID not found')
      }

      const response = await fetch(`/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: formId,
          submissionData: completeFormData,
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de la soumission du formulaire')
      }

      // Success - mark stepper as completed
      setIsCompleted(true)
      alert('Formulaire soumis avec succès !')
    } catch (error) {
      console.error('Submission error:', error)
      alert('Erreur lors de la soumission')
    }
  }

  // Render step content (text or form)
  const renderStepContent = () => {
    // If completed, show configured success message and button
    if (isCompleted) {
      const message = finalScreen?.message || 'Merci ! Votre formulaire a été soumis avec succès.'
      const buttonText = finalScreen?.buttonText
      const buttonUrl = finalScreen?.buttonUrl
      const showButton = buttonText && buttonUrl

      return (
        <div className="text-center my-5">
          <p className="text-white mb-4" style={{ whiteSpace: 'pre-line' }}>
            {message}
          </p>
          {showButton && (
            <a href={buttonUrl} className={`btn btn-${colorValue}`}>
              {buttonText}
            </a>
          )}
        </div>
      )
    }

    const isLastStep = activeStep === steps.length - 1
    const currentStep = steps[activeStep]

    if (!currentStep) {
      return <div className="text-center my-5">Aucun contenu pour cette étape</div>
    }

    // If it's a formBuilder type with inline fields
    if (currentStep.contentType === 'formBuilder' && (currentStep as any).fields) {
      return (
        <div className="my-4">
          <InlineFormRenderer
            fields={(currentStep as any).fields}
            onValidate={isLastStep ? undefined : handleStepValidation}
            onSubmitSuccess={isLastStep ? handleFinalSubmit : undefined}
            isLastStep={isLastStep}
            overrideColor={color}
            hideButtons={true}
          />
        </div>
      )
    }

    // If it's a form type and formData exists
    if (currentStep.contentType === 'form' && (currentStep as any).formData) {
      return (
        <div className="my-4">
          <FormRenderer
            form={(currentStep as any).formData}
            onValidate={isLastStep ? undefined : handleStepValidation}
            onSubmitSuccess={isLastStep ? handleFinalSubmit : undefined}
            isLastStep={isLastStep}
            overrideColor={color}
            hideButtons={true}
          />
        </div>
      )
    }

    // If it's a form type but formData doesn't exist (shouldn't happen)
    if (currentStep.contentType === 'form') {
      return <div className="alert alert-warning my-4">Formulaire non disponible</div>
    }

    // If it's a formBuilder type but no fields defined
    if (currentStep.contentType === 'formBuilder') {
      return <div className="alert alert-warning my-4">Aucun champ défini pour cette étape</div>
    }

    // Default: text content
    return (
      <div className="text-center my-5">
        {currentStep.content || 'Aucun contenu pour cette étape'}
      </div>
    )
  }

  // Render sticky image
  const renderStickyImage = () => {
    if (!image || typeof image === 'string') {
      return null
    }

    return (
      <div ref={imageRef} className="stepperStickyImage" style={{ top: '80px' }}>
        <Media resource={image} imgClassName="" />
      </div>
    )
  }

  // Render stepper content column
  const renderStepperContent = () => {
    const isFirstStep = activeStep === 0
    const isLastStep = activeStep === steps.length - 1

    // Light colors need dark text, dark colors need white text
    const lightColors = ['success', 'warning', 'info']
    const textColorClass = lightColors.includes(colorValue) ? 'text-dark' : 'text-white'

    return (
      <>
        <div className={stepperClasses}>{getOrderedElements()}</div>

        <div className="stepDetails">
          {renderStepContent()}

          {!isCompleted && (
            <div className="formFooter">
              {!isFirstStep && (
                <button
                  type="button"
                  className={`btn btn-sm btn-${colorValue} ${textColorClass}`}
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Précédent
                </button>
              )}
              {!isLastStep && (
                <button
                  type="button"
                  className={`btn btn-sm btn-${colorValue} ${textColorClass}`}
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  Suivant
                </button>
              )}
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <div className="stepperContainer">
      <div className="row g-4">
        {stepperPosition === 'left' ? (
          <>
            <div className={`col-lg-${stepperWidth}`}>{renderStepperContent()}</div>
            <div className={`col-lg-${imageWidth}`}>{renderStickyImage()}</div>
          </>
        ) : (
          <>
            <div className={`col-lg-${imageWidth}`}>{renderStickyImage()}</div>
            <div className={`col-lg-${stepperWidth}`}>{renderStepperContent()}</div>
          </>
        )}
      </div>
    </div>
  )
}
