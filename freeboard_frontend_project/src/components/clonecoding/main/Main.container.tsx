import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import withAuth from '../../../commons/hocs/withAuth'
import CloneMainUI from './Main.presenter'

const timer = {}

const CloneMainPage = () => {
  const [selectedId, setSelectedId] = useState('favorite')
  const [scrollY, setScrollY] = useState(0)
  const [scrollOn, setScrollOn] = useState(false)
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)
  const router = useRouter()

  const buildThresholdArray = () =>
    Array.from(Array(100).keys(), (i) => i / 100)
  const root = null
  const rootMargin = '0px'

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold: buildThresholdArray()
    })
  )

  useEffect(() => {
    // @ts-ignore
    // if (observer.current) observer.current.disconenct()
    // @ts-ignore

    const { current: currentObserver } = observer
    currentObserver.disconnect()
    // @ts-ignore
    if (node) currentObserver.observe(node)
    console.log(node)

    // @ts-ignore
    return () => currentObserver.disconnect()
  }, [node])

  // console.log(observer.current)
  // console.log(node)
  // console.log(node)

  // console.log(entry.intersectionRatio)

  const arr = [
    'favorite',
    'zPayment',
    'zOnly',
    'smartSearch',
    'myItem',
    'favorite'
  ]

  let index = 0

  const onClickMenuList = (event: any) => {
    setSelectedId(event.target.id)
    // @ts-ignore
    clearInterval(timer.temp)
    let index2 = arr.indexOf(event.target.id)
    // @ts-ignore
    timer.temp = setInterval(function () {
      setSelectedId(arr[index2++])
      if (index2 === arr.length) {
        // @ts-ignore
        clearInterval(timer.temp)
      }
    }, 3000)
  }

  const onClickListPage = () => {
    router.push('/clonecoding/list')
  }

  useEffect(() => {
    if (!scrollOn && scrollY > 0) {
      // const temp = setInterval(() => {
      //   setSelectedId('favorite')
      //   clearInterval(temp)
      // }, 1000)

      setScrollOn(true)
      // @ts-ignore
      timer.temp = setInterval(function () {
        setSelectedId(arr[index++])
        if (index === arr.length) {
          // @ts-ignore
          clearInterval(timer.temp)
        }
      }, 3000)
    }
  }, [scrollY])

  const handleFollow = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch()
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <CloneMainUI
      onClickMenuList={onClickMenuList}
      selectedId={selectedId}
      observer={observer}
      setNode={setNode}
      entry={entry}
      onClickListPage={onClickListPage}
    />
  )
}

export default withAuth(CloneMainPage)
