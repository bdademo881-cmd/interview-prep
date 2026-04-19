import type { Metadata } from 'next'
import DashboardClient from './DashboardClient'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your personalized analytics dashboard with exclusive insights and reports.',
}

export default async function DashboardPage() {
  return <DashboardClient />
}
