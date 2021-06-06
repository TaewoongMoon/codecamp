import { useMutation } from '@apollo/client'
import { useRef, useState } from 'react'
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
  commentUrl: any
  setCommentUrl: any
}

export const WriteImage = (props: Iprops) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const onChangeFile = async (event: any) => {
    try {
      const file = event.target.files[0]
      if (!checkImage(file)) return
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event: any) => {
        props.setFileUrl((prev: any) => [...prev, String(event.target.result)])
      }
      event.target.value = ''
      const result = await uploadFile({
        variables: {
          file: file
        }
      })
      props.setCommentUrl((prev: any) => [
        ...prev,
        `https://storage.cloud.google.com/${result.data?.uploadFile.url}`
      ])
      console.log(result.data?.uploadFile.url)
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickImage = (event: any) => {
    fileRef.current?.click()
  }

  const onClickCancelButton = (event: any) => {
    const aaaa = [...props.fileUrl]
    aaaa?.splice(aaaa.indexOf(props.data), 1)
    props.setFileUrl(aaaa)
    const bbb = [...props.commentUrl]
    bbb.pop()
    props.setCommentUrl(bbb)
  }

  console.log(props.commentUrl)

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
