import styled from '@emotion/styled'
import Slider from 'react-slick'

export const Header = styled.div`
  margin-top: 54px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LogoWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CodeCampWrapper = styled.div`
  width: 236px;
  height: 36px;
`

export const CodeCampImage = styled.img`
  cursor: pointer;
`

export const LoginRegisterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 44px;
`
export const LoginButton = styled.div`
  font-size: 16px;
  padding-right: 20px;
  margin-top: 12px;
  cursor: pointer;
`
export const RegisterButton = styled.button`
  width: 92px;
  height: 44px;
  border-radius: 10px;
  background-color: #ffd600;
  font-size: 16px;
  text-align: center;
  border: 0px;
  cursor: pointer;
`

export const CarouselWrapper = styled.div`
  padding-top: 54px;
  width: 100%;
  max-height: 454px;
  height: 454px;
`
// height 100%줄때랑 height 최대로 줄때랑 도대체 무슨차이일까?
export const SlickSlider = styled(Slider)`
  width: 100%;
  max-height: 350px;
  height: 350px;
`
// 이거 질문해보기 Slickslider의 크기는 350px인데 DogImage1Wrapper는 안에 감싸져있음에도 불구하고 400px을 넘어갈 수 있다. 그리고 400px을 넘어가면 왠지모르게 버튼이 계속 바깥쪽으로 나가버린다.
export const DogImage1Wrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
`
export const DogImage1 = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`
export const DogImage2Wrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
`

export const DogImage2 = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #ffd600;
`

export const MiniMenuWrapper2 = styled.div`
  display: flex;
  width: 328px;
  flex-direction: row;
  justify-content: space-between;
`

export const FreeWriteMenuText = styled.div`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`
export const FreeWriteUsedMarketText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #ab9000;
  cursor: pointer;
`
export const FreeWriteMyPageText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #ab9000;
  cursor: pointer;
`

export const FreeWriteWhiteBar = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ffffff;
`
export const MainBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
`

export const MainBodyBox = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 1602px;
  background-color: #ffffff;
  box-shadow: 1px 1px 10px 0.1px;
`

export const ProfileHeaderWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 160px;
  padding-top: 20px;
  /* border: 1px solid black; */
`
export const ProfileHeaderBox = styled.div`
  max-width: 996px;
  width: 100%;
  height: 140px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
`

export const ProfileLefterWrapper = styled.div`
  max-width: 189.34px;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
  align-items: center;
  margin-right: 444px;
`

export const ProfileImageBox = styled.img`
  width: 46.67px;
  height: 46.67px;
  cursor: pointer;
`

export const NameDateWrapper = styled.div`
  max-width: 142.67 px;
  width: 100%;
  padding-left: 16.67px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid black; */
`
export const NameText = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #000000;
`

export const DateText = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`

export const AddressEmoticonWrapper = styled.div`
  max-width: 378px;
  width: 100%;
  height: 103.34px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black;      */
`

export const AddressImageBox = styled.div`
  max-width: 376px;
  width: 100%;
  height: 72px;
  padding-top: 8px;
  display: flex;
  justify-content: center;
`
export const AddressImage = styled.img``

export const EmoticonBox = styled.div`
  margin-bottom: 4.67px;
  max-width: 378px;
  height: 26.67px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* border: 1px solid black; */
`

export const EmoticonBox2 = styled.div`
  max-width: 74.67px;
  width: 100%;
  height: 26.67px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid black; */
  align-items: center;
`
export const ClipEmoticon = styled.img`
  width: 26.67px;
  height: 13.33px;
`

export const AddressEmoticon = styled.img`
  width: 18.67px;
  height: 26.67px;
`

export const AddressTextBox = styled.div`
  max-width: 344px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  position: absolute;
  /* border: 1px solid black; */
  margin-top: 8px;
`

export const AddressText1Box = styled.div`
  max-width: 344px;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: flex-end;
`

export const AddressText1 = styled.div`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
`
export const AddressText2Box = styled.div`
  max-width: 344px;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: flex-end;
`
export const AddressText2 = styled.div`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
`

export const HrLine = styled.hr`
  max-width: 996px;
  width: 100%;
  height: 1px;
  background-color: #bdbdbd;
`

export const TitleTotalWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 134px;
  display: flex;
  justify-content: center;
