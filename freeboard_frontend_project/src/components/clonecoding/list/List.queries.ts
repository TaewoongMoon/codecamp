import { gql } from '@apollo/client'

export const FETCH_USEDITEMSOFTHEBEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      price
      createdAt
      tags
    }
  }
`

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`
