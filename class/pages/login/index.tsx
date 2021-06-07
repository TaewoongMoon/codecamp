import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
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
import { GlobalContext } from '../_app'

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [errorId, setErrorId] = useState('')
  const [errorPw] = useState('')

  const { setAccessToken } = useContext(GlobalContext)

  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE)

  const setErrorIdPw = async (event: any) => {
    event.preventDefault() //
    try {
      if (!email.includes('@')) {
        setErrorId('!아이디를 확인해주세요.')
      } else if (email.includes('@')) {
        const { data } = await loginUserExample({
          variables: {
            email,
            password: pw
          }
        })
        setAccessToken(data?.loginUserExample.accessToken)
        const message = '회원가입에 성공하셨습니다. 로그인페이지로 이동합니다.'
        alert(message)
        const LoginSuccess = message
        if (LoginSuccess.length > 0) {
          // console.log("들어왔어요")
          router.push('/tokentest/tokentest2')
        }
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const emailChange = (event: any) => {
    const temp = event.target.value
    setEmail(temp)
  }

  const passwordChange = (event: any) => {
    const temp = event.target.value
    setPw(temp)
  }

  return (
    <form>
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
    </form>
  )
}

export default LoginPage
