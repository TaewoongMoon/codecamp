import { gql } from '@apollo/client'

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      buyer {
        _id
        email
        name
      }
      seller {
        email
        name
        createdAt
        updatedAt
        deletedAt
      }
      createdAt
    }
  }
`
export const FETCH_USEDITEMQUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`

export const FETCH_USEDITEMQUESTIONANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestions(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      user {
        name
      }
    }
  }
`
