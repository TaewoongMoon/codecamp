import { memo } from 'react'
// @ts-check
const PresenterPage = ({ onClickCountState }: any) => {
  return <div>프리젠터(자식)입니다.</div>
}
// 기억을하고 제 랜더링이 될 필요없는 부분은 memo를 통해서 최적화할 수 있다.
// memo가 풀리는 조건은 props에 받아오는 함수가 바뀌게 되면 자식도 리렌더링이 된다.
export default memo(PresenterPage)
