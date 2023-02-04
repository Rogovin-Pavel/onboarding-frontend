import {
  InMemoryCache,
  ApolloClient,
  ApolloLink,
  HttpLink,
  concat,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.error(`Graphql error: ${message}, ${locations}, ${path}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3001/graphql' })
])

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem('token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
  return forward(operation)
})

export const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache()
})
