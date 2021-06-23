import { useQuery } from '@apollo/client'
import withAuth from '../../../commons/hocs/withAuth'
import ListUI from './List.presenter'
import { FETCH_USEDITEMSOFTHEBEST } from './List.queries'

const ListPage = () => {
  const { data: bestData } = useQuery(FETCH_USEDITEMSOFTHEBEST)
  console.log(bestData)

  return <ListUI bestData={bestData} />
}
export default withAuth(ListPage)
