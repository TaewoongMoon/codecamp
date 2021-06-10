import styled from '@emotion/styled'

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  cursor: pointer;
`
export const ImageButtonInput = styled.input`
  width: 100px;
  height: 50px;
  display: none;
`

export const UploadImageContainer = styled.div`
  max-width: 78px;
  height: 78px;
  margin-right: 24px;
  position: relative;
  border: 10px solid black;
`
export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
`

export const CancelImage = styled.div`
  position: absolute;
  left: 65px;
  bottom: 40px;
  max-width: 20px;
  width: 100%;
  height: 20px;
  padding-left: 1px;
  font-size: 10px;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: gray;
  cursor: pointer;
`
