import { useRouter } from 'next/router'
import Querydetail from '../../../src/components/query/detail/Querydetail.container'

export default function QueryDetailPage () {
  const router = useRouter()
  console.log(router)

  return <Querydetail />
}
