import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BizData Analytics | Data Solutions & Business Intelligence',
  description:
    'Helping businesses make smarter decisions with data. Expert data analysis, predictive modeling, AI/ML integration, and visualization services.',
  alternates: {
    canonical: 'https://interview-prep-chi-one.vercel.app',
  },
}

export default function Home() {
  const features = [
    {
      title: 'Technical Experience',
      body: 'We are well-versed in a variety of data services and solutions. We work with just about any technology that a business would encounter. We use this expertise to help customers with projects of various sizes.',
    },
    {
      title: 'High ROI',
      body: 'Do you spend most of your data solutions budget on maintaining your current system? Many companies find that constant maintenance eats into your budget for new technology. By outsourcing your data management to us, you can focus on what you do best\u2014running your business.',
    },
    {
      title: 'Satisfaction Guaranteed',
      body: "The world of technology can be fast-paced and scary. That's why our goal is to provide an experience that is tailored to your company's needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work.",
    },
  ]

  return (
    <main>
      {/* Hero with background image */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
        style={{
          minHeight: '75vh',
          paddingTop: '80px',
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundColor: '#0a1628',
        }}
        aria-labelledby="hero-heading"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,22,40,0.45)', paddingTop: '80px' }} />
        <div className="relative z-10 max-w-[66%]">
          <p
            className="text-xs font-semibold tracking-[0.167em] uppercase mb-6"
            style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
          >
            Data Solutions
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#fff', fontFamily: 'Quicksand, sans-serif' }}
          >
            BizData Analytics
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: '#b6bec9', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            Helping businesses make smarter decisions with data.
          </p>
          <p
            className="text-sm tracking-wide"
            style={{ color: '#a4a4a4', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            Business Data Analytics Solutions
          </p>
          <p
            className="text-xs mt-2"
            style={{ color: '#8899aa', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          >
            We make business data analysis accessible!
          </p>
        </div>
      </section>

      {/* About Us */}
      <section
        className="px-6 py-16 md:py-20"
        style={{ backgroundColor: '#fff' }}
        aria-labelledby="about-heading"
      >
        <div className="max-w-[1160px] mx-auto">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
          >
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((f) => (
              <article
                key={f.title}
                className="p-8 rounded"
                style={{ backgroundColor: '#f7f7f7', borderTop: '3px solid #64839e' }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#5e5e5e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
                >
                  {f.body}
                </p>
              </article>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">
            <a
              href="/services"
              className="inline-block text-xs font-semibold tracking-widest uppercase px-8 py-3 border transition-colors"
              style={{
                borderColor: '#1a2b3a',
                color: '#1a2b3a',
                fontFamily: 'Quicksand, sans-serif',
              }}
            >
              \u2014 See Services \u2014
            </a>
            <a
              href="/contact-us"
              className="inline-block text-xs font-semibold tracking-widest uppercase px-8 py-3 border transition-colors"
              style={{
                borderColor: '#1a2b3a',
                color: '#1a2b3a',
                fontFamily: 'Quicksand, sans-serif',
              }}
            >
              \u2014 Contact Us \u2014
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
