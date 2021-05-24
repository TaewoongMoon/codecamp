import { useQuery, gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs
} from '../../../commons/types/generated/types'
import DetailBoardUI from './Detail.presenter'

export default function DetailBoardContainer() {
  const router = useRouter()

  const boardId = String(router.query._id)

  const tempStars = [false, false, false, false, false]
  const [numberofStars, setNumberofStars] = useState(tempStars)
  const tempRating = numberofStars.filter((data) => data === true).length
  const [textNumber, setTextNumber] = useState({
    contents: 0
  })
  const [registerPackage, setRegisterPackage] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0
  })
  console.log(registerPackage)

  function onClickStarRating(event: any) {
    if (event.target.id === '1') {
      if (numberofStars[0] === true && numberofStars[1] === false) {
        tempStars[0] = false
      } else {
        tempStars[0] = true
      }
    } else if (event.target.id === '2') {
      tempStars[0] = true
      tempStars[1] = true
    } else if (event.target.id === '3') {
      tempStars[0] = true
      tempStars[1] = true
      tempStars[2] = true
    } else if (event.target.id === '4') {
      tempStars[0] = true
      tempStars[1] = true
      tempStars[2] = true
      tempStars[3] = true
    } else if (event.target.id === '5') {
      tempStars[0] = true
      tempStars[1] = true
      tempStars[2] = true
      tempStars[3] = true
      tempStars[4] = true
    }
    setNumberofStars(tempStars)
    // setRegisterPackage({
    //   ...registerPackage,
    //   rating: tempStars.filter((data) => data === true).length
    // })
  }
  console.log(numberofStars)

  function onChangeCommentBox(event: any) {
    const temp = {
      contents: event.target.value.length
    }
    if (temp.contents > 100) return
    setTextNumber(temp)
    const data = {
      ...registerPackage,
      [event.target.name]: event.target.value,
      rating: tempRating
    }
    setRegisterPackage(data)
    console.log(data)
  }

  function onChangeNamePassword(event: any) {
    const data = {
      ...registerPackage,
      [event.target.name]: event.target.value,
      rating: tempRating
    }
    setRegisterPackage(data)
  }

  async function CommentRegisterButton() {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            ...registerPackage
          },
          boardId: boardId
        }
      })
      console.log(result)
      alert('성공적으로 등록하였습니다.')
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  const CREATE_BOARDCOMMENT = gql`
    mutation createBoardComment(
      $createBoardCommentInput: CreateBoardCommentInput!
      $boardId: ID!
    ) {
      createBoardComment(
        createBoardCommentInput: $createBoardCommentInput
        boardId: $boardId
      ) {
        _id
        writer
        rating
        contents
        createdAt
      }
    }
  `
  const [createBoardComment] =
    useMutation<IMutation, IMutationCreateBoardCommentArgs>(CREATE_BOARDCOMMENT)

  const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        writer
        title
        contents
        createdAt
      }
    }
  `
  const { data: boardData } = useQuery<IQuery, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query._id)
      }
    }
  )

  const FETCH_BOARDCOMMENT = gql`
    query fetchBoardComments($boardId: ID!) {
      fetchBoardComments(boardId: $boardId) {
        _id
        writer
        contents
        rating
        createdAt
        user {
          _id
          email
          name
        }
      }
    }
  `
  const { data: commentData } = useQuery<IQuery, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARDCOMMENT,
    {
      variables: {
        boardId: String(router.query._id)
      }
    }
  )
  console.log('data', boardData)
  console.log('data', commentData)

  const Year = String(new Date(boardData?.fetchBoard.createdAt).getFullYear())
  const Month = String(
    new Date(boardData?.fetchBoard.createdAt).getMonth()
  ).padStart(2, '0')
  const Day = String(
    new Date(boardData?.fetchBoard.createdAt).getDay()
  ).padStart(2, '0')

  return (
    <DetailBoardUI
      commentData={commentData}
      data={boardData}
      Year={Year}
      Month={Month}
      Day={Day}
      onClickStarRating={onClickStarRating}
      onChangeCommentBox={onChangeCommentBox}
      textNumber={textNumber}
      CommentRegisterButton={CommentRegisterButton}
      numberofStars={numberofStars}
      onChangeNamePassword={onChangeNamePassword}
    />
  )
}
