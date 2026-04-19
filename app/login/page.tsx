import type { Metadata } from 'next'
import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to access exclusive content and resources.',
}

export default function LoginPage() {
  return <LoginClient />
}
