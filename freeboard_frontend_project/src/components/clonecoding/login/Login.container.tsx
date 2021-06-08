import { useState } from 'react'
import LoginUI from './Login.presenter'

const LoginPage = () => {
  const [loginButtonHandler, setLoginButtonHandler] = useState<boolean>(true)
  const [inputPackage, setInputPackage] = useState({
    password: '',
    id: ''
  })
  const onChangeInputBox = (event: any) => {
    const result = {
      ...inputPackage,
      [event.target.id]: event.target.value
    }
    setInputPackage(result)
  }

  return <LoginUI onChangeInputBox={onChangeInputBox} />
}

export default LoginPage
