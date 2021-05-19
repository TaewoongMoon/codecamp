import QueryUI from "./Querywrite.presenter"
import {useState} from "react";
import {useMutation} from "@apollo/client";
import {useRouter} from 'next/router';
import {CREATE_PROFILE} from './Querywrite.queries'
import { Mutation, MutationCreateBoardArgs, MutationCreateProfileArgs } from "../../../commons/types/generated/types";


const Query = () => {

    const router = useRouter();

    const[age, setAge] = useState(0)

    const [createProfile] = useMutation<Mutation, MutationCreateProfileArgs>(CREATE_PROFILE);


    const [profilePackage, setProfilePackage] = useState({
        name : '',
        age,
        school: '',
    })
    
    const[completeSign, setCompleteSign] = useState(true)

    const onChangeInput = (event) => {
        const data = {
            ...profilePackage,
            [event.target.name] : event.target.value,

        }

        setProfilePackage(data)
        console.log(data)

        if(profilePackage.name.length > 0 && profilePackage.age !== undefined && profilePackage.school.length >0){
            setCompleteSign(true)
        }else{
            setCompleteSign(false)
        }

    }


    const handleAge =(event) => {
        setAge(Number(event.target.value))
        console.log(age)
    }




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
            const id = profilePackage.name

            router.push(`/query/${id}`)
 
        }catch (error){
            alert(error.message)
        }
    }

    return (
        <QueryUI 
        ProfileRegisterButton = {ProfileRegisterButton}
        onChangeInput = {onChangeInput}
        _state = {completeSign}
        handleAge = {handleAge}
        />
    )
}

export default Query;