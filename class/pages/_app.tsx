import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink
} from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { createUploadLink } from 'apollo-upload-client'
import { createContext, useState } from 'react'

export const GlobalContext = createContext({
  accessToken: '',
  setAccessToken: (_: any) => {}
})

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState('')
  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
  const client = new ApolloClient({
    // uri: 'http://backend.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })

  return (
    <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
