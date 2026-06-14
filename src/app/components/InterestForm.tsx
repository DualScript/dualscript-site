'use client'

import { useState } from 'react'

export default function InterestForm() {
  const [email, setEmail] = useState('')
  const [product, setProduct] = useState('general')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return
    setStatus('loading')

    const res = await fetch('/api/interest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, product }),
    })

    if (res.ok) {
      setStatus('success')
      setEmail('')
    } else if (res.status === 409) {
      setStatus('duplicate')
    } else {
      setStatus('error')
    }
  }

  return (
    <div style={{
      maxWidth: '520px',
      width: '100%',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      {status === 'success' ? (
        <div style={{
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          border: '1px solid var(--accent-dim)',
          background: 'var(--accent-glow)',
          color: 'var(--accent)',
          fontSize: '14px',
          fontFamily: 'var(--mono)',
        }}>
          You&apos;re on the list.
        </div>
      ) : (
        <>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text)',
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-inter)',
          }}>
            Stay in the loop.
          </h2>
          <p style={{
            fontSize: '14px',
            fontWeight: 300,
            color: 'var(--muted)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            fontFamily: 'var(--mono)',
          }}>
            Let us know what you are interested in.
            No spam, just updates when something ships.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--text)',
                fontSize: '14px',
                fontFamily: 'var(--mono)',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-dim)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--muted)',
                fontSize: '14px',
                fontFamily: 'var(--mono)',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
              }}
            >
              <option value="general" style={{ background: '#080d14' }}>General interest</option>
              <option value="stencilmind" style={{ background: '#080d14' }}>StencilMind</option>
              <option value="trading" style={{ background: '#080d14' }}>Trading System</option>
              <option value="fieldservice" style={{ background: '#080d14' }}>Field Service SaaS</option>
            </select>
            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--accent-dim)',
                background: 'var(--accent-glow)',
                color: 'var(--accent)',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--mono)',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.6 : 1,
                transition: 'background 0.2s, border-color 0.2s',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = 'rgba(62,207,255,0.12)'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = 'var(--accent-glow)'
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Notify me'}
            </button>
            {status === 'duplicate' && (
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
                You are already on the list.
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontSize: '13px', color: '#ff6b6b', fontFamily: 'var(--mono)' }}>
                Something went wrong. Try again.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  )
}
