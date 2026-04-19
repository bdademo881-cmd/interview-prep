'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)

  const publicLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact-us', label: 'Contact Us' },
  ]

  const authLinks = session
    ? [{ href: '/dashboard', label: 'Dashboard' }]
    : [{ href: '/login', label: 'Login' }]

  const allLinks = [...publicLinks, ...authLinks]

  return (
    <header
      style={{ backgroundColor: '#1a2b3a' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="BizData Analytics"
              width={120}
              height={36}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {allLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wider uppercase transition-colors"
                  style={{
                    color: active ? '#f7f7f7' : '#64839e',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            {session && (
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-sm font-medium tracking-wider uppercase transition-colors"
                style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
              >
                Sign Out
              </button>
            )}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#1a2b3a' }}>
          <nav className="flex flex-col px-6 pb-6 gap-4" aria-label="Mobile navigation">
            {allLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium tracking-wider uppercase"
                  style={{
                    color: active ? '#f7f7f7' : '#64839e',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            {session && (
              <button
                onClick={() => { setMenuOpen(false); signOut({ callbackUrl: '/' }) }}
                className="text-sm font-medium tracking-wider uppercase text-left"
                style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
              >
                Sign Out
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
