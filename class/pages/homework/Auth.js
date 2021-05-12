import {useState} from "react";

const AuthNum = () =>{

    const[token, setToken] = useState('000000')
    const[timer, setTimer] = useState("03:00")
    function sendAuth(){
        const PhoneToken = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
        setToken(PhoneToken)
        let time = 180;
        const TimeExpiration = setInterval(function(){
            
            const minutes = String(Math.floor(time / 60)).padStart(2,'0')
            const seconds = String(time % 60).padStart(2,'0')

            const LiveTime = `${minutes}:${seconds}`
            setTimer(LiveTime)

            time = time - 1
            if(time < 0){
                clearInterval(TimeExpiration)
            }
        },1000) 
    }
    return( 
    <>
    <div>
        <span>{token}</span>
        <button onClick = {sendAuth}>인증번호 전송</button>
    </div>
    <div>
        <span>{timer}</span>
    </div>
    </>
  
    );
        
}

export default AuthNum;