import type { Metadata } from 'next'
import { Quicksand, Mulish } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBar from './components/CookieBar'
import AuthProvider from './components/AuthProvider'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'],
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  weight: ['400', '600'],
})

const siteUrl = 'https://interview-prep-chi-one.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'BizData Analytics | Data Solutions & Business Intelligence',
    template: '%s | BizData Analytics',
  },
  description:
    'Helping businesses make smarter decisions with data. Expert data analysis, predictive modeling, AI/ML integration, and visualization services.',
  keywords: [
    'data analytics',
    'business intelligence',
    'data solutions',
    'predictive modeling',
    'AI ML integration',
    'data visualization',
  ],
  openGraph: {
    title: 'BizData Analytics | Data Solutions & Business Intelligence',
    description:
      'Helping businesses make smarter decisions with data. Expert data analysis, predictive modeling, and AI/ML integration.',
    url: siteUrl,
    siteName: 'BizData Analytics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizData Analytics | Data Solutions & Business Intelligence',
    description:
      'Helping businesses make smarter decisions with data. Expert data analysis, predictive modeling, and AI/ML integration.',
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BizData Analytics',
    url: siteUrl,
    description:
      'Helping businesses make smarter decisions with data. Expert data analysis, predictive modeling, and AI/ML integration.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  }

  return (
    <html lang="en" className={`${quicksand.variable} ${mulish.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-mulish), Mulish, sans-serif',
          margin: 0,
          backgroundColor: '#333',
        }}
      >
        <AuthProvider>
          <Header />
          {children}
          <Footer />
          <CookieBar />
        </AuthProvider>
      </body>
    </html>
  )
}
