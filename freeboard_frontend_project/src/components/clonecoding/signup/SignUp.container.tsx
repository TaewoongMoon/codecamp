import { useRouter } from 'next/router'
import { useState } from 'react'
import SignUpUI from './SignUp.presenter'

const SignUpPage = () => {
  const router = useRouter()
  const [loginStatus, setLoginStatus] = useState(true)
  const [idChanger, setIdChanger] = useState(false)
  const [nameChanger, setNameChanger] = useState(false)
  const [passwordChanger, setPasswordChanger] = useState(false)
  const [passwordDoubleCheckChanger, setPasswordDoubleCheckChanger] =
    useState(false)
  const [signUpHandler, setSignUpHandler] = useState(true)
  const [loginButtonHandler, setLoginButtonHandler] = useState(true)
  const [inputPackage, setInputPackage] = useState({
    password: '',
    passwordDoubleCheck: '',
    id: '',
    name: ''
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
    if (
      result.password.length > 8 &&
      result.id.includes('@') &&
      result.passwordDoubleCheck === result.password &&
      result.name.length >= 3
    ) {
      setLoginButtonHandler(false)
    } else {
      setLoginButtonHandler(true)
    }
  }

  const onClickSignUpPage = () => {
    setSignUpHandler(false)
  }

  const onClickSignUpCancel = () => {
    router.back()
  }

  const onClickIdChanger = () => {
    setIdChanger(true)
  }

  const onClickNameChanger = () => {
    setNameChanger(true)
  }

  const onClickPasswordChanger = () => {
    setPasswordChanger(true)
  }

  const onClickPasswordDoubleCheckChanger = () => {
    setPasswordDoubleCheckChanger(true)
  }

  const onClickLoginStatus = () => {
    if (loginStatus === true) {
      setLoginStatus(false)
    } else {
      setLoginStatus(true)
    }
  }

  return (
    <SignUpUI
      onChangeInputBox={onChangeInputBox}
      loginButtonHandler={loginButtonHandler}
      signUpHandler={signUpHandler}
      onClickSignUpPage={onClickSignUpPage}
      onClickSignUpCancel={onClickSignUpCancel}
      onClickIdChanger={onClickIdChanger}
      onClickPasswordChanger={onClickPasswordChanger}
      onClickNameChanger={onClickNameChanger}
      onClickPasswordDoubleCheckChanger={onClickPasswordDoubleCheckChanger}
      idChanger={idChanger}
      passwordChanger={passwordChanger}
      nameChanger={nameChanger}
      passwordDoubleCheckChanger={passwordDoubleCheckChanger}
      onClickLoginStatus={onClickLoginStatus}
      loginStatus={loginStatus}
    />
  )
}

export default SignUpPage
