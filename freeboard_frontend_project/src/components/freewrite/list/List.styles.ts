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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const BodyNumberText = styled.span`
  max-width: 18px;
  height: 24px;
  font-size: 16px;
  font-style: bold;
  color: #4f4f4f4f;
  ${'&: hover'} {
    color: #000000;
    border-bottom: 1px solid black;
  }
  cursor: pointer;
`

export const BodyTitle = styled.div`
  max-width: 800px;
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const BodyText = styled.span`
  max-width: 800px;
  height: 24px;
  font-size: 16px;
  font-style: bold;
  color: #4f4f4f4f;
  ${'&: hover'} {
    color: #000000;
    border-bottom: 1px solid black;
  }
  cursor: pointer;
`

export const BodyWriter = styled.div`
  max-width: 288px;
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const BodyWriterText = styled.div`
  max-width: 288px;
  height: 24px;
  font-size: 16px;
  color: #4f4f4f4f;
  ${'&: hover'} {
    color: #000000;
    border-bottom: 1px solid black;
  }
  cursor: pointer;
`

export const BodyDate = styled.div`
  max-width: 170px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const BodyDateText = styled.span`
  max-width: 170px;
  font-size: 16px;
  font-style: bold;
  color: #4f4f4f4f;
  text-align: center;
  ${'&: hover'} {
    color: #000000;
    border-bottom: 1px solid black;
  }
  cursor: pointer;
`

export const HrLine = styled.div`
  border-top: 1px solid black;
  max-width: 1200px;
`

export const BottomRegisterButtonBigWrapper = styled.div`
  padding-top: 40px;
  max-width: 1200px;
  width: 100%;
  height: 92px;
  display: flex;
  flex-direction: row;
`
export const BottomRegisterButtonMiddleLeftWrapper = styled.div`
  max-width: 1029px;
  width: 100%;
  height: 92px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const BottomRegisterButtonSmallLeftWrapper = styled.div`
  max-width: 1029px;
  height: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const BottomRegisterButtonLeftArrow = styled.img`
  max-width: 7.41px;
  width: 100%;
  height: 12px;
  margin-right: 8.59px;
`
export const BottomRegisterButtonRightArrow = styled.img`
  max-width: 7.41px;
  width: 100%;
  height: 12px;
  margin-left: 8.59px;
`

export const BottomRegisterButtonMiddleRightWrapper = styled.div`
  max-width: 171px;
  width: 100%;
  height: 92px;
  display: flex;
  align-items: center;
`

interface IProps {
  isActive: boolean
}
export const Page = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isActive ? '#FFD600' : '#000000')};
  border-bottom: ${(props: IProps) => props.isActive && '1px solid #FFD600'};
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
  cursor: pointer;
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
