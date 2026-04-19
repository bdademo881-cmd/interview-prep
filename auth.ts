import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Demo users — replace with real DB lookup in production
        const users = [
          { id: '1', email: 'admin@bizdata.com', password: 'admin123', name: 'Admin', role: 'admin' },
          { id: '2', email: 'user@bizdata.com', password: 'user123', name: 'Demo User', role: 'user' },
        ]

        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        )

        if (!user) return null
        return { id: user.id, email: user.email, name: user.name, role: user.role }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.role) {
        ;(session.user as { role?: string }).role = token.role as string
      }
      return session
    },
  },
})
