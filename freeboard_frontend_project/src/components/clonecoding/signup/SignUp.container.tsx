import { useRouter } from 'next/router'
import { useState } from 'react'
import SignUpUI from './SignUp.presenter'
import { useForm } from 'react-hook-form'

type FormValues = {
  email: String
  name: String
  password: String
  passwordDoubleCheck: String
}

const SignUpPage = () => {
  const router = useRouter()
  const [loginStatus, setLoginStatus] = useState(true)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const onClickSignUpCancel = () => {
    router.back()
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
      onClickSignUpCancel={onClickSignUpCancel}
      onClickLoginStatus={onClickLoginStatus}
      loginStatus={loginStatus}
      register={register}
      handleSubmit={handleSubmit}
      watch={watch}
      errors={errors}
    />
  )
}

export default SignUpPage
