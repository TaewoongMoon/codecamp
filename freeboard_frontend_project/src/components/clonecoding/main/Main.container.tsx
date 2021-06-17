import { useState } from 'react'
import withAuth from '../../../commons/hocs/withAuth'
import CloneMainUI from './Main.presenter'
const CloneMainPage = () => {
  const [selectedId, setSelectedId] = useState('favorite')

  const onClickMenuList = (event: any) => {
    setSelectedId(event.target.id)
  }
  return (
    <CloneMainUI onClickMenuList={onClickMenuList} selectedId={selectedId} />
  )
}

export default withAuth(CloneMainPage)
