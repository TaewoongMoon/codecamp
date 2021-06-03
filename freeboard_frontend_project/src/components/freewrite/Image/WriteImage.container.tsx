import {} from '@apollo/client'
import { useRef, useState } from 'react'
import { checkImage } from '../../../commons/libraries/validation'
import {} from '../../../commons/types/generated/types'
import { WriteImageUI } from './WriteImage.presenter'
import {} from './WriteImage.queries'

interface Iprops {
  id: any
}

export const WriteImage = (props: Iprops) => {
  const [fileUrl, setFileUrl] = useState<string>()
  const [buttonOrImage, setButtonOrImage] = useState<boolean>(false)
  const [temp, setTemp] = useState<boolean[]>([false, false, false])
  const fileRef = useRef<HTMLInputElement>(null)

  const onChangeFile = (event: any) => {
    const file = event.target.files[0]
    if (!checkImage(file)) return

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event: any) => {
      setFileUrl(String(event.target.result))
      setButtonOrImage(true)
      setTemp([true, true, true])
    }
    event.target.value = ''
  }

  const onClickImage = (event: any) => {
    fileRef.current?.click()
  }

  const onClickCancelButton = (event: any) => {
    setButtonOrImage(false)
    console.log(event.target.id)
  }
  console.log(temp)

  return (
    <WriteImageUI
      fileRef={fileRef}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
      fileUrl={fileUrl}
      buttonOrImage={buttonOrImage}
      onClickCancelButton={onClickCancelButton}
      id={props.id}
    />
  )
}
