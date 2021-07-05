import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import withAuth from '../../../../commons/hocs/withAuth'
import ListFullUI from './Full.presenter'
import { FETCH_USEDITEMS } from './Full.queries'

const ListFullPage = () => {
  const [regionOnChange, setRegionOnChange] = useState('')
  const router = useRouter()
  const [page] = useState(0)
  const { data: usedItemsData, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: {
      page: page
    }
  })
  const onChangeRegion = (event: any) => {
    const regionTemp = event.target.value
    setRegionOnChange(regionTemp)
    if (regionTemp === '지역을 선택하세요') {
      router.push('/clonecoding/main')
    }
  }
  const onLoadMore = () => {
    if (!usedItemsData) return
    if (usedItemsData?.fetchUseditems?.length % 10 !== 0) return

    fetchMore({
      variables: {
        page: Math.floor(usedItemsData?.fetchUseditems?.length / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(prev, fetchMoreResult)
        const aaa = Object.assign({}, prev, {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems
          ]
        })
        console.log('aaa', aaa.fetchUseditems)
        return aaa
      }
    })
  }
  return (
    <ListFullUI
      onChangeRegion={onChangeRegion}
      regionOnChange={regionOnChange}
      onLoadMore={onLoadMore}
      usedItemsData={usedItemsData}
    />
  )
}

export default withAuth(ListFullPage)
