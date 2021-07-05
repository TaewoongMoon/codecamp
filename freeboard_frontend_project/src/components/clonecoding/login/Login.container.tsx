import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import LoginUI from './Login.presenter'
import { LOGIN_USER } from './Login.queries'

const LoginPage = () => {
  const router = useRouter()
  const emailRef = useRef<HTMLInputElement>(null)
  const [idChanger, setIdChanger] = useState(false)
  const [passwordChanger, setPasswordChanger] = useState(false)
  const [loginButtonHandler, setLoginButtonHandler] = useState(true)
  const [inputPackage, setInputPackage] = useState({
    password: '',
    id: ''
  })

  const [loginStatus, setLoginStatus] = useState(true)
  const [loginUser] = useMutation(LOGIN_USER)
  const { setAccessToken } = useContext(GlobalContext)

  console.log(emailRef.current?.value)
  const onChangeInputBox = async (event: any) => {
    const result = {
      ...inputPackage,
      [event.target.id]: event.target.value
    }
    setInputPackage(result)

    // setInputPackage((prev) => {
    //   if (prev.password && prev.id) {
    //     setLoginButtonHandler(false)
    //   } else {
    //     setLoginButtonHandler(true)
    //   }
    //   return prev
    // })
    if (result.password.length > 8 && result.id.includes('@')) {
      setLoginButtonHandler(false)
    } else {
      setLoginButtonHandler(true)
    }

    if (result.id.includes('@')) {
      setIdChanger(false)
    } else {
      setIdChanger(true)
    }

    if (result.password.length > 8) {
      setPasswordChanger(false)
    } else {
      setPasswordChanger(true)
    }

    // if (emailRef.current?.id === 'id' && !result.id) {
    //   setIdChanger(true)
    // }
    // 이건 테스트 용도 2
  }

  const onClickIdSignChange = () => {
    if (!inputPackage.id) {
      setIdChanger(true)
    }
  }

  const onClickPasswordSignChange = () => {
    if (!inputPackage.password) {
      setPasswordChanger(true)
    }
  }

  const onClickLoginPageLogo = () => {
    router.push('/clonecoding/login')
  }
  const onClickSignUpPage = () => {
    router.push('/clonecoding/signup')
  }

  const onClickLoginStatus = () => {
    if (loginStatus === true) {
      setLoginStatus(false)
    } else {
      setLoginStatus(true)
    }
  }

  const onClickLogin = async (event: any) => {
    event.preventDefault() // event.preventDefault의 역할은?

    try {
      const { data } = await loginUser({
        variables: {
          password: inputPackage.password,
          email: inputPackage.id
        }
      })
      setAccessToken(data?.loginUser.accessToken)
      console.log(data?.loginUser.accessToken)
      router.push('/clonecoding/main')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <LoginUI
      onChangeInputBox={onChangeInputBox}
      loginButtonHandler={loginButtonHandler}
      onClickLoginPageLogo={onClickLoginPageLogo}
      onClickSignUpPage={onClickSignUpPage}
      onClickLoginStatus={onClickLoginStatus}
      loginStatus={loginStatus}
      emailRef={emailRef}
      idChanger={idChanger}
      onClickIdSignChange={onClickIdSignChange}
      onClickPasswordSignChange={onClickPasswordSignChange}
      passwordChanger={passwordChanger}
      onClickLogin={onClickLogin}
    />
  )
}

export default LoginPage
