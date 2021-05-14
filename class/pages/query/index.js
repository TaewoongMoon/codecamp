import {useState} from "react";
import {useMutation, gql} from "@apollo/client";



export default function ProfilePage(){


    const[age, setAge] = useState(0)

    const[profilePackage, setProfilePackage] = useState({
        name : '',
        age,
        school: ''
    })
  

    const CREATE_PROFILE = gql`
    mutation createProfile($name: String, $age:Int, $school: String){
        createProfile(
            name: $name,
            age: $age,
            school: $school
        )
        {
            message
        }
    }
    `
    const onChangeInput = (event) => {
        const data = {
            ...profilePackage,
            [event.target.name] : event.target.value,
            age
        }

        setProfilePackage(data)
        console.log(data)
    }


    const handleAge =(event) => {
        setAge(Number(event.target.value))
        console.log(age)
    }


    const [createProfile] = useMutation(CREATE_PROFILE);


    const ProfileRegisterButton = async() => {
        try {
            const result = await createProfile({
                variables: {
                    ...profilePackage
                }
            })
            const message = result.data.createProfile.message;
            alert(message);
            // location.reload();
 
        }catch (error){
            alert(error.message)
        }
    }




    return (
        <div>
            <span>이름: </span><input type = "text" name = "name" onChange = {onChangeInput}></input>
            <span>나이: </span><input type = "text" name = "age" onChange = {handleAge}></input>
            <span>학교: </span><input type = "text" name = "school" onChange = {onChangeInput}></input>
            <button onClick = {ProfileRegisterButton}>프로필 등록하기</button>
        </div>
    )
}