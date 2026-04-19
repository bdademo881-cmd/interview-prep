import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Data analysis, predictive modeling, AI/ML integration, and visualization services. We help you uncover insights and make better business decisions.',
  alternates: {
    canonical: 'https://interview-prep-chi-one.vercel.app/services',
  },
}

export default function Services() {
  const capabilities = [
    'Proprietary data visualization tool',
    'Experienced team with industry specific knowledge',
    'Advanced predictive modeling',
    'AI/ML integration capabilities',
  ]

  return (
    <main>
      {/* Hero with background image */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat relative"
        style={{
          minHeight: '75vh',
          paddingTop: '80px',
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundColor: '#0a1628',
        }}
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,22,40,0.45)' }} />
        <div className="relative z-10 max-w-[66%]">
          <p
            className="text-xs font-semibold tracking-[0.167em] uppercase mb-6"
            style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
          >
            What We Do
          </p>
          <h1
            id="services-hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#fff', fontFamily: 'Quicksand, sans-serif' }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Content */}
      <section
        className="px-6 py-16 md:py-20"
        style={{ backgroundColor: '#fff' }}
        aria-labelledby="services-detail-heading"
      >
        <div className="max-w-[900px] mx-auto">
          <p
            className="text-base md:text-lg leading-relaxed mb-12"
            style={{ color: '#5e5e5e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            Are you struggling to make sense of the mountains of data you collect? Our team of
            experts can help. We use the latest tools and techniques to clean and prepare your
            data, and then conduct advanced analysis to uncover valuable insights and trends.
            With our help, you&apos;ll be able to identify new opportunities, improve operational
            efficiency, and make better business decisions.
          </p>

          {/* Real-world example */}
          <aside
            className="p-8 rounded mb-12"
            style={{ backgroundColor: '#f7f7f7', borderLeft: '4px solid #64839e' }}
          >
            <p
              className="text-sm font-bold tracking-wide uppercase mb-2"
              style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
            >
              Real-world example
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: '#1a2b3a', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
            >
              We helped a retail company increase their sales by 20% by analyzing their
              customer data and identifying key buying patterns.
            </p>
          </aside>

          {/* Capabilities */}
          <h2
            id="services-detail-heading"
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
          >
            Our unique capabilities
          </h2>
          <ul className="space-y-4 mb-12">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: '#5e5e5e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
              >
                <span style={{ color: '#64839e', marginTop: '2px' }}>&#9656;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: '#1a2b3a', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            Don&apos;t let your data go to waste.{' '}
            <a
              href="/contact-us"
              className="font-semibold underline"
              style={{ color: '#64839e' }}
            >
              Contact us today
            </a>{' '}
            to schedule a free consultation and see how our data analysis services can benefit
            your business.
          </p>
        </div>
      </section>
    </main>
  )
}
