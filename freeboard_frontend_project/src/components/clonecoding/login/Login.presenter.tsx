import {
  IdInputBox,
  LoginImage,
  LoginSmallWrapper,
  LoginWrapper,
  TotalWrapper,
  IdInput,
  PasswordInputBox,
  PasswordInput,
  CheckBoxWrapper,
  CheckBoxSmallWrapper,
  CheckBox,
  LoginBox,
  LoginButton,
  LoginBottomLine,
  MenuSmallWrapper,
  EmailWrapper,
  DivideBar1,
  PasswordWrapper,
  DivideBar2,
  SignUpWrapper,
  MenuWrapper,
  CodeCampLogo,
  IdWarningSign,
  CodeCampLogoWrapper,
  PasswordWarningSign
} from './Login.styles'

interface Iprops {
  onChangeInputBox: any
  loginButtonHandler: any
  onClickLoginPageLogo: any
  onClickSignUpPage: any
  onClickLoginStatus: any
  loginStatus: any
  emailRef: any
  idChanger: any
  onClickIdSignChange: any
  onClickPasswordSignChange: any
  passwordChanger: any
  onClickLogin: any
}

const LoginUI = (props: Iprops) => {
  return (
    <>
      <TotalWrapper>
        <LoginImage src="/LoginImage.png"></LoginImage>
        <LoginWrapper>
          <LoginSmallWrapper>
            <CodeCampLogoWrapper>
              <CodeCampLogo
                src="/codecamplogo.png"
                onClick={props.onClickLoginPageLogo}
              ></CodeCampLogo>
            </CodeCampLogoWrapper>
            <IdWarningSign isActive={props.idChanger}>
              이메일을 입력을 확인해주세요.
            </IdWarningSign>
            <PasswordInputBox>
              <PasswordInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                id="password"
                onChange={props.onChangeInputBox}
              ></PasswordInput>
            </PasswordInputBox>
            <PasswordWarningSign isActive={props.passwordChanger}>
              비밀번호 입력을 확인해주세요.
            </PasswordWarningSign>
            <CheckBoxWrapper>
              <CheckBoxSmallWrapper>
                <CheckBox
                  isActive={props.loginStatus}
                  onClick={props.onClickLoginStatus}
                />
                <LoginBox
                  isActive={props.loginStatus}
                  onClick={props.onClickLoginStatus}
                >
                  로그인 상태 유지
                </LoginBox>
              </CheckBoxSmallWrapper>
            </CheckBoxWrapper>
            <LoginButton
              disabled={props.loginButtonHandler}
              onClick={props.onClickLogin}
            >
              로그인하기
            </LoginButton>
            <LoginBottomLine></LoginBottomLine>
            <MenuWrapper>
              <MenuSmallWrapper>
                <EmailWrapper>이메일 찾기</EmailWrapper>
                <DivideBar1></DivideBar1>
                <PasswordWrapper>비밀번호 찾기</PasswordWrapper>
                <DivideBar2></DivideBar2>
                <SignUpWrapper onClick={props.onClickSignUpPage}>
                  회원가입
                </SignUpWrapper>
              </MenuSmallWrapper>
            </MenuWrapper>
          </LoginSmallWrapper>
        </LoginWrapper>
      </TotalWrapper>
    </>
  )
}

export default LoginUI
