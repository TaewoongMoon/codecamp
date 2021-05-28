import { useState } from 'react'
import HeaderUI from './LayoutHeader.presenter'

export default function Header() {
  const [currentMenu, setCurrentMenu] = useState('freeboard')

  const [menuSelector, setMenuSelector] = useState({
    freeboard: 'freeboard',
    secondhandmarket: '',
    mypage: ''
  })
  function onClickMenuSelector(event: any) {
    const data = {
      ...menuSelector,
      [event.target.id]: String(event.target.id)
    }
    setMenuSelector(data)
    setCurrentMenu(String(event.target.id))
  }

  return (
    <HeaderUI
      onClickMenuSelector={onClickMenuSelector}
      currentMenu={currentMenu}
      menuSelector={menuSelector}
    />
  )
}
