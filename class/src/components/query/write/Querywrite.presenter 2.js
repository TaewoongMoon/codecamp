import {Name, Button} from './Querywrite.styles'
const QueryUI = (props) => {
    

    return (
        <>
        <div>
            <Name>이름: </Name><input type = "text" name = "name" onChange = {props.onChangeInput}></input>
            <span>나이: </span><input type = "text" name = "age" onChange = {props.handleAge}></input>
            <span>학교: </span><input type = "text" name = "school" onChange = {props.onChangeInput}></input>
            <Button onClick = {props.ProfileRegisterButton} disabled = {!props._state}>프로필 등록하기</Button>
        </div>
        </>
    )
}

export default QueryUI;