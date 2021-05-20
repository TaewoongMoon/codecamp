import axios from 'axios'
import { useState } from 'react'
export default function AsyncAwaitPage (props) {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')

  async function handleClickGetPost () {
    console.log('게시물 가져와주세요.')
    const data = await axios.get('https://koreanjson.com/posts/1')
    console.log(data)
    const Duration = new Date(data.data.createdAt)
    const Year = String(Duration.getFullYear())
    const Month = String(Duration.getMonth() + 1).padStart(2, '0')
    const Day = String(Duration.getDay()).padStart(2, '0')

    setId(`${String(data.data.UserId)}번`)
    setTitle(`제목: ${data.data.title}`)
    setContent(`내용:${data.data.content}`)
    setDate(`작성일:${Year}.${Month}.${Day}`)
  }

  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{date}</div>
      <button onClick={handleClickGetPost}>게시물 가져오기</button>
    </>
  )
}
