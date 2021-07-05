import { gql } from '@apollo/client'

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      useditemAddress {
        id
        zipcode
        address
      }
      createdAt
    }
  }
`
