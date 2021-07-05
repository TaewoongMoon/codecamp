import styled from '@emotion/styled'
import { Card } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

export const TotalWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const CardBigWrapper = styled.div`
  width: 100%;
  height: 297px;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const BestCards = styled(Card)``

export const BestTitleWrapper = styled.div`
  width: 100%;
  height: 47px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
`
export const BestTitleBlock1 = styled.div`
  width: 5%;
  height: 27px;
`

export const BestRealTitle = styled.div`
  width: 95%;
  height: 27px;
  font-size: 18px;
  font-weight: bold;
`

export const LikeNameWrapper = styled.div`
  max-width: 100%;
  height: 44px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`

export const LikeNameLeftWrapper = styled.div`
  max-width: 200px;
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PersonImage = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
`

export const PersonName = styled.div`
  max-width: 410px;
  width: 100%;
  height: 24px;
  align-items: center;
  font-size: 16px;
  margin-left: 5px;
`

export const DateWrapper = styled.div`
  width: 100%;
  height: 30px;
  padding-top: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`

export const DateLeftWrapper = styled.div`
  max-width: 110px;
  width: 100%;
  height: 18px;
  font-size: 12px;
  color: #828282;
`
export const DateRightWrapper = styled.div`
  max-width: 27px;
  width: 100%;
  height: 24px;
  font-size: 16px;
`

export const LikeNameRightWrapper = styled.img`
  max-width: 20px;
  width: 100%;
  height: 18px;
`

export const CardMiddleWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 257px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 41px;
`
export const BestListWrapper = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const BestList = styled.div`
  max-width: 208px;
  width: 100%;
  height: 42px;
  color: #000000;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
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

export const SearchSecWrapper = styled.div`
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const SearchMiddleWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;
`
export const SearchBoxWrapper = styled.div`
  max-width: 588px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  border-radius: 10px;
`
export const SearchImageWrapper = styled.div`
  max-width: 48px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  padding-left: 19px;
  flex-direction: row;
  align-items: center;
`

export const SearchImage = styled.img`
  max-width: 17.49px;
  height: 17.49px;
  width: 100%;
`

export const SearchInputBox = styled.input`
  color: #000000;
  font-size: 16px;
  text-align: left;
  width: 100%;
  background-color: #f2f2f2;
  outline: none;
  border: none;
  ::placeholder {
    color: #000000;
  }
  border-radius: 10px;
`

export const CalendarWrapper = styled.div`
  max-width: 282px;
  width: 100%;
  height: 52px;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`
export const Calendar2Wrapper = styled(MuiPickersUtilsProvider)``
export const SearchButton = styled.button`
  max-width: 94px;
  width: 100%;
  height: 52px;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`

export const TestWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
`
