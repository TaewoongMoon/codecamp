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
import { onError } from '@apollo/client/link/error'
import getAccessToken from '../src/commons/libraries/getAccessToeken'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export const GlobalContext = createContext({
  accessToken: '',
  setAccessToken: (_: any) => {},
  userId: '',
  setUserId: (_: any) => {},
  doubleReply: '',
  setDoubleReply: (_: any) => {}
})

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const [accessToken, setAccessToken] = useState('')
  const [userId, setUserId] = useState('')
  const [doubleReply, setDoubleReply] = useState('')
  console.log('publicRuntimeConfig', publicRuntimeConfig)
  const uploadLink = createUploadLink({
    uri: 'https://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken || ''}`
    },
    credentials: 'include'
  })

  // @ts-ignore
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          // 만료된 토큰을 재발급 받기
          const newAccessToken = getAccessToken({ setAccessToken })

          // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${newAccessToken || ''}`
            }
          })

          return forward(operation)
        }
      }
    }
  })
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })
  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userId,
        setUserId,
        doubleReply,
        setDoubleReply
      }}
    >
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
