'use client'

import React, { useState } from 'react'

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Une erreur est survenue')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="m-0">
      <p className="fs-5">Inscrivez vous à notre newsletter!</p>
      <div className="d-flex">
        <fieldset className="flex-grow-1 m-0">
          <input
            className="inputFooter"
            type="email"
            placeholder="Votre courriel"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            required
          />
        </fieldset>
        <button
          type="submit"
          className="ms-4 btn btn-outline-primary rounded-0 flex-shrink-0"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Envoi...' : "S'inscrire"}
        </button>
      </div>
      {message && (
        <p className={`mt-2 mb-0 ${status === 'success' ? 'text-success' : 'text-danger'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
