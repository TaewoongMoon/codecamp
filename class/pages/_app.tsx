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
import { onError } from '@apollo/client/link/error'
import axios from 'axios'

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
    },
    credentials: 'include'
  })
  // @ts-ignore
  const errorLink = onError(async ({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          // 만료된 토큰을 재발급 받기
          const response = await axios.post(
            'http://backend.codebootcamp.co.kr/graphql',
            {
              query: `
              mutation restoreAccessToken {
                restoreAccessToken {
                  accessToken
                }
              }
            `
            },
            {
              headers: { 'Content-type': 'application/json' },
              withCredentials: true // 쿠키를 넘길때 credential 데이터를 넘긴다는 의미이다.
            }
          )
          const newAccessToken =
            response.data.data.restoreAccessToken.accessToken
          setAccessToken(newAccessToken)

          // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${newAccessToken}`
            }
          })
          return forward(operation)
        }
      }
    }
    // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
  })

  const client = new ApolloClient({
    // uri: 'http://backend.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
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
