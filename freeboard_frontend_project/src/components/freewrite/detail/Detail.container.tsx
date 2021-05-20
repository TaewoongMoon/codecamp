import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchBoardArgs
} from '../../../commons/types/generated/types'
import DetailBoardUI from './Detail.presenter'

export default function DetailBoardContainer () {
  const router = useRouter()

  console.log(router.query._id)

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

  console.log('data', data)

  const Year = String(new Date(data?.fetchBoard.createdAt).getFullYear())
  const Month = String(
    new Date(data?.fetchBoard.createdAt).getMonth()
  ).padStart(2, '0')
  const Day = String(new Date(data?.fetchBoard.createdAt).getDay()).padStart(
    2,
    '0'
  )

  return <DetailBoardUI data={data} Year={Year} Month={Month} Day={Day} />
}
