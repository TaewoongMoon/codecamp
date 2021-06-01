import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs
} from '../../../commons/types/generated/types'
import CommentBoard from './Comment.presenter'
import {
  CREATE_BOARDCOMMENT,
  UPDATE_BOARDCOMMENT,
  FETCH_BOARDCOMMENT
} from './Comment.queries'

export default function CommentPage() {
  const router = useRouter()
  const boardId = String(router.query._id)
  const [page, setPage] = useState(1)
  const [textNumber, setTextNumber] = useState({
    contents: ''
  })
  const tempStars = [false, false, false, false, false]
  const [numberofStars, setNumberofStars] = useState(tempStars)
  const tempRating = numberofStars.filter((data) => data === true).length
  const [commentFix, setCommentFix] = useState(false)
  const [boardCommentId, setBoardCommentId] = useState('')
  const [commentFixNumberofStars, setCommentFixNumberofStars] =
    useState(tempStars)
  const [commentTextNumber, setCommentTextNumber] = useState({
    commentFixContents: 0
  })
  const [registerPackage, setRegisterPackage] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0
  })
  const [commentFixRegisterPackage, setCommentFixRegisterPackage] = useState({
    commentFixWriter: '',
    commentFixPassword: '',
    commentFixContents: '',
    commentFixRating: 0
  })

  const commentTempRating = commentFixNumberofStars.filter(
    (data) => data === true
  ).length

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
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            ...registerPackage
          },
          boardId: boardId
        }
      })
      location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  async function CommentFixRegisterButton() {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: commentFixRegisterPackage.commentFixContents,
            rating: commentFixRegisterPackage.commentFixRating
          },
          boardCommentId: boardCommentId
        }
      })
      refetch()
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

  const onLoadMore = () => {
    console.log('asdf')
    fetchMore({
      variables: {
        boardId: String(router.query._id),
        page: page + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return Object.assign({}, prev, {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments
          ]
        })
      }
    })
    setPage((prev) => prev + 1)
  }

  const [updateBoardComment] =
    useMutation<IMutation, IMutationUpdateBoardCommentArgs>(UPDATE_BOARDCOMMENT)

  const [createBoardComment] =
    useMutation<IMutation, IMutationCreateBoardCommentArgs>(CREATE_BOARDCOMMENT)
  const {
    data: commentData,
    refetch,
    fetchMore
  } = useQuery<IQuery, IQueryFetchBoardCommentsArgs>(FETCH_BOARDCOMMENT, {
    variables: {
      boardId: String(router.query._id),
      page: page
    }
  })

  console.log(commentData?.fetchBoardComments.length)

  return (
    <CommentBoard
      onClickStarRating={onClickStarRating}
      numberofStars={numberofStars}
      onChangeCommentBox={onChangeCommentBox}
      textNumber={textNumber}
      CommentRegisterButton={CommentRegisterButton}
      onChangeNamePassword={onChangeNamePassword}
      commentData={commentData}
      commentFix={commentFix}
      onClickCommentFix={onClickCommentFix}
      onClickCommentStarRating={onClickCommentStarRating}
      onChangeCommentFixBox={onChangeCommentFixBox}
      onChangeFixNamePassword={onChangeFixNamePassword}
      commentTextNumber={commentTextNumber}
      commentFixNumberofStars={commentFixNumberofStars}
      CommentFixRegisterButton={CommentFixRegisterButton}
      fetchMore={fetchMore}
      onLoadMore={onLoadMore}
    />
  )
}
