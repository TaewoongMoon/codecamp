import { useRouter } from 'next/router'
import { useState } from 'react'
import SignUpUI from './SignUp.presenter'
import { useForm } from 'react-hook-form'
import { CREATE_USER } from './SignUp.queries'
import { useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationCreateUserArgs
} from '../../../commons/types/generated/types'

type FormValues = {
  email: String
  name: String
  password: String
  passwordDoubleCheck: String
}

const SignUpPage = () => {
  const router = useRouter()
  const [loginStatus, setLoginStatus] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [createUser] =
    useMutation<IMutation, IMutationCreateUserArgs>(CREATE_USER)

  const { register, watch, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onChange'
  })

  console.log(formState.isValid)
  console.log(formState.touchedFields.email)

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

  const onClickSignUpButton = async (data: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: String(data.email),
            password: String(data.password),
            name: String(data.name)
          }
        }
      })
      setIsOpen(true)
    } catch (error) {
      alert(error.message)
    }
  }
  const onClickModalCancel = () => {
    setIsOpen(false)
    router.push('/clonecoding/login')
  }

  const onClickModalCancelfromBackground = () => {
    if (isOpen) {
      router.push('/clonecoding/login')
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
      //   errors={errors}
      formState={formState}
      onClickSignUpButton={onClickSignUpButton}
      createUser={createUser}
      isOpen={isOpen}
      onClickModalCancel={onClickModalCancel}
      onClickModalCancelfromBackground={onClickModalCancelfromBackground}
    />
  )
}

export default SignUpPage
