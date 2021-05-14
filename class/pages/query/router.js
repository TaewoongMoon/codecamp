import {useRouter} from 'next/router';

const RouterPage = () =>{
    const router = useRouter()

    const onClickPush = () => {
        router.push('/query/훈이')
    }
    const goBackButton = () => {
        router.back();
    }    
    const onClickReplace = () => {
        router.replace('/mutation')
    }

    return (
        <>
        <div onClick = {onClickPush} >게시물 등록페이지로 이동</div>
        <button onClick = {onClickReplace}>Replace로 이동</button>
        </>
    )
}

export default RouterPage;