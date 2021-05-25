import { useQuery, gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs
} from '../../../commons/types/generated/types'
import DetailBoardUI from './Detail.presenter'

export default function DetailBoardContainer() {
  const router = useRouter()
  // 댓글 등록 & 댓글 수정 공통으로 쓰이는 부분들
  const boardId = String(router.query._id)
  const tempStars = [false, false, false, false, false]
  // 댓글 등록부분 State
  const [numberofStars, setNumberofStars] = useState(tempStars)
  const tempRating = numberofStars.filter((data) => data === true).length
  const [textNumber, setTextNumber] = useState({
    contents: ''
  })
  const [registerPackage, setRegisterPackage] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0
  })
  const [commentFix, setCommentFix] = useState(false)

  const [boardCommentId, setBoardCommentId] = useState('')

  // 댓글 수정부분 State
  const [commentFixNumberofStars, setCommentFixNumberofStars] =
    useState(tempStars)

  const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        writer
        title
        contents
        createdAt
        likeCount
        dislikeCount
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

  const [likeDislikeNumber, setLikeDislikeNumber] = useState({
    likeNumber: 0,
    dislikeNumber: 0
  })

  const commentTempRating = commentFixNumberofStars.filter(
    (data) => data === true
  ).length
  const [commentTextNumber, setCommentTextNumber] = useState({
    commentFixContents: 0
  })
  const [commentFixRegisterPackage, setCommentFixRegisterPackage] = useState({
    commentFixWriter: '',
    commentFixPassword: '',
    commentFixContents: '',
    commentFixRating: 0
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
    setRegisterPackage({
      ...registerPackage,
      rating: tempStars.filter((data) => data === true).length
    })
  }

  function onClickCommentStarRating(event: any) {
    if (event.target.id === '6') {
      if (
        commentFixNumberofStars[0] === true &&
        commentFixNumberofStars[1] === false
      ) {
        tempStars[0] = false
      } else {
        tempStars[0] = true
      }
    } else if (event.target.id === '7') {
      tempStars[0] = true
      tempStars[1] = true
    } else if (event.target.id === '8') {
      tempStars[0] = true
      tempStars[1] = true
      tempStars[2] = true
    } else if (event.target.id === '9') {
      tempStars[0] = true
      tempStars[1] = true
      tempStars[2] = true
      tempStars[3] = true
    } else if (event.target.id === '10') {
      tempStars[0] = true
      tempStars[1] = true
      tempStars[2] = true
      tempStars[3] = true
      tempStars[4] = true
    }
    setCommentFixNumberofStars(tempStars)
    setCommentFixRegisterPackage({
      ...commentFixRegisterPackage,
      commentFixRating: tempStars.filter((data) => data === true).length
    })
  }

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

  function onChangeCommentFixBox(event: any) {
    const temp = {
      commentFixContents: event.target.value.length
    }
    if (temp.commentFixContents > 100) return
    setCommentTextNumber(temp)
    const data = {
      ...commentFixRegisterPackage,
      [event.target.name]: event.target.value,
      commentFixRating: commentTempRating
    }
    setCommentFixRegisterPackage(data)
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
  function onChangeFixNamePassword(event: any) {
    const data = {
      ...commentFixRegisterPackage,
      [event.target.name]: event.target.value,
      commentFixRating: commentTempRating
    }
    setCommentFixRegisterPackage(data)
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

  async function CommentFixRegisterButton() {
    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: commentFixRegisterPackage.commentFixContents,
            rating: commentFixRegisterPackage.commentFixRating
          },
          boardCommentId: boardCommentId
        }
      })
      refetch()
      console.log(result)
    } catch (error) {
      alert(error.message)
    }
  }

  function onClickCommentFix(event: any) {
    if (commentFix === true) {
      setCommentFix(false)
      setBoardCommentId('')
    } else {
      setCommentFix(true)
      setBoardCommentId(event.target.id)
    }
    console.log(event)
  }

  async function onClickLike() {
    try {
      const result = await likeBoard({
        variables: {
          boardId: boardId
        }
      })
      setLikeDislikeNumber({
        ...likeDislikeNumber,
        likeNumber: Number(result.data?.likeBoard)
      })
      console.log(result)
    } catch (error) {
      alert(error.message)
    }
  }

  async function onClickDislike() {
    try {
      const result = await dislikeBoard({
        variables: {
          boardId: boardId
        }
      })
      setLikeDislikeNumber({
        ...likeDislikeNumber,
        dislikeNumber: Number(result.data?.dislikeBoard)
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const CREATE_LIKE = gql`
    mutation likeBoard($boardId: ID!) {
      likeBoard(boardId: $boardId)
    }
  `
  const CREATE_DISLIKE = gql`
    mutation dislikeBoard($boardId: ID!) {
      dislikeBoard(boardId: $boardId)
    }
  `
  const [dislikeBoard] =
    useMutation<IMutation, IMutationDislikeBoardArgs>(CREATE_DISLIKE)

  const [likeBoard] =
    useMutation<IMutation, IMutationLikeBoardArgs>(CREATE_LIKE)

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

  const UPDATE_BOARDCOMMENT = gql`
    mutation updateBoardComment(
      $updateBoardCommentInput: UpdateBoardCommentInput!
      $password: String
      $boardCommentId: ID!
    ) {
      updateBoardComment(
        updateBoardCommentInput: $updateBoardCommentInput
        password: $password
        boardCommentId: $boardCommentId
      ) {
        writer
        contents
        rating
        createdAt
      }
    }
  `
  const [updateBoardComment] =
    useMutation<IMutation, IMutationUpdateBoardCommentArgs>(UPDATE_BOARDCOMMENT)

  const [createBoardComment] =
    useMutation<IMutation, IMutationCreateBoardCommentArgs>(CREATE_BOARDCOMMENT)

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
  const { data: commentData, refetch } = useQuery<
    IQuery,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARDCOMMENT, {
    variables: {
      boardId: String(router.query._id)
    }
  })

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
      onClickCommentFix={onClickCommentFix}
      commentFix={commentFix}
      onClickCommentStarRating={onClickCommentStarRating}
      onChangeCommentFixBox={onChangeCommentFixBox}
      onChangeFixNamePassword={onChangeFixNamePassword}
      commentTextNumber={commentTextNumber}
      commentFixNumberofStars={commentFixNumberofStars}
      CommentFixRegisterButton={CommentFixRegisterButton}
      onClickLike={onClickLike}
      likeDislikeNumber={likeDislikeNumber}
      onClickDislike={onClickDislike}
    />
  )
}
