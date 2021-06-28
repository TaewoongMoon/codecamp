// import withAuth from '../../../../commons/hocs/withAuth'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import withAuth from '../../../../commons/hocs/withAuth'
import { FETCH_USERLOGGEDIN } from '../header/Header.queries'
import ListDetailUI from './Detail.presenter'
import {
  CREATE_USEDITEMQUESTION,
  FETCH_USEDITEM,
  FETCH_USEDITEMQUESTIONANSWERS,
  FETCH_USEDITEMQUESTIONS,
  UPDATE_USEDITEMQUESTION
} from './Detail.queries'

const ListDetailPage = () => {
  const [translateChange, setTranslateChange] = useState(0)
  const [slickDot, setSlickDot] = useState('one')
  const [resultOne, setResultOne] = useState()
  const router = useRouter()
  const client = useApolloClient()
  const [replyButton, setReplyButton] = useState(false)
  const { data: fetchData } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query._id)
    }
  })
  const [countNumber, setCountNumber] = useState('0')
  const [commentValue, setCommentValue] = useState('')
  const [fixCommentValue, setFixCommentValue] = useState('')
  const [replyShow, setReplyShow] = useState(false)
  const [inputDefaultValue, setInputDefaultValue] = useState([])
  const [fixCountNumber, setFixCountNumber] = useState('0')
  // @ts-ignore
  console.log(inputDefaultValue[0]?.contents.length)

  const { data: fetchUsedItemReplyData, refetch } = useQuery(
    FETCH_USEDITEMQUESTIONS,
    {
      variables: {
        useditemId: String(router.query._id)
      }
    }
  )
  const [createUsedItemQuestion] = useMutation(CREATE_USEDITEMQUESTION)
  const [updateUsedItemQuestion] = useMutation(UPDATE_USEDITEMQUESTION)

  const { data: fetchUserLoggedIn } = useQuery(FETCH_USERLOGGEDIN)
  const timeDifference = Math.floor(
    (new Date().getTime() -
      new Date(fetchData?.fetchUseditem.seller.createdAt).getTime()) /
      1000 /
      60 /
      60
  )
  // console.log('id', fetchUsedItemReplyData?.fetchUseditemQuestions)
  // console.log('fetchUserLoggedIn', fetchUserLoggedIn)

  useEffect(() => {
    const cocomentsQuery = async () => {
      const result = await client.query({
        query: FETCH_USEDITEMQUESTIONS,
        variables: {
          useditemId: String(router.query._id)
        }
      })

      const comments = await Promise.all(
        result.data?.fetchUseditemQuestions.map(async (data: any) => {
          const cocomentsResult = await client.query({
            query: FETCH_USEDITEMQUESTIONANSWERS,
            variables: {
              useditemQuestionId: data._id
            }
          })
          const cocoments = cocomentsResult.data.fetchUseditemQuestionAnswers
          return { ...data, cocoments }
        })
      )
      // @ts-ignore
      setResultOne(comments)
    }

    //   const result = await client.query({
    //     query: FETCH_USEDITEMQUESTIONS,
    //     variables: {
    //       useditemId: String(router.query._id)
    //     }
    //   })

    //   result.data?.fetchUseditemQuestions.map(
    //     async (data: any) =>
    //       await client
    //         .query({
    //           query: FETCH_USEDITEMQUESTIONANSWERS,
    //           variables: {
    //             useditemQuestionId: data._id
    //           }
    //         })
    //         .then((value: any) =>
    //           // @ts-ignore
    //           setResultOne(value.data.fetchUseditemQuestionAnswers)
    //         )
    //   )
    // }
    cocomentsQuery()
  }, [])

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
      setSlickDot('one')
    } else if (translateChange === 0) {
      setSlickDot('two')
    } else if (translateChange === -729) {
      setSlickDot('three')
    }
  }

  const onClickTranlsateChangePlus = () => {
    setTranslateChange((prev) => prev + 729)
    if (translateChange === 0) {
      setTranslateChange(-1458)
      setSlickDot('three')
    } else if (translateChange === -729) {
      setSlickDot('one')
    } else if (translateChange === -1458) {
      setSlickDot('two')
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

  const onChangeTextCount = (event: any) => {
    if (event.target.value.length > 100) return
    setCountNumber(event.target.value.length)
    setCommentValue(event.target.value)
  }

  const onChangeReplyFix = (event: any) => {
    if (event?.target.value.length > 100) return
    setFixCountNumber(event.target.value.length)
    setFixCommentValue(event.target.value)
  }

  const onClickReplySubmit = async () => {
    try {
      await createUsedItemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: commentValue
          },
          useditemId: String(router.query._id)
        }
      })
      alert('성공적으로 등록되었습니다.')
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickReplyChangeSubmit = async () => {
    try {
      await updateUsedItemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: fixCommentValue
          },
          // @ts-ignore
          useditemQuestionId: inputDefaultValue[0]?._id
        }
      })
      refetch()
      alert('성공')
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  console.log(inputDefaultValue[0])

  const onClickReplyFixBoxShow = (event: any) => {
    if (replyShow === false) {
      setReplyShow(true)
      const result = fetchUsedItemReplyData?.fetchUseditemQuestions.filter(
        (data: any) => data._id === event.target.id
      )
      setInputDefaultValue(result)
      setFixCountNumber(String(result[0]?.contents.length))
      setFixCommentValue(result[0]?.contents)
    } else if (replyShow === true) {
      setReplyShow(false)
    }
  }

  // const onClickReplyCancel = ()

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
      resultOne={resultOne}
      onChangeTextCount={onChangeTextCount}
      countNumber={countNumber}
      onClickReplySubmit={onClickReplySubmit}
      onChangeReplyFix={onChangeReplyFix}
      onClickReplyFixBoxShow={onClickReplyFixBoxShow}
      replyShow={replyShow}
      inputDefaultValue={inputDefaultValue}
      fixCountNumber={fixCountNumber}
      onClickReplyChangeSubmit={onClickReplyChangeSubmit}
    />
  )
}

export default withAuth(ListDetailPage)
