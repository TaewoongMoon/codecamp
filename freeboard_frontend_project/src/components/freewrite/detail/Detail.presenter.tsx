import {CodeCampWrapper, Header, LoginRegisterWrapper, LogoWrapper,CodeCampImage, LoginButton, RegisterButton, CarouselWrapper, MenuWrapper, MiniMenuWrapper2, FreeWriteMenuText, FreeWriteUsedMarketText, FreeWriteWhiteBar, FreeWriteMyPageText, MainBodyBox, MainBoxWrapper, ProfileLefterWrapper, ProfileImageBox, NameDateWrapper, NameText, DateText, ProfileHeaderBox, ProfileHeaderWrapper, AddressEmoticonWrapper, EmoticonBox, AddressEmoticon, AddressImage, AddressImageBox, ClipEmoticon, EmoticonBox2, AddressTextBox, AddressText1Box, AddressText1, AddressText2Box, AddressText2, HrLine,  TitleText,  TitleTextWrapper, ImageWrapper, Image1, TitleTotalWrapper, ImageTotalWrapper, MainTextTotalWrapper, MainTextWrapper, MainText, VideoTotalWrapper, VideoWrapper, LikeDislikeTotalWrapper, LikeDislikeWrapper, DislikeWrapper, DislikeEmoticon, DislikeNumber, LikeWrapper,LikeEmoticon, LikeNumber} from "./Detail.styles"

interface Iprops{
    data: any,
    Year: any,
    Month: any,
    Day: any


}

export default function DetailBoardUI(props:Iprops){
    

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
                                    <NameText>{props.data && props.data.fetchBoard.writer}</NameText>
                                    <DateText>{`Date: ${props.Year}.${props.Month}.${props.Day}`}</DateText>
                                </NameDateWrapper>
                            </ProfileLefterWrapper>
                            <AddressEmoticonWrapper>
                                <AddressImageBox>
                                    <AddressImage src = "/주소알림 box.png"></AddressImage>
                                    <AddressTextBox>
                                        <AddressText1Box>
                                            <AddressText1>서울특별시 영등포구 양산로200</AddressText1>
                                        </AddressText1Box>
                                        <AddressText2Box>
                                            <AddressText2>(영등포동5가, 영등포시장역)영등포 타임스퀘어2층</AddressText2>
                                        </AddressText2Box>
                                    </AddressTextBox>
                                </AddressImageBox>
                                <EmoticonBox>
                                    <EmoticonBox2>
                                        <ClipEmoticon src = "/Vector (2).png"></ClipEmoticon>
                                        <AddressEmoticon src = "/Vector (3).png"></AddressEmoticon>
                                    </EmoticonBox2>
                                </EmoticonBox>
                            </AddressEmoticonWrapper>
                        </ProfileHeaderBox>
                    </ProfileHeaderWrapper>
                    <HrLine></HrLine>
                    <TitleTotalWrapper>
                        <TitleTextWrapper>
                            <TitleText>{props.data && props.data.fetchBoard.title}</TitleText>
                        </TitleTextWrapper>
                    </TitleTotalWrapper>
                    <ImageTotalWrapper>
                        <ImageWrapper>
                            <Image1></Image1>
                        </ImageWrapper>
                    </ImageTotalWrapper>
                    <MainTextTotalWrapper>
                        <MainTextWrapper>
                            <MainText>{props.data && props.data.fetchBoard.contents}</MainText>
                        </MainTextWrapper>
                    </MainTextTotalWrapper>
                    <VideoTotalWrapper>
                        <VideoWrapper>

                        </VideoWrapper>
                    </VideoTotalWrapper>
                    <LikeDislikeTotalWrapper>
                        <LikeDislikeWrapper>
                            <LikeWrapper>
                                <LikeEmoticon src = "/Vector (4).png"></LikeEmoticon>
                                <LikeNumber>1920</LikeNumber>
                            </LikeWrapper>
                            <DislikeWrapper>
                                <DislikeEmoticon src = "/Vector (5).png"></DislikeEmoticon>
                                <DislikeNumber>1920</DislikeNumber>
                            </DislikeWrapper>
                        </LikeDislikeWrapper>
                    </LikeDislikeTotalWrapper>
                </MainBodyBox>
            </MainBoxWrapper>
        </>
    )
}