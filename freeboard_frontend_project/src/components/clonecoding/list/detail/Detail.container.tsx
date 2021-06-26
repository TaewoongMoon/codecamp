// import withAuth from '../../../../commons/hocs/withAuth'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import withAuth from '../../../../commons/hocs/withAuth'
import { FETCH_USERLOGGEDIN } from '../header/Header.queries'
import ListDetailUI from './Detail.presenter'
import { FETCH_USEDITEM, FETCH_USEDITEMQUESTIONS } from './Detail.queries'

const ListDetailPage = () => {
  const [translateChange, setTranslateChange] = useState(0)
  const [slickDot, setSlickDot] = useState('one')
  const router = useRouter()
  const [replyButton, setReplyButton] = useState(false)
  const { data: fetchData } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query._id)
    }
  })

  const { data: fetchUsedItemReplyData } = useQuery(FETCH_USEDITEMQUESTIONS, {
    variables: {
      useditemId: String(router.query._id)
    }
  })

  console.log(fetchUsedItemReplyData?.fetchUseditemQuestions)

  const { data: fetchUserLoggedIn } = useQuery(FETCH_USERLOGGEDIN)

  const timeDifference = Math.floor(
    (new Date().getTime() -
      new Date(fetchData?.fetchUseditem.seller.createdAt).getTime()) /
      1000 /
      60 /
      60
  )

  const onClickReplyButton = () => {
    if (replyButton === false) {
      setReplyButton(true)
    } else {
      setReplyButton(false)
    }
  }

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
      fetchUsedItemReplyData={fetchUsedItemReplyData}
      onClickReplyButton={onClickReplyButton}
      replyButton={replyButton}
      fetchUserLoggedIn={fetchUserLoggedIn}
    />
  )
}

export default withAuth(ListDetailPage)
