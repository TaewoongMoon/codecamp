import { EatsRoadWrapper, EatsRoadImage,Container,IconWrapper, StatusBar, Wifi, Network, Battery, TimeWrapper, Timer, LogoWrapper, Logo, EatsRoadTextWrapper, EatsRoadText, EmailTextWrapper, EmailTextInput, DetailBigWrapper, EmailWrapper, EmailTextButton, DashedLine, EmailErrorWrapper, EmailErrorText, PasswordWrapper, PasswordTextWrapper, PasswordTextInput, PasswordTextButton, PasswordErrorWrapper, PasswordErrorText, LoginButton, LoginButtonWrapper, ButtonCollectionWrapper, SignupWrapper, SignupText, EmailWrapperBottom,EmailText, Bar, PasswordWrapperBottom,PasswordText, KakaoLoginWrapper, KaKaoLoginButton} from '../../styles/01-HwEats';
import {useState} from "react";



const EatsRoadPage = () => {
    
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[errorEmail, setErrorEmail] = useState("");
const[errorPassword, setErrorPassword] = useState("");


const changeMail = (event) => {
    const temp = event.target.value;
    setEmail(temp);
}

const changePassword = (event) => {
    const temp = event.target.value;
    setPassword(temp);
}

const setErrorIdPw = () => {
    if(!email.includes('@') || email.length === 0){
        setErrorEmail('이메일 주소를 다시 확인해주세요.')
    }else if(password.length < 8){
        setErrorPassword("8-16자의 영문,숫자, 특수 문자만 사용 가능합니다.")
    }else{
        const message = "회원가입에 성공하셨습니다.";
        alert(message);
        location.reload();
    }
}

    return (

        <>
        <Container>
            <EatsRoadImage src = "/img-bg@3x.png" />
            <EatsRoadWrapper>
                <StatusBar>
                    <IconWrapper>
                        <Wifi></Wifi>
                        <Network></Network>
                        <Battery></Battery>
                        <TimeWrapper>
                            <Timer>12:30</Timer>
                        </TimeWrapper>
                    </IconWrapper>
                </StatusBar>
                <LogoWrapper>
                    <Logo src = "/img-100-logo-white.png" />
                </LogoWrapper>
                <EatsRoadTextWrapper>
                    <EatsRoadText>잇츠로드</EatsRoadText>
                </EatsRoadTextWrapper>
                <DetailBigWrapper>
                    <EmailWrapper>
                        <EmailTextWrapper>
                            <EmailTextInput type ="text" onChange = {changeMail} />
                            <EmailTextButton src = "/ic-20-delete-white.png" />
                        </EmailTextWrapper>
                        <DashedLine></DashedLine>
                        <EmailErrorWrapper>
                            <EmailErrorText>{errorEmail}</EmailErrorText>
                        </EmailErrorWrapper>
                    </EmailWrapper>
                    <PasswordWrapper>
                        <PasswordTextWrapper>
                            <PasswordTextInput type ="password" onChange = {changePassword} />
                            <PasswordTextButton src = "/ic-20-delete-white.png" />
                        </PasswordTextWrapper>
                        <DashedLine></DashedLine>
                        <PasswordErrorWrapper>
                            <PasswordErrorText>{errorPassword}</PasswordErrorText>
                        </PasswordErrorWrapper>
                    </PasswordWrapper>
                    <LoginButtonWrapper>
                        <LoginButton onClick = {setErrorIdPw}>로그인</LoginButton>
                    </LoginButtonWrapper>
                    <ButtonCollectionWrapper>
                        <EmailWrapperBottom>
                            <EmailText>이메일 찾기</EmailText>
                        </EmailWrapperBottom>
                        <Bar></Bar>
                        <PasswordWrapperBottom>
                            <PasswordText>비밀번호 찾기</PasswordText>
                        </PasswordWrapperBottom>
                        <Bar></Bar>
                        <SignupWrapper>
                            <SignupText>회원가입</SignupText>
                        </SignupWrapper>
                    </ButtonCollectionWrapper>
                    <KakaoLoginWrapper>
                        <KaKaoLoginButton>카카오톡으로 로그인</KaKaoLoginButton>
                    </KakaoLoginWrapper>
                </DetailBigWrapper>
            </EatsRoadWrapper>
        </Container>
        </>


    );
}

export default EatsRoadPage;