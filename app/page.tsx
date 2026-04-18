'use client'

import { useState } from 'react'

export default function Home() {
  const [cookieAccepted, setCookieAccepted] = useState(false)

  const features = [
    {
      title: 'Technical Experience',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      body: 'We are well-versed in a variety of data services and solutions. We work with just about any technology that a business would encounter. We use this expertise to help customers with projects of various sizes.',
    },
    {
      title: 'High ROI',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      body: 'Do you spend most of your data solutions budget on maintaining your current system? Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your data management to us, you can focus on what you do best—running your business.',
    },
    {
      title: 'Satisfaction Guaranteed',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      body: 'The world of technology can be fast-paced and scary. That\'s why our goal is to provide an experience that is tailored to your company\'s needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work.',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Data Solutions
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            BizData Analytics
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Helping businesses make smarter decisions with data.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-xs text-gray-400">
        <p>Copyright © 2022 BizData Analytics SOLUTIONS INC. - All Rights Reserved.</p>
      </footer>

      {/* Cookie Notice */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-gray-300 text-xs px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 z-50">
          <p>
            This website uses cookies. We use cookies to analyze website traffic and optimize your
            website experience. By accepting our use of cookies, your data will be aggregated with
            all other user data.
          </p>
          <button
            onClick={() => setCookieAccepted(true)}
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded transition-colors"
          >
            Accept
          </button>
        </div>
      )}
    </main>
  )
}
