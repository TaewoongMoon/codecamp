import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
// import { useMutation } from '@apollo/client'
// import { useState } from 'react'
const EditorPage = () => {
  //   const [createBoard] = useMutation(CREATE_BOARD)
  //   const [contents, setContents] = useState('')
  const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
  })

  //   const onChangeEditor = (contents) => {
  //     setContents(contents)
  //   }

  //   const onClickSubmit = () => {
  //     try {
  //     } catch (error) {
  //       alert(error.message)
  //     }
  //   }
  // next.js에서 라이브러리를 가져올 때 서버사이드에서 문제가 생길경우에 다음과 같이 정의해줘야한다.
  //   if (typeof window === undefined) return <div></div>

  // 버튼을 여러번 클릭하게되서 mutation을 한 번만 날리게끔 하려면
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // 만들어주고 disabled =
  return (
    <>
      <ReactQuill />
      {/* <div>{data?.fetchBoard.contents}</div> */}
      {/* 이렇게 한다면 tag들이 그대로 딸려져 나온다. 이렇게 되면 문제점이 발생한다. */}
      {/* <div dangerouslySetInnerHTML ={{ _html : data?.fetchBoard.contents}</div> */}
    </>
  )
}

export default EditorPage
