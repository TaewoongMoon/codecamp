import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../../pages/_app'

export default function withAuth(Component: any) {
  // 컴포넌트

  // 토큰체크
  return function aaa(props: any) {
    const router = useRouter()
    const { accessToken } = useContext(GlobalContext)
    useEffect(() => {
      if (!accessToken) router.push('/login')
    }, [])

    if (!accessToken) return <></> // router.push는 비동기 처리이기때문에 먼저 페이지를 그려주고 useEffect를 통해서 router.push를 해야한다.
    return <Component {...props} />
  }
}
