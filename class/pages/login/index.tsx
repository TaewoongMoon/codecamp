import { useState } from 'react'
import {
  PasswordError,
  EmailError,
  HeadTitle,
  ContextWrapper,
  EmailWrapper,
  EmailInput,
  EmailText,
  EmailDirectionWrapper,
  PasswordDirectionWrapper,
  PasswordWrapper,
  PasswordText,
  PasswordInput,
  Button,
  ButtonDirectionWrapper
} from '../../styles/Login'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [errorId, setErrorId] = useState('')
  const [errorPw, setErrorPw] = useState('')

  const setErrorIdPw = () => {
    if (!email.includes('@')) {
      setErrorId('!아이디를 확인해주세요.')
    } else if (pw.length < 8) {
      setErrorPw('!비밀번호를 확인해주세요.')
    } else if (email.includes('@') && pw.length >= 8) {
      const message = '회원가입에 성공하셨습니다. 로그인페이지로 이동합니다.'
      alert(message)
      const LoginSuccess = message
      if (LoginSuccess.length > 0) {
        // console.log("들어왔어요")
        location.reload()
      }
    }
  }

  const emailChange = (event) => {
    const temp = event.target.value
    setEmail(temp)
  }

  const passwordChange = (event) => {
    const temp = event.target.value
    setPw(temp)
  }

  return (
    <div>
      <HeadTitle>로그인</HeadTitle>
      <ContextWrapper>
        <EmailDirectionWrapper>
          <EmailWrapper>
            <EmailText>Email:</EmailText>
            <EmailInput type="text" onChange={emailChange} />
            <EmailError>{errorId}</EmailError>
          </EmailWrapper>
        </EmailDirectionWrapper>
        <PasswordDirectionWrapper>
          <PasswordWrapper>
            <PasswordText>Password: </PasswordText>
            <PasswordInput type="password" onChange={passwordChange} />
            <PasswordError>{errorPw}</PasswordError>
          </PasswordWrapper>
        </PasswordDirectionWrapper>
        <ButtonDirectionWrapper>
          <Button onClick={setErrorIdPw}>로그인하기</Button>
        </ButtonDirectionWrapper>
      </ContextWrapper>
    </div>
  )
}

export default LoginPage
