'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ backgroundColor: '#333' }}>
      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '75vh', paddingTop: '80px' }}
      >
        <div className="max-w-[66%]">
          <p
            className="text-xs font-semibold tracking-[0.167em] uppercase mb-6"
            style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
          >
            Get In Touch
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#fff', fontFamily: 'Quicksand, sans-serif' }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-16 md:py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-[900px] mx-auto">
          <p
            className="text-base md:text-lg leading-relaxed mb-12"
            style={{ color: '#5e5e5e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            Let us tailor a service package that meets your needs. Tell us a little about your
            business, and we will get back to you with some ideas as soon as possible.
          </p>

          {submitted ? (
            <div
              className="p-8 rounded text-center"
              style={{ backgroundColor: '#f7f7f7', borderTop: '3px solid #64839e' }}
            >
              <p
                className="text-lg font-bold mb-2"
                style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
              >
                Thank you!
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#5e5e5e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
              >
                We have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-[600px]">
              <div>
                <label
                  className="block text-xs font-semibold tracking-wide uppercase mb-2"
                  style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded text-sm"
                  style={{
                    backgroundColor: '#f7f7f7',
                    color: '#1a2b3a',
                    fontFamily: 'var(--font-mulish), Mulish, sans-serif',
                    border: '1px solid #ddd',
                    outline: 'none',
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold tracking-wide uppercase mb-2"
                  style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded text-sm"
                  style={{
                    backgroundColor: '#f7f7f7',
                    color: '#1a2b3a',
                    fontFamily: 'var(--font-mulish), Mulish, sans-serif',
                    border: '1px solid #ddd',
                    outline: 'none',
                  }}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold tracking-wide uppercase mb-2"
                  style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded text-sm resize-none"
                  style={{
                    backgroundColor: '#f7f7f7',
                    color: '#1a2b3a',
                    fontFamily: 'var(--font-mulish), Mulish, sans-serif',
                    border: '1px solid #ddd',
                    outline: 'none',
                  }}
                  placeholder="Tell us about your business..."
                />
              </div>
              <button
                type="submit"
                className="text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded transition-colors"
                style={{
                  backgroundColor: '#1a2b3a',
                  color: '#fff',
                  fontFamily: 'Quicksand, sans-serif',
                }}
              >
                Send Message
              </button>
            </form>
          )}

          {/* Hours */}
          <div
            className="mt-16 p-8 rounded"
            style={{ backgroundColor: '#f7f7f7' }}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
            >
              Hours
            </h2>
            <div
              className="space-y-1 text-sm"
              style={{ color: '#5e5e5e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
            >
              <p>Monday – Friday: 9am – 5pm</p>
              <p>Saturday – Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
