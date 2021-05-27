import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Globalstyles from '../src/commons/styles/globalStyles'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Globalstyles></Globalstyles>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
