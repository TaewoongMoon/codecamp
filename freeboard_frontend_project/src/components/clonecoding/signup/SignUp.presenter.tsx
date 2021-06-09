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
  SignUpText,
  SignUpCancelImage,
  EmailText,
  CodeCampLogoWrapper,
  NameText,
  NameInputBox,
  NameInput,
  PasswordText,
  PasswordDoubleCheckText,
  PasswordDoubleCheckInputBox,
  PasswordDoubleCheckInput
} from './SignUp.styles'

interface Iprops {
  onChangeInputBox: any
  loginButtonHandler: any
  onClickLoginPageLogo: any
  signUpHandler: any
  onClickSignUpPage: any
  onClickSignUpCancel: any
}

const SignUpUI = (props: Iprops) => {
  return (
    <>
      <TotalWrapper>
        <LoginImage src="/LoginImage.png"></LoginImage>
        <LoginWrapper>
          <SignUpCancelImage
            src="/SignUpCancelImage.png"
            onClick={props.onClickSignUpCancel}
          />
          <LoginSmallWrapper>
            <SignUpText>회원가입</SignUpText>
            <EmailText>이메일</EmailText>
            <IdInputBox>
              <IdInput
                type="text"
                placeholder="이메일을 입력해주세요."
                id="id"
                onChange={props.onChangeInputBox}
              ></IdInput>
            </IdInputBox>
            <NameText>이름</NameText>
            <NameInputBox>
              <NameInput
                type="text"
                placeholder="이름을 입력해주세요."
                id="name"
              />
            </NameInputBox>
            <PasswordText>비밀번호</PasswordText>
            <PasswordInputBox>
              <PasswordInput
                type="text"
                placeholder="비밀번호를 입력해주세요."
                id="password"
                onChange={props.onChangeInputBox}
              ></PasswordInput>
            </PasswordInputBox>
            <PasswordDoubleCheckText>비밀번호 확인</PasswordDoubleCheckText>
            <PasswordDoubleCheckInputBox>
              <PasswordDoubleCheckInput
                type="text"
                placeholder="비밀번호를 입력해주세요"
                id="idDoubleCheck"
              ></PasswordDoubleCheckInput>
            </PasswordDoubleCheckInputBox>
            <CheckBoxWrapper>
              <CheckBoxSmallWrapper>
                <CheckBox src="/LoginStateImage.png" />
                <LoginBox>로그인 상태 유지</LoginBox>
              </CheckBoxSmallWrapper>
            </CheckBoxWrapper>
            <LoginButton disabled={props.loginButtonHandler}>
              로그인하기
            </LoginButton>
          </LoginSmallWrapper>
        </LoginWrapper>
      </TotalWrapper>
    </>
  )
}

export default SignUpUI
