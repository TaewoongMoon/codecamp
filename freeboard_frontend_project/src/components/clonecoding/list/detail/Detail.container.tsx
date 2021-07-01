// import withAuth from '../../../../commons/hocs/withAuth'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import withAuth from '../../../../commons/hocs/withAuth'
import { FETCH_USERLOGGEDIN } from '../header/Header.queries'
import ListDetailUI from './Detail.presenter'
import {
  CREATE_USEDITEMQUESTION,
  CREATE_USEDITEMQUESTIONANSWER,
  DELETE_USEDITEMQUESTION,
  DELETE_USEDITEMQUESTIONQUESTIONANSWER,
  FETCH_USEDITEM,
  FETCH_USEDITEMQUESTIONANSWERS,
  FETCH_USEDITEMQUESTIONS,
  UPDATE_USEDITEMQUESTION,
  UPDATE_USEDITEMQUESTIONANSWER
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
  const [doubleReplyValue, setDoubleReplyValue] = useState<any>({})
  const [doubleReplyCountNumber, setDoubleReplyCountNumber] = useState({})
  const [fixCommentValue, setFixCommentValue] = useState('')
  const [replyShow, setReplyShow] = useState(false)
  const [doubleReplyShow, setDoubleReplyShow] = useState<any>({})
  const [inputDefaultValue, setInputDefaultValue] = useState([])
  const [fixCountNumber, setFixCountNumber] = useState('0')
  const [doubleReply, setDoubleReply] = useState<any>({})
  const [doubleReplyFixCountNumber, setDoubleReplyFixCountNumber] =
    useState<any>({})
  const [doubleReplyFixValue, setDoubleReplyFixValue] = useState<any>({})
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
  const [deleteUsedItemQuestion] = useMutation(DELETE_USEDITEMQUESTION)
  const [deleteUsedItemQuestionAnswer] = useMutation(
    DELETE_USEDITEMQUESTIONQUESTIONANSWER
  )
  const [createUsedItemQuestionAnswer] = useMutation(
    CREATE_USEDITEMQUESTIONANSWER
  )

  const [updateUsedItemQuestionAnswer] = useMutation(
    UPDATE_USEDITEMQUESTIONANSWER
  )
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
      alert('성공')
      refetch() // refetch했는데 렌더링이 안일어남
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

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

  const onClickReplyCancel = async (event: any) => {
    const result = await fetchUsedItemReplyData?.fetchUseditemQuestions.filter(
      (data: any) => data._id === event.target.id
    )
    try {
      await deleteUsedItemQuestion({
        variables: {
          useditemQuestionId: result[0]?._id
        }
      })
      alert('성공적으로 삭제하였습니다')
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickDoubleReply = (event: any) => {
    if (!doubleReply[event.target.id]) {
      const result = {
        ...doubleReply,
        [event.target.id]: true
      }
      setDoubleReply(result)
    } else if (doubleReply[event.target.id]) {
      const result = {
        ...doubleReply,
        [event.target.id]: false
      }
      const temp = {
        ...doubleReplyCountNumber,
        [event.target.id]: null
      }
      setDoubleReply(result)
      setDoubleReplyCountNumber(temp)
    }
  }

  const onChangeDoubleReply = (event: any) => {
    if (doubleReplyValue[event.target.id]?.length > 100) return
    const result = {
      ...doubleReplyValue,
      [event.target.id]: event.target.value
    }
    const resultTwo = {
      ...doubleReplyCountNumber,
      [event.target.id]: event.target.value.length
    }
    setDoubleReplyValue(result)
    setDoubleReplyCountNumber(resultTwo)
  }

  const onClickDoubleReplySubmit = async (event: any) => {
    try {
      await createUsedItemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: String(doubleReplyValue[event.target.id])
          },
          useditemQuestionId: String(event.target.id)
        }
      })
      alert('성공적으로 등록이되었습니다.')
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickDoubleReplyDelete = async (event: any) => {
    try {
      await deleteUsedItemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id
        }
      })
      alert('성공적으로 제거하였습니다.')
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }
  const onClickDoubleReplyFixBoxShow = (event: any) => {
    if (!doubleReplyShow[event.target.id]) {
      const result = {
        ...doubleReplyShow,
        [event.target.id]: true
      }
      setDoubleReplyShow(result)
      // @ts-ignore
      const numberTemp = resultOne.filter(
        (data: any) => data.cocoments.length > 0
      )
      console.log('number_temp', numberTemp)
      console.log(event.target.id)
    } else if (doubleReplyShow[event.target.id]) {
      const result = {
        ...doubleReplyShow,
        [event.target.id]: false
      }
      setDoubleReplyShow(result)
    }
  }

  console.log('resultOne', resultOne)

  const onChangeDoubleReplyFix = (event: any) => {
    if (doubleReplyFixCountNumber[event.target.id] > 100) return
    const countTemp = {
      ...doubleReplyFixCountNumber,
      [event.target.id]: event.target.value.length
    }
    const valueTemp = {
      ...doubleReplyFixValue,
      [event.target.id]: event.target.value
    }

    setDoubleReplyFixCountNumber(countTemp)
    setDoubleReplyFixValue(valueTemp)
  }

  const onClickDoubleReplyFixSubmit = async (event: any) => {
    try {
      await updateUsedItemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: doubleReplyFixValue[event.target.id]
          },
          useditemQuestionAnswerId: String(event.target.id)
        }
      })
      alert('성공적으로 재등록하였습니다')
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickMainPage = () => {
    router.push('/clonecoding/list')
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
      onClickReplyCancel={onClickReplyCancel}
      onClickDoubleReply={onClickDoubleReply}
      doubleReply={doubleReply}
      onChangeDoubleReply={onChangeDoubleReply}
      doubleReplyCountNumber={doubleReplyCountNumber}
      onClickDoubleReplySubmit={onClickDoubleReplySubmit}
      onClickDoubleReplyDelete={onClickDoubleReplyDelete}
      onClickDoubleReplyFixBoxShow={onClickDoubleReplyFixBoxShow}
      doubleReplyShow={doubleReplyShow}
      onChangeDoubleReplyFix={onChangeDoubleReplyFix}
      doubleReplyFixCountNumber={doubleReplyFixCountNumber}
      onClickDoubleReplyFixSubmit={onClickDoubleReplyFixSubmit}
      onClickMainPage={onClickMainPage}
    />
  )
}

export default withAuth(ListDetailPage)
