import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import { LOGOUT_USER } from '../List.queries'
import HeaderUI from './Header.presenter'
import { FETCH_USERLOGGEDIN } from './Header.queries'

const HeaderPart = () => {
  const [searchColor, setSearchColor] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const [handleOpen, setHandleOpen] = useState(false)
  const client = useApolloClient()
  const router = useRouter()

  const { setAccessToken } = useContext(GlobalContext)

  const { data } = useQuery(FETCH_USERLOGGEDIN)

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
      await setAccessToken('')
      router.push('/clonecoding/login')
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickListFullPage = () => {
    router.push('/clonecoding/list/full')
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
      onClickListFullPage={onClickListFullPage}
    />
  )
}

export default HeaderPart
