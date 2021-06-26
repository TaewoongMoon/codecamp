import { gql } from '@apollo/client'

export const FETCH_USERLOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      createdAt
    }
  }
`
