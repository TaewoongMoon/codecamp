import styled from '@emotion/styled'

export const TotalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
export const LoginImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.8);
`
export const SignUpCancelImage = styled.img`
  max-width: 24px;
  width: 100%;
  height: 24px;
  position: fixed;
  top: 79px;
  left: 1816px;
  cursor: pointer;
`
export const LoginSmallWrapper = styled.div`
  max-width: 384px;
  width: 100%;
  height: 664px;
  margin-top: 159px;
  display: flex;
  flex-direction: column;
`
export const CodeCampLogoWrapper = styled.div`
  max-width: 384px;
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CodeCampLogo = styled.img`
  max-width: 288px;
  width: 100%;
  height: 44px;
`

export const SignUpText = styled.div`
  max-width: 384px;
  width: 100%;
  height: 40px;
  color: #ffffff;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`
export const EmailText = styled.div`
  margin-top: 40px;
  max-width: 45px;
  width: 100%;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
`
export const IdInputBox = styled.div`
  margin-top: 12px;
  max-width: 384px;
  width: 100%;
  height: 64px;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const IdInput = styled.input`
  max-width: 352px;
  width: 100%;
  height: 64px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  ::placeholder {
    color: #ffffff;
    font-size: 16px;
    opacity: 0.6;
    margin-left: 16px;
  }
`

export const NameText = styled.div`
  margin-top: 20px;
  max-width: 45px;
  width: 100%;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
`
export const NameInputBox = styled.div`
  margin-top: 12px;
  max-width: 384px;
  width: 100%;
  height: 64px;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const NameInput = styled.input`
  max-width: 352px;
  width: 100%;
  height: 64px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  ::placeholder {
    color: #ffffff;
    font-size: 16px;
    opacity: 0.6;
    margin-left: 16px;
  }
`

export const PasswordText = styled.div`
  margin-top: 20px;
  max-width: 59px;
  width: 100%;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
`

export const PasswordInputBox = styled.div`
  margin-top: 12px;
  max-width: 384px;
  width: 100%;
  height: 64px;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PasswordInput = styled.input`
  max-width: 352px;
  width: 100%;
  height: 64px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  ::placeholder {
    color: #ffffff;
    font-size: 16px;
    opacity: 0.6;
    margin-left: 16px;
  }
`

export const PasswordDoubleCheckText = styled.div`
  margin-top: 20px;
  max-width: 92px;
  width: 100%;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
`
export const PasswordDoubleCheckInputBox = styled.div`
  margin-top: 12px;
  max-width: 384px;
  width: 100%;
  height: 64px;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PasswordDoubleCheckInput = styled.input`
  max-width: 352px;
  width: 100%;
  height: 64px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  ::placeholder {
    color: #ffffff;
    font-size: 16px;
    opacity: 0.6;
    margin-left: 16px;
  }
`
export const CheckBoxWrapper = styled.div`
  margin-top: 22px;
  max-width: 384px;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
`
export const CheckBoxSmallWrapper = styled.div`
  max-width: 143px;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CheckBox = styled.img`
  max-width: 20px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`
export const LoginBox = styled.div`
  max-width: 111px;
  width: 100%;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`
export const LoginButton = styled.button`
  margin-top: 42px;
  max-width: 384px;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  color: ${(props: any) => (props.disabled ? '#bdbdbd' : '#000000')};
  background-color: ${(props: any) => (props.disabled ? '#4f4f4f' : '#FFD600')};
  font-size: 16px;
`
export const LoginBottomLine = styled.div`
  margin-top: 40px;
  max-width: 384px;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
`

export const MenuWrapper = styled.div`
  margin-top: 33px;
  max-width: 384px;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
`
export const MenuSmallWrapper = styled.div`
  max-width: 284px;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const EmailWrapper = styled.div`
  max-width: 68px;
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
`
export const PasswordWrapper = styled.div`
  max-width: 82px;
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
`
export const SignUpWrapper = styled.div`
  max-width: 52px;
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
`

export const DivideBar1 = styled.div`
  max-width: 1px;
  width: 100%;
  height: 12px;
  background-color: #ffffff;
`

export const DivideBar2 = styled.div`
  max-width: 1px;
  width: 100%;
  height: 12px;
  background-color: #ffffff;
`
