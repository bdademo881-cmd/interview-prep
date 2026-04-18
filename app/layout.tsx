import type { Metadata } from 'next'
import { Quicksand, Muli } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBar from './components/CookieBar'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'],
})

const muli = Muli({
  subsets: ['latin'],
  variable: '--font-muli',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'BizData Analytics',
  description: 'Helping businesses make smarter decisions with data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${muli.variable}`}>
      <body
        style={{ fontFamily: 'Muli, sans-serif', margin: 0, backgroundColor: '#333' }}
        className="antialiased"
      >
        <Header />
        {children}
        <Footer />
        <CookieBar />
      </body>
    </html>
  )
}
