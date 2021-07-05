import { RefObject } from 'react'
import {
  UploadButton,
  ImageButtonInput,
  UploadImage,
  CancelImage,
  UploadImageContainer
} from './WriteImage.styles'

interface Iprops {
  fileRef: RefObject<HTMLInputElement>
  onClickImage: any
  onChangeFile: any
  data: any
  onClickCancelButton: any
}

export const WriteImageUI = (props: Iprops) => {
  return (
    <>
      {!props.data ? (
        <>
          <UploadButton onClick={props?.onClickImage}>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
        </>
      ) : (
        <>
          <UploadImageContainer>
            <CancelImage onClick={props.onClickCancelButton}>X</CancelImage>
            <UploadImage src={props.data} />
          </UploadImageContainer>
        </>
      )}
      <ImageButtonInput
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )
}
