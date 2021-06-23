import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client'
import { useRef, useState } from 'react'
import { LOGOUT_USER } from '../List.queries'
import HeaderUI from './Header.presenter'

const HeaderPart = () => {
  const [searchColor, setSearchColor] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const [handleOpen, setHandleOpen] = useState(false)
  const client = useApolloClient()

  const FETCH_USERLOGGEDIN = gql`
    query fetchUserLoggedIn {
      fetchUserLoggedIn {
        _id
        email
        name
        createdAt
      }
    }
  `
  const { data } = useQuery(FETCH_USERLOGGEDIN)
  console.log(data)

  const onClickInput = () => {
    setSearchColor(true)
    searchRef.current?.focus()
  }
  const onClickWholePage = () => {
    // if (searchColor === true) {
    //   setSearchColor(false)
    // }
  }
  const onClickHeaderModal = () => {
    if (handleOpen === false) {
      setHandleOpen(true)
    } else {
      setHandleOpen(false)
    }
  }

  const [logoutUser] = useMutation(LOGOUT_USER)

  const onClickLogOut = async () => {
    try {
      const response = logoutUser()
      console.log(response)
      client.clearStore() // 질문
      location.reload()
      //   router.push('/clonecoding/login') // cache를 비운이후의 문제에 대해서 물어보기
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <HeaderUI
      onClickInput={onClickInput}
      searchColor={searchColor}
      onClickWholePage={onClickWholePage}
      searchRef={searchRef}
      onClickHeaderModal={onClickHeaderModal}
      handleOpen={handleOpen}
      setSearchColor={setSearchColor}
      onClickLogOut={onClickLogOut}
      data={data}
    />
  )
}

export default HeaderPart
