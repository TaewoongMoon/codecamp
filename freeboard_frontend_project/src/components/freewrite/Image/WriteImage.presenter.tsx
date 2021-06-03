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
  fileUrl: any
  buttonOrImage: any
  onClickCancelButton: any
  id: any
}

export const WriteImageUI = (props: Iprops) => {
  return (
    <>
      {!props?.buttonOrImage ? (
        <>
          <UploadButton onClick={props?.onClickImage} id={props.id}>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
        </>
      ) : (
        <>
          <UploadImageContainer>
            <CancelImage onClick={props.onClickCancelButton} id={props.id}>
              X
            </CancelImage>
            <UploadImage src={props.fileUrl} />
          </UploadImageContainer>
        </>
      )}
      <ImageButtonInput
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
        id={props.id}
      />
    </>
  )
}
