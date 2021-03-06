import { ChangeEvent, useState } from 'react'
import { useMutation, gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FixUI } from './Fix.presenter'
import {
  IMutation,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs
} from '../../../commons/types/generated/types'

export default function FixContainer() {
  const router = useRouter()
  const [buttonColor, setButtonColor] = useState(true)
  const [addressDetails, setAddressDetails] = useState({
    zipcode: '',
    address: ''
  })

  const boardId = router.query._id

  const [boardWritePackage, setBoardWritePackage] = useState({
    writer: '',
    title: '',
    contents: '',
    youtubeUrl: '',
    password: '',
    boardId: '',
    simpleAddress: '',
    detailAddress: '',
    headOption: ''
  })

  const UPDATE_BOARD = gql`
    mutation updateBoard(
      $updateBoardInput: UpdateBoardInput!
      $password: String
      $boardId: ID!
    ) {
      updateBoard(
        updateBoardInput: $updateBoardInput
        password: $password
        boardId: $boardId
      ) {
        _id
        writer
        title
        contents
        youtubeUrl
        createdAt
      }
    }
  `
  const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        writer
        title
        contents
        createdAt
        likeCount
        dislikeCount
        youtubeUrl
      }
    }
  `

  const { refetch } = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query._id)
    }
  })
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const data = {
      ...boardWritePackage,
      [event.target.name]: event.target.value
    }

    setBoardWritePackage(data)

    if (
      boardWritePackage.writer.length > 0 &&
      boardWritePackage.password.length > 0 &&
      boardWritePackage.title.length > 0
    ) {
      setButtonColor(false)
    } else {
      setButtonColor(true)
    }
  }

  const handleComplete = (data: any) => {
    setAddressDetails({
      ...addressDetails,
      zipcode: String(data.zonecode),
      address: String(data.address)
    })
  }

  const onClickCancel = () => {
    router.back()
  }

  const [updateBoard] =
    useMutation<IMutation, IMutationUpdateBoardArgs>(UPDATE_BOARD)

  const RegisterButton = async () => {
    if (
      boardWritePackage.writer.length > 3 ||
      boardWritePackage.writer.length < 1
    ) {
      alert('????????? ????????? ?????????????????????.')
    } else if (boardWritePackage.password.length < 8) {
      alert('??????????????? ????????? 8??????????????????.')
    } else if (boardWritePackage.title.length < 1) {
      alert('????????? ????????????????????????.')
    } else if (boardWritePackage.contents.length < 20) {
      alert('????????? ????????? ?????? ????????????.')
    } else if (
      boardWritePackage.simpleAddress.length ||
      addressDetails.address.length < 1
    ) {
      alert('????????? ???????????? ????????????.')
    } else if (boardWritePackage.detailAddress.length < 1) {
      alert('????????? ???????????? ????????????.')
    } else if (boardWritePackage.youtubeUrl.length < 1) {
      alert('?????????????????????????????????.')
    } else if (boardWritePackage.headOption.length < 1) {
      alert('??????????????? ???????????? ????????????.')
    } else {
      try {
        const result = await updateBoard({
          variables: {
            updateBoardInput: {
              title: boardWritePackage.title,
              contents: boardWritePackage.contents,
              youtubeUrl: boardWritePackage.youtubeUrl
            },
            password: boardWritePackage.password,
            boardId: String(boardId)
          }
        })
        const message = '????????? ?????????????????????.'
        alert(message)
        const idVal = result.data?.updateBoard._id
        refetch()
        router.push(`/board/detailwrite/${idVal}`)
      } catch (error) {
        alert(error.message)
      }
    }
  }

  return (
    <FixUI
      onChangeInput={onChangeInput}
      RegisterButton={RegisterButton}
      buttonColor={buttonColor}
      handleComplete={handleComplete}
      addressDetails={addressDetails}
      onClickCancel={onClickCancel}
    />
  )
}
