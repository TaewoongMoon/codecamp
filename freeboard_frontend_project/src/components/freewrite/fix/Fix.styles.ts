import styled from '@emotion/styled'
import Modal from '../modal/Modal.container'

export const TotalBox = styled.div`
  width: 100%;
  height: 100%;
`
export const Wrapper = styled.div`
  width: 1200px;
  height: 1847px;
  border: 1px solid black;
  padding-top: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Label = styled.div`
  padding-bottom: 16px;
`

export const InputWrapper = styled.div`
  padding-top: 40px;
`

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const SearchButton = styled(Modal)``

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  cursor: pointer;
`

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`

export const RadioButton = styled.input`
  cursor: pointer;
`

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  border: none;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`
