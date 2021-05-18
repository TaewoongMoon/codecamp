import { useRouter } from "next/router"
import Query from "../../src/components/query/write/Querywrite.container"



export default function ProfilePage(){

    const router = useRouter()
  console.log(router)


    return <Query />
}