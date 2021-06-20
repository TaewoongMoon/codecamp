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

  const root = null
  const rootMargin = '0px'
  const threshold = 0

  const observer = useRef(null)

  useEffect(() => {
    // @ts-ignore
    // if (observer.current) observer.current.disconenct()
    // @ts-ignore
    observer.current = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),
      {
        root,
        rootMargin,
        threshold
      }
    )
    const { current: currentObserver } = observer
    // @ts-ignore
    if (node) currentObserver.observe(node)
    // @ts-ignore
    return () => currentObserver.disconnect()
  }, [node, root, rootMargin, threshold])

  console.log(observer)

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
    }, 1000)
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
      }, 1000)
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
    />
  )
}

export default withAuth(CloneMainPage)
