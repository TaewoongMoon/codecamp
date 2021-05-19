import {useState} from "react";
import BoardUI from "./Board.List.presenter"
import {gql, useQuery} from "@apollo/client"
import { checkDocument } from "@apollo/client/utilities";


export default function BoardMain() {

    const [checkedAll, setCheckedAll] = useState()

    const [checked, setChecked] = useState({
        361: false,
        360: false,
        359: false,
        356: false,
        354: false,
        353: false,
        352: false,
        351: false,
        349: false,
        348: false,
    })




    const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            title
            createdAt
        }
    }
`

   
    function onClickHeaderBox(event){

        if(checkedAll === false){
            setCheckedAll(true)
            setChecked(true)
        }else if(checkedAll === true){
            setCheckedAll(false)
            setChecked(false)
        }
    }








    function onClickCheckBox(event){
        const data = {
            ...checked,
            [event.target.id] : event.target.checked
        }

        setChecked(data)

        let result_map = Object.keys(data).map((props) => {
            return [String(props), data[props]]
        })
        console.log(result_map)
        let checkbox_result = [];

        for(let i = 0 ; i < result_map.length; i++){
            if(result_map[i][1] === true){
                checkbox_result.push(result_map[i][1])
                
            }
        }

        if(checkbox_result.length === 10){
            setCheckedAll(true)
        }else if(checkbox_result.length === 0){
            setCheckedAll(false)
        }

    }

const {data} = useQuery(FETCH_BOARDS)


    return (
        <BoardUI 
        data = {data}
        onClickCheckBox = {onClickCheckBox}
        checkedAll = {checkedAll}
        onClickHeaderBox = {onClickHeaderBox}
        checked = {checked}
        />
    )
}