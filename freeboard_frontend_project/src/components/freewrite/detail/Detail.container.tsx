import { useQuery, gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardArgs
} from '../../../commons/types/generated/types'
import DetailBoardUI from './Detail.presenter'

export default function DetailBoardContainer() {
  const router = useRouter()

  const boardId = String(router.query._id)

  const tempStars = [false, false, false, false, false]
  const [numberofStars, setNumberofStars] = useState(tempStars)
  const tempRating = numberofStars.filter((data) => data === true).length
  const [textNumber, setTextNumber] = useState(0)
  const [registerPackage, setRegisterPackage] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0,
    boardId: ''
  })

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
  }
  console.log(numberofStars)

  function onChangeCommentBox(event: any) {
    const temp = event.target.value.length
    if (temp > 100) return
    setTextNumber(temp)

    const data = {
      ...registerPackage,
      [event.target.name]: event.target.value,
      rating: tempRating,
      boardId: boardId
    }
    setRegisterPackage(data)
    console.log(data)
  }

  const CREATE_BOARDCOMMENT = gql`
    mutation createBoardComment(
      $writer: String
      $password: String
      $contents: String!
      $rating: Float
      $boardId: ID!
    ) {
      createBoardComment(
        createBoardCommentInput: {
          writer: $writer
          password: $password
          contents: $contents
          rating: $rating
        }
        boardId: $boardId
      ) {
        _id
        writer
        rating
        contents
      }
    }
  `
  const [createBoardComment] =
    useMutation<IMutation, IMutationCreateBoardCommentArgs>(CREATE_BOARDCOMMENT)

  async function CommentRegisterButton() {
    try {
      const result = await createBoardComment({
        variables: {
          ...registerPackage
        }
      })
      console.log(result)
    } catch (error) {
      alert(error.message)
    }
  }

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
  const { data } = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query._id)
    }
  })

  // console.log('data', data)

  const Year = String(new Date(data?.fetchBoard.createdAt).getFullYear())
  const Month = String(
    new Date(data?.fetchBoard.createdAt).getMonth()
  ).padStart(2, '0')
  const Day = String(new Date(data?.fetchBoard.createdAt).getDay()).padStart(
    2,
    '0'
  )

  return (
    <DetailBoardUI
      data={data}
      Year={Year}
      Month={Month}
      Day={Day}
      onClickStarRating={onClickStarRating}
      onChangeCommentBox={onChangeCommentBox}
      textNumber={textNumber}
      CommentRegisterButton={CommentRegisterButton}
      numberofStars={numberofStars}
    />
  )
}
