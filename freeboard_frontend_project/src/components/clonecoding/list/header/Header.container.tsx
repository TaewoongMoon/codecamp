import { useRef, useState } from 'react'
import HeaderUI from './Header.presenter'

const HeaderPart = () => {
  const [searchColor, setSearchColor] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const [handleOpen, setHandleOpen] = useState(false)

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

  return (
    <HeaderUI
      onClickInput={onClickInput}
      searchColor={searchColor}
      onClickWholePage={onClickWholePage}
      searchRef={searchRef}
      onClickHeaderModal={onClickHeaderModal}
      handleOpen={handleOpen}
      setSearchColor={setSearchColor}
    />
  )
}

export default HeaderPart
