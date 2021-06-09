import { useRouter } from 'next/router'
import { Router } from 'next/router'
import { useState } from 'react'
import LoginUI from './Login.presenter'

const LoginPage = () => {
  const router = useRouter()
  const [loginButtonHandler, setLoginButtonHandler] = useState(true)
  const [inputPackage, setInputPackage] = useState({
    password: '',
    id: ''
  })

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
    if (result.password && result.id) {
      setLoginButtonHandler(false)
    } else {
      setLoginButtonHandler(true)
    }
  }

  const onClickLoginPageLogo = () => {
    router.push('/clonecoding/login')
  }
  const onClickSignUpPage = () => {
    router.push('/clonecoding/signup')
  }

  return (
    <LoginUI
      onChangeInputBox={onChangeInputBox}
      loginButtonHandler={loginButtonHandler}
      onClickLoginPageLogo={onClickLoginPageLogo}
      onClickSignUpPage={onClickSignUpPage}
    />
  )
}

export default LoginPage
