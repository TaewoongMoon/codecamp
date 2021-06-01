import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs
} from '../../../commons/types/generated/types'
import MainBoardPage from './Body.presenter'
import { CREATE_DISLIKE, CREATE_LIKE, FETCH_BOARD } from './Body.queries'

export default function BodyPage() {
  const router = useRouter()
  const boardId = String(router.query._id)
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

  function onClickFixPage() {
    router.push(`/board/detailwrite/${boardId}/fix`)
  }
  function onClickListPage() {
    router.push(`/board/detailwrite/${boardId}/list`)
  }

  const [dislikeBoard] =
    useMutation<IMutation, IMutationDislikeBoardArgs>(CREATE_DISLIKE)

  const [likeBoard] =
    useMutation<IMutation, IMutationLikeBoardArgs>(CREATE_LIKE)
  const Year = String(new Date(boardData?.fetchBoard.createdAt).getFullYear())
  const Month = String(
    new Date(boardData?.fetchBoard.createdAt).getMonth()
  ).padStart(2, '0')
  const Day = String(
    new Date(boardData?.fetchBoard.createdAt).getDay()
  ).padStart(2, '0')
  return (
    <MainBoardPage
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      Year={Year}
      Month={Month}
      Day={Day}
      data={boardData}
      likeDislikeNumber={likeDislikeNumber}
      onClickFixPage={onClickFixPage}
      onClickListPage={onClickListPage}
    />
  )
}
