import axios from 'axios'

const getAccessToken = async ({ setAccessToken }: any) => {
  const response = await axios.post(
    'https://backend.codebootcamp.co.kr/graphql',
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
  const newAccessToken = response.data.data.restoreAccessToken.accessToken
  setAccessToken(newAccessToken)
  return newAccessToken
}

export default getAccessToken
