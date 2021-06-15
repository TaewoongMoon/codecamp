import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../pages/_app'

export default function withAuth(Component: any) {
  return function temp(props: any) {
    const router = useRouter()
    const { accessToken } = useContext(GlobalContext)
    useEffect(() => {
      if (!accessToken) router.push('/clonecoding/login')
    }, [])

    if (!accessToken) return <></> // router.push는 비동기처리이기때문에 먼저 페이지를 그리고 useEffect를 통해서 router.push를 한다
    return <Component {...props} />
  }
}
