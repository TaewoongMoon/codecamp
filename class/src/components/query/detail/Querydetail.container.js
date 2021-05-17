import QuerydetailUI from "./Querydetail.presenter"
import {useRouter} from "next/router"
import {useQuery, gql} from "@apollo/client"



export default function Querydetail(){
    const router = useRouter()

    const FETCH_PROFILE = gql`
        query fetchProfile($name:String){
            fetchProfile(name:$name){
                number
                name
                age
                school
            }
        }
    `

    const {data,loading,error} = useQuery(FETCH_PROFILE, {
        variables:{
            name: router.query.name,

        }
    }
    )

    console.log('data', data)

    if(loading){
    return <span>loading</span>
    }
    if(error){
        return<span>error</span>
    }


    return(
        <QuerydetailUI data = {data}/>
    )

}