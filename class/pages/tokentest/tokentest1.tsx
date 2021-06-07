// 회원/비회원 둘 다 볼 수 있는 페이지

import { useRouter } from 'next/router'

const TokenTest1Page = () => {
  const router = useRouter()

  const onClickMove = () => {
    router.push('/tokentest/tokentest2')
  }
  return <button onClick={onClickMove}>회원전용 페이지로 이동하기</button>
}

export default TokenTest1Page
