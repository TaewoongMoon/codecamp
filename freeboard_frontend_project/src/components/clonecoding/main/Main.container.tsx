import withAuth from '../../../commons/hocs/withAuth'
import CloneMainUI from './Main.presenter'
const CloneMainPage = () => {
  return <CloneMainUI></CloneMainUI>
}

export default withAuth(CloneMainPage)
