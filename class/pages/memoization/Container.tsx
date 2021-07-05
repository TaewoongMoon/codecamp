import { useCallback, useState } from 'react'
import PresenterPage from './Presenter'

const ContainerPage = () => {
  console.log('컨테이너(부모) 렌더링됨')

  // const useMemoTest = useMemo(() => Math.random(), [])

  // console.log('useMemoTest:', useMemoTest)

  let countLet = 0
  const onClickCountLet = () => {
    console.log(countLet)
    countLet += 1
  }

  const [countState, setCountState] = useState(0)

  // useCallback: 기존의 로직을 기억한다

  // useMemo : 마지막 값을 기억하고 저장한다.

  const onClickCountState = useCallback(() => {
    console.log(countState)
    setCountState((prev) => prev + 1)
  }, [])

  return (
    <>
      <div>countLet : {countLet}</div>
      <button onClick={onClickCountLet}>countLet + 1</button>
      <div>컨테이너 (부모) 입니다.</div>
      <div>countState : {countState}</div>
      <button onClick={onClickCountState}>countState + 1</button>
      <PresenterPage onClickCountState={onClickCountState} />
    </>
  )
}

export default ContainerPage
