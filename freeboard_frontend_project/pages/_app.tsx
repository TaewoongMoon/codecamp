import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Layout from '../src/layout'
import Globalstyles from '../src/commons/styles/Global styles'

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const client = new ApolloClient({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
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
