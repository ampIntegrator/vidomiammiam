'use client'
import React from 'react'
import './stepper.css'

export interface StepperProps {
  steps: string[]
  currentStep: number
  className?: string
  variant?: 'default' | 'transparent' | 'center'
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  className = '',
  variant = 'default',
}) => {
  const variantClass =
    variant === 'transparent' ? 'transparent' : variant === 'center' ? 'center' : ''

  return (
    <div className={`stepper ${variantClass} ${className}`}>
      <ol className="olStepper">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`stepperItem ${index < currentStep ? 'active' : ''}`}
            aria-current={index === currentStep - 1 ? 'step' : undefined}
          >
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
