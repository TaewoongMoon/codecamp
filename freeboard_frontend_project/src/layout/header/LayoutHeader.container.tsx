import { useRouter } from 'next/router'
import { useState } from 'react'
import HeaderUI from './LayoutHeader.presenter'

export default function Header() {
  const router = useRouter()
  const boardId = router.query._id
  const [currentMenu, setCurrentMenu] = useState('freeboard')

  const [menuSelector, setMenuSelector] = useState({
    freeboard: 'freeboard',
    secondhandmarket: '',
    mypage: ''
  })
  async function onClickMenuSelector(event: any) {
    const data = {
      ...menuSelector,
      [event.target.id]: String(event.target.id)
    }

    setMenuSelector(data)
    const temp = String(event.target.id)
    setCurrentMenu(temp)

    if (temp === 'freeboard') {
      router.push(`/board/detailwrite/${boardId}`)
    } else if (temp === 'secondhandmarket') {
      router.push(`/board/detailwrite/${boardId}/secondhandmarket`)
    } else if (temp === 'mypage') {
      router.push(`/board/detailwrite/${boardId}/mypage`)
    }
  }

  return (
    <HeaderUI
      onClickMenuSelector={onClickMenuSelector}
      currentMenu={currentMenu}
      menuSelector={menuSelector}
    />
  )
}
