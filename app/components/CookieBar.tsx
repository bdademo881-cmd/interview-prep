'use client'

import { useState } from 'react'

export default function CookieBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: '#1a2b3a' }}
    >
      <div className="max-w-[1160px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-xs leading-relaxed text-center sm:text-left"
          style={{ color: '#a4a4a4', fontFamily: 'var(--font-muli), Muli, sans-serif' }}
        >
          This website uses cookies. We use cookies to analyze website traffic and optimize your
          website experience. By accepting our use of cookies, your data will be aggregated with
          all other user data.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 text-xs font-semibold px-5 py-2 rounded transition-colors"
          style={{
            backgroundColor: '#64839e',
            color: '#fff',
            fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
