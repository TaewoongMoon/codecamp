import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function MutationPage () {
  // const[writer, setWriter] = useState('')
  // const[password, setPassword] = useState('')
  // const[title, setTitle] = useState('')
  // const[content, setContent] = useState('')

  const [package22, setPackage] = useState({
    writer: '',
    password: '',
    title: '',
    content: ''
  })

  const CREATE_BOARD = gql`
    mutation createBoard(
      $writer: String
      $password: String
      $title: String
      $content: String
    ) {
      createBoard(
        writer: $writer
        password: $password
        title: $title
        contents: $content
      ) {
        message
      }
    }
  `
  const onChangeInput = (event) => {
    const data = {
      ...package22,
      [event.target.name]: event.target.value
    }

    setPackage(data)
    console.log(data)
  }

  const router = useRouter()
  const goBack = () => {
    router.back()
  }

  // const onChangeWriter = (event) => {
  //     const temp = event.target.value;
  //     setPackage()
  // }

  // const onChangePassword = (event) => {
  //     const temp = event.target.value;
  //     setPassword(temp);
  // }

  // const onChangeTitle = (event) => {
  //     const temp = event.target.value;
  //     setTitle(temp);
  // }

  // const onChangeContent = (event) => {
  //     const temp = event.target.value;
  //     setContent(temp);
  // }

  const [createBoard] = useMutation(CREATE_BOARD)

  async function onClickPost () {
    try {
      const result = await createBoard({
        variables: {
          ...package22
        }
      })
      const message = result.data.createBoard.message
      alert(message)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      작성자: <input type="text" name="writer" onChange={onChangeInput}></input>
      비밀번호:{' '}
      <input type="password" name="password" onChange={onChangeInput}></input>
      제목: <input type="text" name="title" onChange={onChangeInput}></input>
      내용: <input type="text" name="content" onChange={onChangeInput}></input>
      <button onClick={onClickPost}>게시물 등록하기</button>
      <button onClick={goBack}>뒤로가기</button>
    </>
  )
}
