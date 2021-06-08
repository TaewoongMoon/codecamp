import QueryUI from './Querywrite.presenter'
import { useEffect, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_PROFILE } from './Querywrite.queries'
import {
  Mutation,
  MutationCreateProfileArgs
} from '../../../../commons/types/generated/types'

const Query = () => {
  const router = useRouter()

  const [age, setAge] = useState(0)

  const [createProfile] =
    useMutation<Mutation, MutationCreateProfileArgs>(CREATE_PROFILE)

  const [profilePackage, setProfilePackage] = useState({
    name: '',
    age,
    school: ''
  })

  const [completeSign, setCompleteSign] = useState(true)

  const [ccc, setCCC] = useState(123)

  const onClickChange = () => {
    setCCC(456)
  }

  const onChangeInput = (event) => {
    const data = {
      ...profilePackage,
      [event.target.name]: event.target.value
    }

    setProfilePackage(data)
    console.log(data)

    if (
      profilePackage.name.length > 0 &&
      profilePackage.age !== undefined &&
      profilePackage.school.length > 0
    ) {
      setCompleteSign(true)
    } else {
      setCompleteSign(false)
    }
  }

  const handleAge = (event) => {
    setAge(Number(event.target.value))
    console.log(age)
  }

  const ProfileRegisterButton = async () => {
    try {
      const result = await createProfile({
        variables: {
          ...profilePackage
        }
      })
      const message = result.data.createProfile.message
      alert(message)
      // location.reload();
      const id = profilePackage.name

      router.push(`/query/${id}`)
    } catch (error) {
      alert(error.message)
    }
  }
  const inputNameRef = useRef<any>()
  useEffect(() => {
    inputNameRef.current.focus()
    console.log('안녕하세요')
  }, [ccc])

  return (
    <QueryUI
      ProfileRegisterButton={ProfileRegisterButton}
      onChangeInput={onChangeInput}
      _state={completeSign}
      handleAge={handleAge}
      inputNameRef={inputNameRef}
      onClickChange={onClickChange}
    />
  )
}

export default Query
