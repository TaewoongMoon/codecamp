import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 511px;
`

export const BoxWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid black;
  padding-left: 40px;
  padding-right: 63px;
`

export const HeaderNumber = styled.div`
  max-width: 34px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  font-style: bold;
  color: #000000;
  text-align: center;
`
export const HeaderTitle = styled.div`
  max-width: 34px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  font-style: bold;
  color: #000000;
  text-align: center;
`
export const HeaderWriter = styled.div`
  max-width: 50px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  color: #000000;
  font-style: bold;
`
export const HeaderDate = styled.div`
  max-width: 34px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  font-style: bold;
  color: #000000;
`

export const BodyWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #bdbdbd;
  padding-left: 48px;
`

export const BodyNumber = styled.div`
  max-width: 18px;
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-style: bold;
  color: #4f4f4f4f;
  text-align: center;
`
export const BodyTitle = styled.div`
  max-width: 900px;
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-style: bold;
  color: #4f4f4f4f;
  text-align: center;
`
export const BodyWriter = styled.div`
  max-width: 283px;
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-style: bold;
  color: #4f4f4f4f;
  text-align: left;
`
export const BodyDate = styled.div`
  max-width: 170px;
  width: 100%;
  font-size: 16px;
  font-style: bold;
  color: #4f4f4f4f;
  text-align: center;
`

export const HrLine = styled.div`
  border-top: 1px solid black;
  max-width: 1200px;
`

export const SelectEraseButtonWrapper = styled.div`
  padding-top: 30px;
  max-width: 250px;
  width: 100%;
  height: 100px;
  display: flex;
`

export const SelectEraseButton = styled.button`
  max-width: 250px;
  width: 100%;
  height: 40px;
  background-color: red;
  text-align: center;
  color: white;
  font-style: bold;
  border-collapse: collapse;
  border: 0px;
  font-size: 20px;
  border-radius: 125px;
  cursor: pointer;
`
interface IProps {
  isActive: boolean
}
export const Page = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isActive ? 'red' : 'black')};
`
export const PaginationWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 92px;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
`
export const RegisterButton = styled.button`
  max-width: 171px;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  outline: none;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  ${'&: hover'} {
    background-color: #000000;
    color: #ffffff;
  }
`
export const RegisterTextWrapper = styled.div`
  max-width: 171px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 19px;
  padding-right: 16px;
`

export const RegisterPencilImage = styled.img`
  max-width: 18px;
  width: 18px;
  height: 18px;
`

export const RegisterText = styled.div`
  max-width: 107px;
  width: 100%;
  font-size: 16px;
  height: 24px;
  padding-top: 4px;
`
