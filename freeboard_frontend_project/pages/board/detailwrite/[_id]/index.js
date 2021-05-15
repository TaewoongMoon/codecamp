import {useRouter} from "next/router"
import {CodeCampWrapper, Header, LoginRegisterWrapper, LogoWrapper,CodeCampImage, LoginButton, RegisterButton, CarouselWrapper, MenuWrapper, MainBodyWrapper, MiniMenuWrapper2, FreeWriteMenuText, FreeWriteUsedMarketText, FreeWriteWhiteBar, FreeWriteMyPageText, MainBodyBox, MainBoxWrapper, ProfileLefterWrapper, ProfileImageBox, NameDateWrapper, NameText, DateText, ProfileHeaderBox, ProfileHeaderWrapper} from "../../../../styles/Freewrite"
export default function freewriteBoard(){
    
    const router = useRouter()

    console.log(router.query)


    return(
        <>
        <Header>
            <LogoWrapper>
                <CodeCampWrapper>
                    <CodeCampImage src = "/logo (1).png"></CodeCampImage>
                </CodeCampWrapper>
                <LoginRegisterWrapper>
                    <LoginButton>로그인</LoginButton>
                    <RegisterButton>회원가입</RegisterButton>
                </LoginRegisterWrapper>
            </LogoWrapper>
            </Header>
            <CarouselWrapper></CarouselWrapper>
            <MenuWrapper>
                <MiniMenuWrapper2>
                    <FreeWriteMenuText>자유게시판</FreeWriteMenuText>
                    <FreeWriteWhiteBar></FreeWriteWhiteBar>
                    <FreeWriteUsedMarketText>중고마켓</FreeWriteUsedMarketText>
                    <FreeWriteWhiteBar></FreeWriteWhiteBar>
                    <FreeWriteMyPageText>마이페이지</FreeWriteMyPageText>
                </MiniMenuWrapper2>
            </MenuWrapper>
            <MainBoxWrapper>
                <MainBodyBox>
                    <ProfileHeaderWrapper>
                        <ProfileHeaderBox>
                            <ProfileLefterWrapper>
                                <ProfileImageBox src = "/Vector (1).png"></ProfileImageBox>
                                <NameDateWrapper>
                                    <NameText>노원두</NameText>
                                    <DateText>Date:2021.02.18</DateText>
                                </NameDateWrapper>
                            </ProfileLefterWrapper>
                        </ProfileHeaderBox>
                    </ProfileHeaderWrapper>
                </MainBodyBox>
            </MainBoxWrapper>
        </>
    )
}