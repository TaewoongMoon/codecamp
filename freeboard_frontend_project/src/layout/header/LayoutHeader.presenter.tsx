import SimpleSlider from './LayoutHeader.slider'
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
} from './LayoutHeader.styles'

interface IProps {
  onClickMenuSelector: any
  currentMenu: any
  menuSelector: any
  headerLogo: any
  onClickLoginPageDirection: any
  onClickSignUpPageDirection: any
}
export default function HeaderUI(props: IProps) {
  return (
    <div>
      <Header>
        <LogoWrapper>
          <CodeCampWrapper>
            <CodeCampImage
              src="/logo (1).png"
              onClick={props.headerLogo}
            ></CodeCampImage>
          </CodeCampWrapper>
          <LoginRegisterWrapper>
            <LoginButton onClick={props.onClickLoginPageDirection}>
              로그인
            </LoginButton>
            <RegisterButton onClick={props.onClickSignUpPageDirection}>
              회원가입
            </RegisterButton>
          </LoginRegisterWrapper>
        </LogoWrapper>
      </Header>
      <CarouselWrapper>
        <SimpleSlider></SimpleSlider>
      </CarouselWrapper>
      <MenuWrapper>
        <MiniMenuWrapper2>
          <FreeWriteMenuText
            id="freeboard"
            isActive={props.menuSelector.freeboard === props.currentMenu}
            onClick={props.onClickMenuSelector}
          >
            자유게시판
          </FreeWriteMenuText>
          <FreeWriteWhiteBar></FreeWriteWhiteBar>
          <FreeWriteUsedMarketText
            id="clonecoding"
            isActive={props.menuSelector.secondhandmarket === props.currentMenu}
            onClick={props.onClickMenuSelector}
          >
            중고마켓
          </FreeWriteUsedMarketText>
          <FreeWriteWhiteBar></FreeWriteWhiteBar>
          <FreeWriteMyPageText
            id="mypage"
            isActive={props.menuSelector.mypage === props.currentMenu}
            onClick={props.onClickMenuSelector}
          >
            마이페이지
          </FreeWriteMyPageText>
        </MiniMenuWrapper2>
      </MenuWrapper>
    </div>
  )
}
