'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginClient() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signIn('credentials', {
        email,
        password,
        redirectTo: '/dashboard',
      })
    } catch {
      setError('Invalid email or password')
      setLoading(false)
    }
  }

  return (
    <main className="flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#f7f7f7' }}>
      <div className="w-full max-w-md mx-4">
        <div className="p-8 rounded-lg" style={{ backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h1
            className="text-2xl font-bold text-center mb-2"
            style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
          >
            Welcome Back
          </h1>
          <p
            className="text-sm text-center mb-8"
            style={{ color: '#64839e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            Sign in to access exclusive content
          </p>

          {error && (
            <div
              className="p-3 rounded mb-6 text-sm text-center"
              style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}
              role="alert"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-semibold tracking-wide uppercase mb-2"
                style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded text-sm"
                style={{
                  backgroundColor: '#f7f7f7',
                  color: '#1a2b3a',
                  fontFamily: 'var(--font-mulish), Mulish, sans-serif',
                  border: '1px solid #ddd',
                  outline: 'none',
                }}
                placeholder="admin@bizdata.com"
              />
            </div>
            <div>
              <label
                htmlFor="login-password"
                className="block text-xs font-semibold tracking-wide uppercase mb-2"
                style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded text-sm"
                style={{
                  backgroundColor: '#f7f7f7',
                  color: '#1a2b3a',
                  fontFamily: 'var(--font-mulish), Mulish, sans-serif',
                  border: '1px solid #ddd',
                  outline: 'none',
                }}
                placeholder="admin123"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded transition-colors"
              style={{
                backgroundColor: loading ? '#64839e' : '#1a2b3a',
                color: '#fff',
                fontFamily: 'Quicksand, sans-serif',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div
            className="mt-8 p-4 rounded text-xs"
            style={{ backgroundColor: '#f0f5f9', color: '#5e5e5e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            <p className="font-semibold mb-1" style={{ color: '#1a2b3a' }}>Demo Accounts:</p>
            <p>Admin: admin@bizdata.com / admin123</p>
            <p>User: user@bizdata.com / user123</p>
          </div>
        </div>
      </div>
    </main>
  )
}
