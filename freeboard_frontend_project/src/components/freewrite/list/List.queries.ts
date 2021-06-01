import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      title
      createdAt
      writer
      _id
    }
  }
`

export const FETCH_BOARDSCOUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`
