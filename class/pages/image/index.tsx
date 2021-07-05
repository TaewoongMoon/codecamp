import { gql, useMutation } from '@apollo/client'
import { useRef, useState } from 'react'

const ImagePage = () => {
  const [myImage, setMyImage] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState('')
  const onChangeFile = (event: any) => {
    const file = event.target.files[0]
    if (!file.type.includes('png')) {
      alert('png파일만 가능합니다')
      return
    }
    if (file.size < 5 * 1024 * 1024) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        if (event.target) setMyImage(String(event.target.result))
      }
    } else {
      alert('파일이 너무 큽니다(5MB 제한!)')
      return
    }
    setFile(file)
  }

  const onClickImage = () => {
    fileRef.current.click()
  }
  const onClickImageFile = async () => {
    try {
      const start = new Date().getTime()
      const result = await Promise.all([
        uploadFileMutation({ variables: { file: file } }),
        uploadFileMutation({ variables: { file: file } }),
        uploadFileMutation({ variables: { file: file } }),
        uploadFileMutation({ variables: { file: file } }),
        uploadFileMutation({ variables: { file: file } })
      ])
      console.log(result)
      const end = new Date().getTime()
      console.log(end - start)
      alert('전송완료')
    } catch (error) {
      alert(error.message)
    }
  }

  const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
      uploadFile(file: $file) {
        _id
        url
        isUsed
        createdAt
      }
    }
  `
  const [uploadFileMutation] = useMutation(UPLOAD_FILE)

  return (
    <div>
      <button onClick={onClickImage}>이미지</button>
      <input
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        style={{ display: 'none' }}
      />
      <img src={myImage} style={{ width: '1000px', height: '600px' }} />
      <button onClick={onClickImageFile}>서버에 파일전송하기</button>
    </div>
  )
}

export default ImagePage
