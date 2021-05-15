import {useRouter} from "next/router"
import {useQuery, gql} from "@apollo/client"

export default function QueryDetailPage(){
    
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
        <div>
            <div>
            이름: {data && data.fetchProfile.name}
            </div>
            <div>
            나이: {data && data.fetchProfile.age}
            </div>
            <div>   
            학교: {data.fetchProfile.school}
            </div>
        </div>
    )
}