`

export const TitleTextWrapper = styled.div`
  max-width: 996px;
  width: 100%;
  height: 134px;
  padding-top: 80px;
`

export const TitleText = styled.div`
  font-size: 36px;
  font-style: bold;
  font-weight: 700;
`
export const ImageTotalWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  max-width: 996px;
  width: 100%;
  height: 480px;
  margin-top: 40px;
  background-color: #000000;
`
export const Image1 = styled.img``

export const MainTextTotalWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 134px;
  display: flex;
  justify-content: center;
`
export const MainTextWrapper = styled.div`
  max-width: 996px;
  width: 100%;
  height: 134px;
  padding-top: 40px;
`

export const MainText = styled.div`
  font-size: 16px;
  color: #000000;
  font-weight: 400;
`

export const VideoTotalWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
`

export const VideoWrapper = styled.div`
  max-width: 486px;
  width: 100%;
  height: 240px;
  background-color: #000000;
  margin-top: 120px;
  display: flex;
  justify-content: center;
`

export const LikeDislikeTotalWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 213px;
  display: flex;
  justify-content: center;
`

export const LikeDislikeWrapper = styled.div`
  padding-top: 163px;
  max-width: 94px;
  width: 100%;
  height: 213px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LikeWrapper = styled.div`
  max-width: 40px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
`
export const LikeEmoticon = styled.img`
  max-width: 20px;
  width: 100%;
  height: 18px;
  cursor: pointer;
`
export const LikeNumber = styled.div`
  max-width: 40px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  color: #ffd600;
  text-align: center;
`

export const DislikeWrapper = styled.div`
  max-width: 40px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
`

export const DislikeEmoticon = styled.img`
  max-width: 22px;
  width: 100%;
  height: 20x;
  cursor: pointer;
`

export const DislikeNumber = styled.div`
  max-width: 40px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  color: #828282;
  text-align: center;
`

export const RouterButtonBigWrapper = styled.div`
  width: 100%;
  height: 212px;
  display: flex;
  justify-content: center;
`

export const RouterButtonSmallWrapper = styled.div`
  padding-top: 80px;
  max-width: 382px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const RouterListButton = styled.button`
  max-width: 179px;
  width: 100%;
  height: 52px;
  font-size: 16px;
  color: #000000;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid #bdbdbd;
`
export const RouterFixButton = styled.button`
  max-width: 179px;
  width: 100%;
  height: 52px;
  font-size: 16px;
  color: #000000;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid #bdbdbd;
`

export const Hr2LineWrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 81px;
  display: flex;
  justify-content: center;
`

export const Hr2Line = styled.hr`
  max-width: 1199px;
  width: 100%;
  height: 1px;
  background-color: #bdbdbd;
`

export const CommentBigWrapper = styled.div`
  width: 100%;
  height: 67px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`
export const CommentWrapper = styled.div`
  max-width: 1199px;
  width: 100%;
  height: 27px;
`
export const CommentBox = styled.div`
  max-width: 61px;
  height: 27px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CommentImage = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
`
export const CommentText = styled.div`
  max-width: 34px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  color: #000000;
`
export const RatingBigWrapper = styled.div`
  width: 100%;
  height: 92px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`

export const RatingMiddleWrapper = styled.div`
  max-width: 1199px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
`

export const RatingSmallWrapper = styled.div`
  max-width: 506px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const WriterBox = styled.input`
  max-width: 180px;
  width: 100%;
  height: 52px;
  padding-left: 20px;
  outline: none;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
`

export const PasswordBox = styled.input`
  max-width: 180px;
  width: 100%;
  height: 52px;
  padding-left: 20px;
  outline: none;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
`

export const StarBox = styled.div`
  max-width: 116px;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StarImage1 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`

export const StarImage2 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const StarImage3 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const StarImage4 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const StarImage5 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`

export const CommentBoxBigWrapper = styled.div`
  width: 100%;
  height: 181px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`

export const CommentBoxSmallWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 161px;
  border: 1px solid #bdbdbd;
`

export const CommentBoxBigInput = styled.input`
  max-width: 1200px;
  width: 100%;
  height: 108px;
  padding-left: 20px;
  color: #000000;
  font-size: 16px;
  text-align: left;
  padding-bottom: 64px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: #bdbdbd;
  }
