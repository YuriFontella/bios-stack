import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { LOGIN, AUTH } from '@/src/graphql/queries'

import { graphQLClient } from '@/src/graphql/client'

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
      state: false
    }),

    Providers.Credentials({
      name: 'Credentials',
      authorize: async ({ email, password }) => {

        const variables = { email, password }

        try {

          const { data } = await graphQLClient.request({ query: LOGIN, variables })

          if (data.auth.user)
            return data.auth

        } catch (e) {

          throw '/login?error=true'
        }
      }
    })
  ],

  debug: false,

  callbacks: {

    jwt: async (token, user, account) => {

      const isSignIn = (user) ? true : false

      if (isSignIn) {

        if (account.type === 'credentials') {

          token.access_token = user.token

          token.role = user.user.role
          token.name = user.user.name

        }

        else {

          const variables = {
            user: {
              name: user.name,
              email: user.email,
              image: user.image
            },

            account: {
              provider: account.provider
            }
          }

          const { data } = await graphQLClient.request({ query: AUTH, variables })

          token.access_token = data.token
        }
      }

      return token

    },
    session: async (session, token) => {

      session.access_token = token.access_token

      session.role = token.role
      session.name = token.name

      return session
    },
    signIn: async (user) => {
      if (user)
        return true
      else
        throw '/login?status=true'
    }
  },
  session: {
    jwt: true
  }
})