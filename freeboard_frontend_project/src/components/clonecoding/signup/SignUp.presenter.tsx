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
  SignUpText,
  SignUpCancelImage,
  EmailText,
  NameText,
  NameInputBox,
  NameInput,
  PasswordText,
  PasswordDoubleCheckText,
  PasswordDoubleCheckInputBox,
  PasswordDoubleCheckInput,
  EmailWarningSign,
  NameWarningSign,
  PasswordWarningSign,
  PasswordDoubleCheckSign
} from './SignUp.styles'

interface Iprops {
  onClickSignUpCancel: any
  onClickLoginStatus: any
  loginStatus: any
  register: any
  handleSubmit: any
  watch: any
  errors: any
}

const SignUpUI = (props: Iprops) => {
  console.log(props.errors.email?.message)
  console.log('******')
  return (
    <>
      <TotalWrapper
        onSubmit={props.handleSubmit((data: any) => console.log(data))}
      >
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
                {...props.register('email', {
                  required: true,
                  pattern: {
                    value: /^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,3}$/,
                    message: '이메일 형식을 확인하여 주십시오.'
                  }
                })}
                type="text"
                placeholder="이메일을 입력해주세요."
                id="email"
              ></IdInput>
            </IdInputBox>
            <EmailWarningSign isActive={props.errors.email}>
              {props.errors.email?.message}
            </EmailWarningSign>
            <NameText>이름</NameText>
            <NameInputBox>
              <NameInput
                {...props.register('name', {
                  required: true,
                  minLength: {
                    value: 3,
                    message: '이름 길이는 최소 3글자입니다. 확인하여 주십시오.'
                  },
                  maxLength: {
                    value: 5,
                    message: '이름 길이를 초과하였습니다. 확인하여 주십시오.'
                  }
                })}
                type="text"
                placeholder="이름을 입력해주세요."
                id="name"
              />
            </NameInputBox>
            <NameWarningSign isActive={props.errors.name}>
              {props.errors.name?.message}
            </NameWarningSign>
            <PasswordText>비밀번호</PasswordText>
            <PasswordInputBox>
              <PasswordInput
                {...props.register('password', {
                  required: true,
                  minLength: {
                    value: 8,
                    message:
                      '비밀번호의 길이는 최소 8글자 이상입니다. 확인하여 주십시오'
                  }
                })}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                id="password"
              ></PasswordInput>
            </PasswordInputBox>
            <PasswordWarningSign isActive={props.errors.password}>
              {props.errors.password?.message}
            </PasswordWarningSign>
            <PasswordDoubleCheckText>비밀번호 확인</PasswordDoubleCheckText>
            <PasswordDoubleCheckInputBox>
              <PasswordDoubleCheckInput
                {...props.register('passwordDoubleCheck', {
                  required: true,
                  validate: (value: any) =>
                    value === props.watch().password ||
                    '입력하신 비밀번호와 맞지 않습니다.'
                })}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="passwordDoubleCheck"
              ></PasswordDoubleCheckInput>
            </PasswordDoubleCheckInputBox>
            <PasswordDoubleCheckSign
              isActive={props.errors.passwordDoubleCheck}
            >
              {props.errors.passwordDoubleCheck?.message}
            </PasswordDoubleCheckSign>
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
              disabled={
                props.errors.email ||
                props.errors.name ||
                props.errors.password ||
                props.errors.passwordDoubleCheck
              }
            >
              회원가입
            </LoginButton>
          </LoginSmallWrapper>
        </LoginWrapper>
      </TotalWrapper>
    </>
  )
}

export default SignUpUI
