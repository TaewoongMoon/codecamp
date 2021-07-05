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
import getAccessToken from '../src/commons/libraries/getAccessToken'
import Head from 'next/head'

export const GlobalContext = createContext({
  accessToken: '',
  setAccessToken: (_: any) => {},
  setUserInfo: (_: any) => {},
  userInfo: {}
})

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState('')
  const uploadLink = createUploadLink({
    uri: 'https://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    credentials: 'include'
  })
  const [userInfo, setUserInfo] = useState({})

  // @ts-ignore
  const errorLink = onError(async ({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          // 만료된 토큰을 재발급 받기
          const newAccessToken = getAccessToken({ setAccessToken })

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
    <>
      <Head>
        <meta property="og:title" content="코드캠프 1기 사이트!!"></meta>
        <meta
          property="og:image"
          content="https://dullyshin.github.io/2018/08/30/HTML-imgLink/#lg=1&slide=0"
        ></meta>
        <meta
          property="og: description"
          content="코드캠프1기들 모여주세요!!"
        ></meta>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WEG0CHM6QK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEG0CHM6QK')`
          }}
        ></script>
      </Head>
      <GlobalContext.Provider
        value={{ accessToken, setAccessToken, setUserInfo, userInfo }}
      >
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp
