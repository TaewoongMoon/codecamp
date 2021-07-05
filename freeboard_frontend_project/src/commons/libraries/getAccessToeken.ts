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
      withCredentials: true
    }
  )
  const newAccessToken = response.data.data?.restoreAccessToken?.accessToken
  setAccessToken(newAccessToken)
  return newAccessToken
}

export default getAccessToken