`

export const CommentBoxSmallInputWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
`

export const CommentBoxSmallLimitBox = styled.div`
  max-width: 1109px;
  width: 100%;
  height: 53px;
  border-top: 1px solid #f2f2f2;
`

export const CommentLimitBox = styled.div`
  padding-left: 20px;
  max-width: 63px;
  width: 100%;
  height: 38px;
  padding-top: 14px;
  color: #bdbdbd;
  font-size: 16px;
`

export const RegisterBox = styled.button`
  max-width: 91px;
  width: 100%;
  height: 52px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`

export const RatingBigWrapper2 = styled.div`
  width: 100%;
  height: 92px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`

export const RatingMiddleWrapper2 = styled.div`
  max-width: 1199px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
`

export const RatingSmallWrapper2 = styled.div`
  max-width: 506px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const WriterBox2 = styled.input`
  max-width: 180px;
  width: 100%;
  height: 52px;
  padding-left: 20px;
  outline: none;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  color: black;
  ::placeholder {
    color: #bdbdbd;
  }
`

export const PasswordBox2 = styled.input`
  max-width: 180px;
  width: 100%;
  height: 52px;
  padding-left: 20px;
  outline: none;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
`

export const StarBox2 = styled.div`
  max-width: 116px;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StarImage6 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`

export const StarImage7 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const StarImage8 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const StarImage9 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const StarImage10 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`

export const CommentBoxBigWrapper2 = styled.div`
  width: 100%;
  height: 137px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`

export const CommentBoxSmallWrapper2 = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 117px;
  border: 1px solid #bdbdbd;
`

export const CommentBoxBigInput2 = styled.input`
  max-width: 1200px;
  width: 100%;
  height: 64px;
  padding-left: 20px;
  color: #000000;
  font-size: 16px;
  text-align: left;
  padding-bottom: 20px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: #bdbdbd;
  }
`

export const CommentBoxSmallInputWrapper2 = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
`

export const CommentBoxSmallLimitBox2 = styled.div`
  max-width: 1109px;
  width: 100%;
  height: 53px;
  border-top: 1px solid #f2f2f2;
`

export const CommentLimitBox2 = styled.div`
  padding-left: 20px;
  max-width: 63px;
  width: 100%;
  height: 38px;
  padding-top: 14px;
  color: #bdbdbd;
  font-size: 16px;
`

export const RegisterBox2 = styled.button`
  max-width: 91px;
  width: 100%;
  height: 52px;
  background-color: #ffd600;
  color: #000000;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: none;
`

export const CommentResultBigWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`

export const CommentResultMiddleWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`
export const CommentLeftBigWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CommentLeftLeftWrapper = styled.div`
  max-width: 40px;
  width: 100%;
  height: 110px;
  padding-top: 6px;
`

export const CommentLeftImageBox = styled.img`
  max-width: 40px;
  width: 100%;
  height: 40px;
`
export const CommentLeftRightWrapper = styled.div`
  max-width: 844px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const CommentLeftRightFirstSmallWrapper = styled.div`
  max-width: 179px;
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CommentLeftRightNameBox = styled.div`
  max-width: 45px;
  width: 100%;
  font-size: 16px;
  height: 24px;
  color: #000000;
  padding-top: 2px;
`
export const CommentLeftRightRatingBox = styled.div`
  max-width: 116px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CommentRatingStar1 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const CommentRatingStar2 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const CommentRatingStar3 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const CommentRatingStar4 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const CommentRatingStar5 = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`

export const CommentLeftRightSecondTextBox = styled.div`
  padding-top: 4px;
  max-width: 844px;
  width: 100%;
  height: 28px;
  font-size: 16px;
  color: #4f4f4f;
`
export const CommentLeftRightThirdDateBox = styled.div`
  max-width: 60px;
  width: 100%;
  height: 38px;
  padding-top: 20px;
  font-size: 12px;
  color: #bdbdbd;
`
export const CommentRightBigWrapper = styled.div`
  max-width: 48px;
  width: 100%;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CommentPencilImageBox = styled.img`
  max-width: 18px;
  width: 100%;
  height: 18px;
  cursor: pointer;
`
export const CommentCancelImageBox = styled.img`
  max-width: 14px;
  height: 14px;
  width: 100%;
  cursor: pointer;
`
