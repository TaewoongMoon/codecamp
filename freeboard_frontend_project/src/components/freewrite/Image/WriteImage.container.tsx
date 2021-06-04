import { useMutation } from '@apollo/client'
import { useRef } from 'react'
import { checkImage } from '../../../commons/libraries/validation'
import {
  IMutation,
  IMutationUploadFileArgs
} from '../../../commons/types/generated/types'
import { WriteImageUI } from './WriteImage.presenter'
import { UPLOAD_FILE } from './WriteImage.queries'

interface Iprops {
  setFileUrl: any
  data: any
  fileUrl: any
}

export const WriteImage = (props: Iprops) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const onChangeFile = (event: any) => {
    const file = event.target.files[0]
    if (!checkImage(file)) return

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event: any) => {
      props.setFileUrl((prev: any) => [...prev, String(event.target.result)])
    }
    event.target.value = ''
  }

  const onClickImage = (event: any) => {
    fileRef.current?.click()
  }

  const onClickCancelButton = (event: any) => {
    const aaa = [...props.fileUrl]
    aaa?.splice(aaa.indexOf(props.data), 1)
    props.setFileUrl(aaa)
  }

  const [uploadFile] =
    useMutation<IMutation, IMutationUploadFileArgs>(UPLOAD_FILE)

  return (
    <WriteImageUI
      fileRef={fileRef}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
      onClickCancelButton={onClickCancelButton}
      data={props.data}
    />
  )
}
