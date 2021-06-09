import { useRouter } from 'next/router'
import { useState } from 'react'
import SignUpUI from './SignUp.presenter'

const SignUpPage = () => {
  const router = useRouter()
  const [signUpHandler, setSignUpHandler] = useState(true)
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
    setSignUpHandler(false)
  }

  const onClickSignUpCancel = () => {
    router.back()
  }
  return (
    <SignUpUI
      onChangeInputBox={onChangeInputBox}
      loginButtonHandler={loginButtonHandler}
      onClickLoginPageLogo={onClickLoginPageLogo}
      signUpHandler={signUpHandler}
      onClickSignUpPage={onClickSignUpPage}
      onClickSignUpCancel={onClickSignUpCancel}
    />
  )
}

export default SignUpPage
