import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink
} from '@apollo/client'
import Layout from '../src/layout'
import Globalstyles from '../src/commons/styles/Global styles'
import { createUploadLink } from 'apollo-upload-client'

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql'
  })
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Globalstyles></Globalstyles>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
