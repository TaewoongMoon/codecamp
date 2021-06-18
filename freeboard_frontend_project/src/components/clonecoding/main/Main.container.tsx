import { useEffect, useState } from 'react'
import withAuth from '../../../commons/hocs/withAuth'
import CloneMainUI from './Main.presenter'
const CloneMainPage = () => {
  const [selectedId, setSelectedId] = useState('favorite')
  const [scrollY, setScrollY] = useState(0)
  const [scrollOn, setScrollOn] = useState(false)
  const arr = ['zPayment', 'zOnly', 'smartSearch', 'myItem', 'favorite']
  const [temp, setTemp] = useState()

  let index = 0
  const onClickMenuList = (event: any) => {
    setSelectedId(event.target.id)
    clearInterval(temp)

    let index2 = arr.indexOf(event.target.id)
    setTemp(
      // @ts-ignore
      setInterval(function () {
        setSelectedId(arr[index2++])
        if (index2 === arr.length) {
          clearInterval(temp)
        }
      }, 1000)
    )
  }

  useEffect(() => {
    if (!scrollOn && scrollY > 0) {
      setScrollOn(true)
      setTemp(
        // @ts-ignore
        setInterval(function () {
          setSelectedId(arr[index++])
          if (index === arr.length) {
            clearInterval(temp)
          }
        }, 1000)
      )
    }
  }, [scrollY])

  //   useEffect(() => {
  //     const temp = setInterval(function () {
  //       const arrow = arr[index++]
  //       setSelectedId(arrow)
  //       if (index === arr.length) index = 0
  //     }, 1000)
  //   }, [selectedId])

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
