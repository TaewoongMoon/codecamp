import {useState} from "react";
import BoardUI from "./Board.List.presenter"
import {gql, useQuery} from "@apollo/client"
import { checkDocument } from "@apollo/client/utilities";


export default function BoardMain() {

    const [checkedAll, setCheckedAll] = useState()

    let newCheck = {};
    for(let i = 0 ; i < data?.fetchBoards.length; i++){
        newCheck = {...newCheck, [data.fetchBoards[i].number] : false}
    }

    const [checked, setChecked] = useState(newCheck)




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
        console.log(event.target.checked)
        if(event.target.checked === false){

            let newCheck = {};
            for(let i = 0 ; i < data?.fetchBoards.length; i++){
                newCheck = {...newCheck, [data.fetchBoards[i].number] : false}
            }
            setCheckedAll(false)
            setChecked(newCheck)
        }else if(event.target.checked === true){
            let newCheck = {};
            data?.fetchBoards.forEach((data) => {newCheck[data.number] = true})
            setCheckedAll(true)
            setChecked(newCheck)
        }
    }



    const {data} = useQuery(FETCH_BOARDS)





    function onClickCheckBox(event){
        const values = {
            ...checked,
            [event.target.id] : event.target.checked
        }

        setChecked(values)

        let result_map = Object.keys(values).map((props) => {
            return [String(props), values[props]]
        })

        console.log(result_map)
        let checkbox_result = [];

        for(let i = 0 ; i < result_map.length; i++){
            if(result_map[i][1] === true){
                checkbox_result.push(result_map[i][1])
               
            }
        }

        //이런방법으로도 가능하다.

        // for(let i = 0; i<data?.data.fetchBoards.length; i++){
        // values.push(data[data?.fetchBoards[i].number])
        //}



        if(checkbox_result.length === data?.fetchBoards.length){
            setCheckedAll(true)
        }else if(checkbox_result.length !== data?.fetchBoards.length){
            setCheckedAll(false)
        }

    }



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