import {useQuery, gql} from '@apollo/client';
import {useRouter} from "next/router";
import DetailBoardUI from "./Detail.presenter"


export default function DetailBoardContainer(){
    const router = useRouter()

    console.log(router.query)

    const FETCH_BOARD = gql`
        query fetchBoard($_id: ID!){
            fetchBoard(boardId: $_id){
                writer
                title
                contents
                createdAt
            }
        }
    `
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            _id: router.query._id
        }
    })

    console.log('data', data)

    const Year = String(new Date(data?.fetchBoard.createdAt).getFullYear())
    const Month = String(new Date(data?.fetchBoard.createdAt).getMonth()).padStart(2, "0")
    const Day = String(new Date(data?.fetchBoard.createdAt).getDay()).padStart(2, "0")


    return <DetailBoardUI 
    data = {data} 
    Year = {Year} 
    Month = {Month} 
    Day = {Day}/>
}