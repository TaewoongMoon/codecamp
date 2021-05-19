import styled from "@emotion/styled";
import {WifiOutlined, SendOutlined, UsbOutlined} from "@ant-design/icons";


export const EatsRoadWrapper = styled.div`
    width: 640px;
    height: 1138px;
    padding: 0 0 83px ;
    background-color: #ffffff;
`
export const TotalWrapper = styled.div`
`
export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    left:50px;
`

export const EatsRoadImage = styled.img`
    position:absolute;
    width: 640px;
    height: 1138px;
    padding: 0 0 83px;
    background-color: #ffffff;
    background: transparent;
`

export const StatusBar = styled.div`
    width: 100%;
    height: 43px;
    margin: 0 1px 0 0;
    background-color: (0, 0, 0 , 0.1);
    position:absolute;
    /* display:flex;
    justify-content:flex-end; */
`

export const IconWrapper= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 210px;
    height: 43px;
    margin: 0 0 0 430px;
    padding: 9px 14px 4px;
`

export const Wifi = styled(WifiOutlined)`
    font-size:21px;
    margin-right: 18px;
    color: #ffffff;
`

export const Network = styled(SendOutlined)`
    font-size: 21px;
    margin-right: 18px;
    color: #ffffff;
`

export const Battery = styled(UsbOutlined)`
    font-size: 23px;
    margin-right: 16px;
    color: #ffffff;
`

export const TimeWrapper = styled.div`
    width: 58px;
    height: 30px;
`
export const Timer = styled.span`
    font-size: 23px;
    color: #ffffff;
`

export const LogoWrapper = styled.div`
    width: 100%;
    padding-top: 224px;
    padding-left: 270px;
    padding-right: 270px;
    object-fit: contain;
`
export const Logo = styled.img`
    position: absolute;
`
export const EatsRoadTextWrapper = styled.div`
    width: 100%;
    padding-top: 127px;
    padding-left: 211px;
    padding-right: 211px;
    position:absolute;
`
export const EatsRoadText = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: #ffffff;
`
export const DetailBigWrapper = styled.div`
    padding-left:51px;
    padding-right: 49px;
    padding-top: 284px;
    position: absolute;
`

export const EmailWrapper = styled.div`
    width: 100%;
    height: 81px;
    display: flex;
    flex-direction: column;
`

export const EmailTextWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const EmailTextInput = styled.input`
    width: 450px;
    height: 30px;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    font-size: 24px;
`
export const EmailTextButton = styled.img`
    width: 20px;
    height: 20px;
`
export const DashedLine = styled.hr`
    width: 540px;
    height: 1px;
    margin-top: 10px;
`

export const EmailErrorWrapper = styled.div`
    width: 100%;
    padding-top: 10px;
`
export const EmailErrorText = styled.span`
    font-size: 18px;
    color: #ff1b6d;
`
export const PasswordWrapper = styled.div`
    padding-top: 29px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 29px;
`
export const PasswordTextWrapper = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const PasswordTextInput = styled.input`
    width: 450px;
    height: 20px;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    font-size: 10px;
`
export const PasswordTextButton = styled.img`
    width: 20px;
    height: 20px;
`

export const PasswordErrorWrapper = styled.div`
    width: 100%;
    padding-top: 10px;
`

export const PasswordErrorText = styled.span`
    font-size: 18px;
    color: #ff1b6d;
`

export const LoginButtonWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
`

export const LoginButton = styled.button`
    width: 540px;
    height: 76px;
    background-color: #ff1b6d;
    border-radius: 38px;
    opacity: 0.6;
    text-align: center;
    font-weight: bold;
    font-size: 26px;
`
export const ButtonCollectionWrapper = styled.div`
    padding-top: 44px;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    color:white;
    padding-left: 71px;
    padding-right: 71px;
`
export const EmailWrapperBottom = styled.div`
    width: 95px;
`
export const EmailText = styled.span`
    font-size : 20px;
    color: #ffffff;
`

export const Bar = styled.div`
    width: 1px;
    height: 12px;
    opacity: 0.4;
    background-color: #ffffff;
    margin-top: 3.7px;
`
export const PasswordWrapperBottom = styled.div`
    width: 113px;
`
export const PasswordText = styled.span`
    font-size: 20px;
    color: #ffffff;
`
export const SignupWrapper = styled.div`
    width: 74px;
`
export const SignupText = styled.span`
    font-size: 20px;
    color: #ffffff;
`

export const KakaoLoginWrapper = styled.div`
    width: 100%;
    padding-top: 61px;
`
export const KaKaoLoginButton = styled.button`
    width: 540px;
    height: 76px;
    border: solid 2px #fae100;
    border-radius: 38px;
    font-size: 26px;
    text-align: center;
    color: #fae100;
    background: transparent;
    font-weight: bold;
`
