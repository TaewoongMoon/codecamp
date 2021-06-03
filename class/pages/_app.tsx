import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'

function MyApp({ Component, pageProps }: AppProps) {
  // const uploadLink = createUploadLink({
  //   uri: 'http://backend.codebootcamp.co.kr/graphql'
  // })
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    // link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
