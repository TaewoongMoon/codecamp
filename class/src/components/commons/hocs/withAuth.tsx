import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import getAccessToken from '../../../commons/libraries/getAccessToken'

export default function withAuth(Component: any) {
  // 컴포넌트

  // 토큰체크
  return function aaa(props: any) {
    const router = useRouter()
    const { accessToken, setAccessToken } = useContext(GlobalContext)
    useEffect(() => {
      if (accessToken) return

      const restoreAccessToken = async () => {
        const newAccessToken = await getAccessToken({ setAccessToken })
        if (!newAccessToken) router.push('/login')
      }

      restoreAccessToken()
      // refreshToken으로 accessToken 재발급 받기
      // 그래도 accessToken이 없으면 로그인 화면으로 돌려보내기
    }, [])

    if (!accessToken) return <></> // router.push는 비동기 처리이기때문에 먼저 페이지를 그려주고 useEffect를 통해서 router.push를 해야한다.
    return <Component {...props} />
  }
}
