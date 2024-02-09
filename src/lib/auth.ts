import db from '@/db'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import * as schema from '@/db/schema'
import { sql } from 'drizzle-orm'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'mail@google.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const existingUserByEmail = await db
          .select()
          .from(schema.users)
          .where(sql`email = ${credentials?.email}`)

        if (!existingUserByEmail) {
          return null
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          existingUserByEmail[0].password_hash
        )

        if (!passwordMatch) {
          return null
        }

        return {
          id: `${existingUserByEmail[0].id}`,
          email: existingUserByEmail[0].email,
          username: existingUserByEmail[0].username,
          role: existingUserByEmail[0].role
        }
      }
    })
  ],
  callbacks: {
    async jwt ({token, user}) {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.username,
          role: user.role
        }
      }
      return token
    },
    async session ({session, token}) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          role: token.role,
          id: token.id
        }
      }
      return session
    }
  }
}
