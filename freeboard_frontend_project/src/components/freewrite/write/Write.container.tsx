import { ChangeEvent, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { WriteUI } from './Write.presenter'

export default function WriteContainer () {
  const router = useRouter()
  console.log(router.query)
  const [buttonColor, setButtonColor] = useState(true)

  const [boardWritePackage, setBoardWritePackage] = useState({
    headWriter: '',
    headPassword: '',
    headTitle: '',
    headContent: '',
    simpleAddress: '',
    detailAddress: '',
    headYoutube: '',
    headOption: ''
  })

  const CREATE_BOARD = gql`
    mutation createBoard(
      $headWriter: String
      $headPassword: String
      $headTitle: String!
      $headContent: String!
    ) {
      createBoard(
        createBoardInput: {
          writer: $headWriter
          password: $headPassword
          title: $headTitle
          contents: $headContent
        }
      ) {
        _id
        writer
        title
        contents
      }
    }
  `

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const data = {
      ...boardWritePackage,
      [event.target.name]: event.target.value
    }

    setBoardWritePackage(data)

    console.log(boardWritePackage)

    if (
      boardWritePackage.headWriter.length > 0 &&
      boardWritePackage.headPassword.length > 0 &&
      boardWritePackage.headTitle.length > 0
    ) {
      setButtonColor(false)
    } else {
      setButtonColor(true)
    }
  }

  // const WriterChange = (event) => {
  //   const temp = event.target.value;
  //   setWriter(temp);
  // }

  // const PasswordChange = (event) => {
  //   const temp = event.target.value;
  //   setPassword(temp);
  // }

  // const TitleChange = (event) => {
  //   const temp = event.target.value;
  //   setTitle(temp);
  // }

  // const ContentChange = (event) => {
  //   const temp = event.target.value;
  //   setContent(temp);
  // }

  // const AddressChangeSimple = (event) =>{
  //   const temp = event.target.value;
  //   setSimpleAddress(temp);
  // }

  // const AddressChangeDetail = (event) => {
  //   const temp = event.target.value;
  //   setDetailAddress(temp);
  // }

  // const YoutubeChange = (event) => {
  //   const temp = event.target.value;
  //   setYoutube(temp);
  // }

  // const SettingOption = (event) => {
  //   // setOption(OptionBtnName)
  //   console.log(event.target.value)
  //   console.log(event.target.name)
  // }

  const [createBoard] = useMutation(CREATE_BOARD)

  const RegisterButton = async () => {
    if (
      boardWritePackage.headWriter.length > 3 ||
      boardWritePackage.headWriter.length < 1
    ) {
      alert('작성자 이름이 잘못되었습니다.')
    } else if (boardWritePackage.headPassword.length < 8) {
      alert('비밀번호의 길이가 8자이하입니다.')
    } else if (boardWritePackage.headTitle.length < 1) {
      alert('제목을 작성하여주십시오.')
    } else if (boardWritePackage.headContent.length < 20) {
      alert('내용의 길이가 너무 짦습니다.')
    } else if (boardWritePackage.simpleAddress.length < 1) {
      alert('주소를 작성하여 주십시오.')
    } else if (boardWritePackage.detailAddress.length < 1) {
      alert('주소를 작성하여 주십시오.')
    } else if (boardWritePackage.headYoutube.length < 1) {
      alert('링크가정확하지않습니다.')
    } else if (boardWritePackage.headOption.length < 1) {
      alert('메인설정을 선택하여 주십시오.')
    } else {
      try {
        const result = await createBoard({
          variables: {
            headWriter: boardWritePackage.headWriter,
            headPassword: boardWritePackage.headPassword,
            headTitle: boardWritePackage.headTitle,
            headContent: boardWritePackage.headContent
          }
        })
        const message = '입력을 완료하였습니다.'
        alert(message)
        const idVal = result.data.createBoard._id
        router.push(`/board/detailwrite/${idVal}`)
      } catch (error) {
        alert(error.message)
      }
    }
  }

  return (
    <WriteUI
      onChangeInput={onChangeInput}
      RegisterButton={RegisterButton}
      buttonColor={buttonColor}
    />
  )
}
