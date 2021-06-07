// 회원만 볼 수 있는 페이지

import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../_app'

const TokenTest2Page = () => {
  const router = useRouter()

  const { accessToken } = useContext(GlobalContext)
  useEffect(() => {
    if (!accessToken) router.push('/login')
  }, [])

  const onClickMove = () => {
    router.push('/tokentest/tokentest1')
  }
  return <button onClick={onClickMove}>전체공개 페이지로 이동하기</button>
}

export default TokenTest2Page
