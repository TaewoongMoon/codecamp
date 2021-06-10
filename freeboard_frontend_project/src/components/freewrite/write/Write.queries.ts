import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard(
    $headWriter: String
    $headPassword: String
    $headTitle: String!
    $headContent: String!
    $headYoutube: String
    $commentUrl: [String!]
  ) {
    createBoard(
      createBoardInput: {
        writer: $headWriter
        password: $headPassword
        title: $headTitle
        contents: $headContent
        youtubeUrl: $headYoutube
        images: $commentUrl
      }
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
    }
  }
`
