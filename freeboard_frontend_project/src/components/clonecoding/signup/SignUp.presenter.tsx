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
  PasswordDoubleCheckSign,
  ModalBox,
  CodeCampImageModal,
  SignUpSuccessMessage,
  SignUpSuccessButton,
  ModalCancelImage
} from './SignUp.styles'

interface Iprops {
  onClickSignUpCancel: any
  onClickLoginStatus: any
  loginStatus: any
  register: any
  handleSubmit: any
  watch: any
  //   errors: any
  formState: any
  onClickSignUpButton: any
  createUser: any
  isOpen: any
  onClickModalCancel: any
  onClickModalCancelfromBackground: any
}

const SignUpUI = (props: Iprops) => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ModalBox isActive={props.isOpen}>
          <ModalCancelImage
            src="/ModalCancel.svg"
            onClick={props.onClickModalCancel}
          ></ModalCancelImage>
          <CodeCampImageModal src="/codecamplogo2.svg" />
          <SignUpSuccessMessage>회원가입을 축하합니다!</SignUpSuccessMessage>
          <SignUpSuccessButton onClick={props.onClickModalCancel}>
            확인
          </SignUpSuccessButton>
        </ModalBox>

        <TotalWrapper
          onSubmit={props.handleSubmit((data: any) =>
            props.onClickSignUpButton(data)
          )}
          isActive={props.isOpen}
          onClick={props.onClickModalCancelfromBackground}
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
              <EmailWarningSign isActive={props.formState.errors.email}>
                {props.formState.errors.email?.message}
              </EmailWarningSign>
              <NameText>이름</NameText>
              <NameInputBox>
                <NameInput
                  {...props.register('name', {
                    required: true,
                    minLength: {
                      value: 3,
                      message:
                        '이름 길이는 최소 3글자입니다. 확인하여 주십시오.'
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
              <NameWarningSign isActive={props.formState.errors.name}>
                {props.formState.errors.name?.message}
              </NameWarningSign>
              <PasswordText>비밀번호</PasswordText>
              <PasswordInputBox>
                <PasswordInput
                  {...props.register('password', {
                    required: true,
                    minLength: {
                      value: 8,
                      message:
                        '비밀번호의 길이는 최소 8자리 이상입니다. 확인하여 주십시오'
                    }
                  })}
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  id="password"
                ></PasswordInput>
              </PasswordInputBox>
              <PasswordWarningSign isActive={props.formState.errors.password}>
                {props.formState.errors.password?.message}
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
                isActive={props.formState.errors.passwordDoubleCheck}
              >
                {props.formState.errors.passwordDoubleCheck?.message}
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
              <LoginButton disabled={!props.formState.isValid}>
                회원가입
              </LoginButton>
            </LoginSmallWrapper>
          </LoginWrapper>
        </TotalWrapper>
      </div>
    </>
  )
}

export default SignUpUI
