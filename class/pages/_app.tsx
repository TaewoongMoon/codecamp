import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
// import Globalstyles from '../src/commons/styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql'
  })
  const client = new ApolloClient({
    // uri: 'http://example.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
