// import withAuth from '../../../../commons/hocs/withAuth'
import withAuth from '../../../../commons/hocs/withAuth'
import ListDetailUI from './Detail.presenter'

const ListDetailPage = () => {
  return <ListDetailUI />
}

export default withAuth(ListDetailPage)
