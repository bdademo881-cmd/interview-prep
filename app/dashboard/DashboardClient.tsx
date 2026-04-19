'use client'

import { useSession, signOut } from 'next-auth/react'

const stats = [
  { label: 'Reports Generated', value: '1,247', change: '+12%' },
  { label: 'Data Sources', value: '38', change: '+3' },
  { label: 'Active Models', value: '12', change: '+2' },
  { label: 'Accuracy Rate', value: '94.7%', change: '+1.2%' },
]

const recentReports = [
  { name: 'Q1 Revenue Analysis', date: 'Apr 15, 2026', status: 'Complete' },
  { name: 'Customer Segmentation', date: 'Apr 12, 2026', status: 'Complete' },
  { name: 'Predictive Sales Model', date: 'Apr 10, 2026', status: 'In Progress' },
  { name: 'Market Trend Report', date: 'Apr 8, 2026', status: 'Complete' },
  { name: 'Churn Rate Analysis', date: 'Apr 5, 2026', status: 'Complete' },
]

const insights = [
  { title: 'Customer Acquisition Cost dropped 15% after optimizing ad spend allocation.', category: 'Marketing' },
  { title: 'Product line A shows 23% higher margin than expected in West region.', category: 'Sales' },
  { title: 'Support ticket volume correlates strongly with release cadence (r=0.87).', category: 'Operations' },
  { title: 'Weekend traffic surged 40% after the new mobile UX launch.', category: 'Product' },
]

export default function DashboardClient() {
  const { data: session } = useSession()

  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            <h1
              className="text-3xl font-bold"
              style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
            >
              Dashboard
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: '#64839e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
            >
              Welcome back, {session?.user?.name || 'User'}
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-xs font-semibold tracking-wider uppercase px-6 py-2 border rounded transition-colors"
            style={{
              borderColor: '#1a2b3a',
              color: '#1a2b3a',
              fontFamily: 'Quicksand, sans-serif',
            }}
          >
            Sign Out
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded"
              style={{ backgroundColor: '#fff', borderTop: '3px solid #64839e' }}
            >
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-1"
                style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
              >
                {s.label}
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
              >
                {s.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: '#2d8a4e', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
              >
                {s.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Reports */}
          <section
            className="p-6 rounded"
            style={{ backgroundColor: '#fff' }}
            aria-labelledby="reports-heading"
          >
            <h2
              id="reports-heading"
              className="text-lg font-bold mb-4"
              style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
            >
              Recent Reports
            </h2>
            <div className="space-y-3">
              {recentReports.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: '1px solid #f0f0f0' }}
                >
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: '#1a2b3a', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
                    >
                      {r.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: '#999', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
                    >
                      {r.date}
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: r.status === 'Complete' ? '#e8f5e9' : '#fff3e0',
                      color: r.status === 'Complete' ? '#2d8a4e' : '#e65100',
                      fontFamily: 'Quicksand, sans-serif',
                    }}
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* AI Insights */}
          <section
            className="p-6 rounded"
            style={{ backgroundColor: '#fff' }}
            aria-labelledby="insights-heading"
          >
            <h2
              id="insights-heading"
              className="text-lg font-bold mb-4"
              style={{ color: '#1a2b3a', fontFamily: 'Quicksand, sans-serif' }}
            >
              AI-Powered Insights
            </h2>
            <div className="space-y-4">
              {insights.map((ins, i) => (
                <div
                  key={i}
                  className="p-4 rounded"
                  style={{ backgroundColor: '#f7f7f7', borderLeft: '3px solid #64839e' }}
                >
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mb-1"
                    style={{ color: '#64839e', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {ins.category}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#1a2b3a', fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
                  >
                    {ins.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
