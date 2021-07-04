import { useRouter } from 'next/router'
import { useState } from 'react'
import ListFullUI from './Full.presenter'

const ListFullPage = () => {
  const [regionOnChange, setRegionOnChange] = useState('')
  const router = useRouter()
  const onChangeRegion = (event: any) => {
    const regionTemp = event.target.value
    setRegionOnChange(regionTemp)
    if (regionTemp === '지역을 선택하세요') {
      router.push('/clonecoding/main')
    }
  }
  return (
    <ListFullUI
      onChangeRegion={onChangeRegion}
      regionOnChange={regionOnChange}
    />
  )
}

export default ListFullPage
