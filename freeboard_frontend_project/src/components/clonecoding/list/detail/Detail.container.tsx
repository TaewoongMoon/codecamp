// import withAuth from '../../../../commons/hocs/withAuth'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import withAuth from '../../../../commons/hocs/withAuth'
import ListDetailUI from './Detail.presenter'
import { FETCH_USEDITEM } from './Detail.queries'

const ListDetailPage = () => {
  const [translateChange, setTranslateChange] = useState(0)
  const [slickDot, setSlickDot] = useState('one')
  console.log(translateChange)
  const router = useRouter()

  const { data: fetchData } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query._id)
    }
  })

  const timeDifference = Math.floor(
    (new Date().getTime() -
      new Date(fetchData?.fetchUseditem.seller.createdAt).getTime()) /
      1000 /
      60 /
      60
  )
  console.log(timeDifference)

  console.log('data', fetchData)
  const onClickTranslateChangeMinus = () => {
    setTranslateChange((prev) => prev - 729)

    if (translateChange === -1458) {
      setTranslateChange(0)
    }
  }

  const onClickTranlsateChangePlus = () => {
    setTranslateChange((prev) => prev + 729)

    if (translateChange === 0) {
      setTranslateChange(-1458)
    }
  }

  const onClickSlickDot = (event: any) => {
    setSlickDot(event.target.id)
    if (event.target.id === 'one') {
      setTranslateChange(0)
    } else if (event.target.id === 'two') {
      setTranslateChange(-729)
    } else if (event.target.id === 'three') {
      setTranslateChange(-1458)
    }
  }

  return (
    <ListDetailUI
      translateChange={translateChange}
      onClickTranslateChangeMinus={onClickTranslateChangeMinus}
      onClickTranslateChangePlus={onClickTranlsateChangePlus}
      slickDot={slickDot}
      onClickSlickDot={onClickSlickDot}
      fetchData={fetchData}
      timeDifference={timeDifference}
    />
  )
}

export default withAuth(ListDetailPage)
