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

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    })
  )

  useEffect(() => {
    const { current: currentObserver } = observer
    // @ts-ignore
    if (node) currentObserver.observe(node)

    return () => observer.current.disconnect()
  }, [node])

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
        console.log('=======================')
        console.log('index', index)
        console.log('arr[++index]', arr[index])
        console.log('=======================')
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
    console.log(scrollY)
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <CloneMainUI onClickMenuList={onClickMenuList} selectedId={selectedId} />
  )
}

export default withAuth(CloneMainPage)
