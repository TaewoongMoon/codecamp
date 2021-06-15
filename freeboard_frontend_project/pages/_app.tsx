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
import { createContext, useState } from 'react'

export const GlobalContext = createContext({
  accessToken: '',
  setAccessToken: (_: any) => {}
})

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const [accessToken, setAccessToken] = useState('')

  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    credentials: 'include'
  })
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })

  return (
    <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
      <ApolloProvider client={client}>
        <Globalstyles></Globalstyles>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
