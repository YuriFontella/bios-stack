import { GraphQLClient, ClientContext } from 'graphql-hooks'

import Error from '@/src/libs/error'

const graphQLClient = new GraphQLClient({
  url: process.env.GRAPHQL,
  logErrors: process.env.NODE_ENV === 'development',
  onError: ({ result }) => {
    Error(result)
  }
})

export {
  graphQLClient, ClientContext
}