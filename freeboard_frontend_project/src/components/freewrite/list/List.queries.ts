import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      title
      createdAt
      writer
      _id
    }
  }
`

export const FETCH_BOARDSCOUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`

export const FETCH_BOARDSOFTHEBEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      title
      writer
      createdAt
      likeCount
    }
  }
`
