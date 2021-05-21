import { useQuery, gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IQuery,
  IQueryFetchBoardArgs
} from '../../../commons/types/generated/types'
import DetailBoardUI from './Detail.presenter'

export default function DetailBoardContainer() {
  const router = useRouter()
  const boardId = router.query._id

  const [textNumber, setTextNumber] = useState('0')
  const tempStars = [false, false, false, false, false]
  const [numberofStars, setNumberofStars] = useState(tempStars)
  let count = 0
  for (let i = 0; i < numberofStars.length; i++) {
    if (numberofStars[i] === true) {
      count += 1
    }
  }
  const rating = count
  console.log(rating)
  const [commentPackage, setCommentPackage] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0
  })

  function onClickStarRating(event: any) {
    if (event.target.id === '1') {
      if (numberofStars[0] === true && numberofStars[1] === false) {
        return setNumberofStars(tempStars)
      } else tempStars[0] = true
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

  function onChangeCommentBox(event: any) {
    if (event.target.value.length > 100) return
    const temp = event.target.value.length
    setTextNumber(temp)
    const data = {
      ...commentPackage,
      [event.target.name]: event.target.value,
      rating: rating
    }

    setCommentPackage(data)
    // console.log(event.target.name)
    console.log(data)
  }

  async function CommentRegisterButton() {
    try {
      const result = await createBoardComment({
        variables: {
          ...commentPackage,
          boardId: boardId,
          rating: rating
        }
      })
      console.log(result.data)
      alert('성공적으로 등록되었습니다.')
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
  const CREATE_BOARDCOMMENT = gql`
    mutation createBoardComment(
      $writer: String
      $password: String
      $contents: String!
      $rating: Float!
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
        writer
        rating
        contents
        createdAt
      }
    }
  `
  // const FETCH_BOARDCOMMENT = gql`
  //   query fetchBoardComments(boardId: $ID!){
  //     fetchBoardComments(boardId: $boardId){
  //       _id,
  //       writer,
  //       contents,
  //       rating,
  //       createdAt
  //     }
  //   }
  // `

  const [createBoardComment] = useMutation(CREATE_BOARDCOMMENT)
  const { data } = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query._id)
    }
  })
  // const { data }

  console.log('data', data)

  const Year = String(new Date(data?.fetchBoard.createdAt).getFullYear())
  const Month = String(
    new Date(data?.fetchBoard.createdAt).getMonth()
  ).padStart(2, '0')
  const Day = String(new Date(data?.fetchBoard.createdAt).getDay()).padStart(
    2,
    '0'
  )

  // const [rating, setRating] = useState(4)

  // const handleRating = (e: any) => {
  //   setRating(e.target.id)
  // }

  return (
    <DetailBoardUI
      data={data}
      Year={Year}
      Month={Month}
      Day={Day}
      onClickStarRating={onClickStarRating}
      numberofStars={numberofStars}
      textNumber={textNumber}
      onChangeCommentBox={onChangeCommentBox}
      CommentRegisterButton={CommentRegisterButton}
    />
  )
}
