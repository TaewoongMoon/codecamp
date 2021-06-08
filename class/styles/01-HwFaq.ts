import styled from '@emotion/styled'
import { WifiOutlined, SendOutlined, UsbOutlined } from '@ant-design/icons'
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
`

export const Wifi = styled(WifiOutlined)`
  font-size: 21px;
  margin-right: 18px;
`

export const Network = styled(SendOutlined)`
  font-size: 21px;
  margin-right: 18px;
`

export const Battery = styled(UsbOutlined)`
  font-size: 23px;
  margin-right: 16px;
`
export const TimeWrapper = styled.div`
  width: 58px;
  height: 30px;
  padding-top: 3px;
`
export const Timer = styled.span`
  font-size: 23px;
`

export const Rectangle = styled.div`
  width: 640px;
  height: 1290px;
  background-color: #ffffff;
  border: 1px solid black;
`

export const StatusBar = styled.div`
  width: 640px;
  height: 43px;
  margin: 0 0 36px;
  padding: 5px 13px 7px 445px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const IconWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchBlock = styled.div`
  width: 100%;
  /* padding-top: 36px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 48px;
`
export const Search = styled.div`
  width: 32px;
`

export const Battery2 = styled.img`
  font-size: 32px;
  margin-right: 16px;
`
export const TotalMySectionBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
`

export const MySectionBox = styled.div`
  padding-top: 40px;
  width: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
`
export const MySectionBox2 = styled.div`
  padding-top: 31px;
  padding-right: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const MySectionTextBox = styled.div`
  width: 71px;
  height: 43px;
`
export const MySectionText = styled.span`
  font-size: 40px;
  font-weight: bold;
`

export const MySectionImageBox = styled.div`
  width: 60px;
  height: 60px;
`
export const MySectionImage = styled.img`
  font-size: 60px;
`

export const MySectionNameBox = styled.div`
  width: 64px;
  height: 26px;
  padding-top: 17px;
  margin-left: 20px;
`
export const MySectionNameText = styled.span`
  font-size: 24px;
  font-weight: bold;
`

export const MenuSectionBox = styled.div`
  width: 100%;
  padding-top: 69px;
  padding-left: 50px;
  padding-right: 121px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const NoticeBox = styled.div`
  width: 112px;
  height: 32px;
`
export const NoticeText = styled.span`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: normal;
  color: #cacaca;
`
export const EventBox = styled.div`
  width: 83px;
  height: 32px;
`
export const EventText = styled.span`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: normal;
  color: #cacaca;
`
export const FAQBox = styled.div`
  width: 60px;
  height: 32px;
`
export const FAQText = styled.span`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: normal;
  color: #ff1b6d;
`

export const QandABox = styled.div`
  width: 64px;
  height: 32px;
`
export const QandAText = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: normal;
  color: #cacaca;
`

export const QandALineBox = styled.div`
  width: 55px;
  margin-left: 345px;
  margin-right: 235px;
`
export const QandALine = styled.hr`
  height: 2px;
  background-color: #ff1b6d;
`

export const DashedLine = styled.hr`
  height: 1px;
  border: solid 1px #cacaca;
`

export const DashedLineBox = styled.div`
  width: 100%;
  margin-top: 50px;
`

export const QuestionBigBox1 = styled.div`
  padding-left: 50px;
  padding-right: 40.5px;
  padding-top: 29px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const QuestionBigBox2 = styled.div`
  padding-left: 50px;
  padding-right: 40.5px;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const QuestionSmallBox = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;
`

export const Question1 = styled.span`
  font-size: 18px;
  color: #adadad;
`
export const Question1Detail = styled.span`
  padding-top: 14px;
  font-size: 24px;
  color: #444444;
`

export const ArrowBox = styled.div`
  width: 60px;
  height: 60px;
`

export const Arrow = styled.img`
  object-fit: contain;
  padding: 15px 31px 17px 13px;
`

export const LineRectangle = styled.div`
  margin-top: 55px;
  height: 1px;
  width: 640px;
  background-color: #dcdcdc;
`

export const NavBarBox = styled.div`
  padding-top: 5px;
  padding-left: 66px;
  padding-right: 66px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HomeBarBox = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
`
export const HomeBarImageBox = styled.div`
  width: 58px;
  height: 58px;
  padding: 8px 9px 9px 8px;
  object-fit: contain;
`

export const HomeBarImage = styled.img``

export const HomeBarText = styled.div`
  padding-top: 3px;
  width: 90px;
  height: 20px;
  font-size: 16px;
  color: #adadad;
  text-align: center;
  padding-right: 15px;
`

export const EatsRoadBox = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
`

export const EatsRoadImageBox = styled.div`
  width: 58px;
  height: 58px;
  padding: 7px 12px 8px 11px;
  object-fit: contain;
`
export const EatsRoadImage = styled.img``

export const EatsRoadText = styled.div`
  padding-top: 3px;
  width: 90px;
  height: 20px;
  font-size: 16px;
  color: #adadad;
  text-align: center;
  padding-right: 15px;
`

export const LikeBox = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
`
export const LikeImageBox = styled.div`
  width: 58px;
  height: 58px;
  padding: 13px 9px 12px;
  object-fit: contain;
`
export const LikeImage = styled.img``

export const LikeText = styled.div`
  padding-top: 3px;
  width: 90px;
  height: 20px;
  font-size: 16px;
  color: #adadad;
  text-align: center;
  padding-right: 15px;
`

export const MyBox = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
`

export const MyImageBox = styled.div`
  width: 58px;
  height: 58px;
  padding: 8px 10px 10px 9px;
  object-fit: contain;
`
export const MyImage = styled.img``
export const MyText = styled.div`
  padding-top: 3px;
  width: 90px;
  height: 20px;
  font-size: 16px;
  color: #adadad;
  text-align: center;
  padding-right: 15px;
`
