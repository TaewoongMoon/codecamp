import SimpleSlider from './Slider.container'
import {
  Header,
  LogoWrapper,
  CodeCampWrapper,
  CodeCampImage,
  LoginRegisterWrapper,
  LoginButton,
  RegisterButton,
  CarouselWrapper,
  MenuWrapper,
  MiniMenuWrapper2,
  FreeWriteMenuText,
  FreeWriteWhiteBar,
  FreeWriteUsedMarketText,
  FreeWriteMyPageText
} from './Header.styles'

export default function HeaderBoard() {
  return (
    <>
      <Header>
        <LogoWrapper>
          <CodeCampWrapper>
            <CodeCampImage src="/logo (1).png"></CodeCampImage>
          </CodeCampWrapper>
          <LoginRegisterWrapper>
            <LoginButton>로그인</LoginButton>
            <RegisterButton>회원가입</RegisterButton>
          </LoginRegisterWrapper>
        </LogoWrapper>
      </Header>
      <CarouselWrapper>
        <SimpleSlider></SimpleSlider>
      </CarouselWrapper>
      <MenuWrapper>
        <MiniMenuWrapper2>
          <FreeWriteMenuText>자유게시판</FreeWriteMenuText>
          <FreeWriteWhiteBar></FreeWriteWhiteBar>
          <FreeWriteUsedMarketText>중고마켓</FreeWriteUsedMarketText>
          <FreeWriteWhiteBar></FreeWriteWhiteBar>
          <FreeWriteMyPageText>마이페이지</FreeWriteMyPageText>
        </MiniMenuWrapper2>
      </MenuWrapper>
    </>
  )
}
