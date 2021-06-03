import {} from '@apollo/client'
import { useRef, useState } from 'react'
import { checkImage } from '../../src/commons/libraries/validation'
import {} from '../../src/commons/types/generated/types'

// @ts-ignore
import LazyLoad from 'react-lazy-load'

const Image2Page = () => {
  const [fileUrl, setFileUrl] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)
  const onClickButton = () => {
    fileRef.current?.click()
  }
  const onChangeFile = async (event: any) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event: any) => {
      setFileUrl(String(event.target.result))
    }

    if (!checkImage(file)) return

    //     try {
    //       const { data } = await uploadFile({
    //         variables: { file: file }
    //       })
    //       setFileUrl(`https://storage.cloud.google.com/${data?.uploadFile.url}`)
    //     } catch (error) {
    //       alert(error.message)
    //     }
  }

  return (
    <>
      <button onClick={onClickButton}>업로드!!</button>
      <input type="file" onChange={onChangeFile} ref={fileRef && fileRef} />
      <LazyLoad>
        <img
          src={fileUrl}
          style={{ width: '200px', height: '200px', display: 'none' }}
        />
      </LazyLoad>
      <img
        src={fileUrl}
        style={{ width: '200px', height: '200px', display: 'none' }}
      />
      <img
        src={fileUrl}
        style={{ width: '200px', height: '200px', display: 'none' }}
      />
      <img
        src={fileUrl}
        style={{ width: '200px', height: '200px', display: 'none' }}
      />
    </>
  )
}

export default Image2Page
