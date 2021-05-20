import {
  CodeCampWrapper,
  Header,
  LoginRegisterWrapper,
  LogoWrapper,
  CodeCampImage,
  LoginButton,
  RegisterButton,
  CarouselWrapper,
  MenuWrapper,
  MiniMenuWrapper2,
  FreeWriteMenuText,
  FreeWriteUsedMarketText,
  FreeWriteWhiteBar,
  FreeWriteMyPageText,
  MainBodyBox,
  MainBoxWrapper,
  ProfileLefterWrapper,
  ProfileImageBox,
  NameDateWrapper,
  NameText,
  DateText,
  ProfileHeaderBox,
  ProfileHeaderWrapper,
  AddressEmoticonWrapper,
  EmoticonBox,
  AddressEmoticon,
  AddressImage,
  AddressImageBox,
  ClipEmoticon,
  EmoticonBox2,
  AddressTextBox,
  AddressText1Box,
  AddressText1,
  AddressText2Box,
  AddressText2,
  HrLine,
  TitleText,
  TitleTextWrapper,
  ImageWrapper,
  Image1,
  TitleTotalWrapper,
  ImageTotalWrapper,
  MainTextTotalWrapper,
  MainTextWrapper,
  MainText,
  VideoTotalWrapper,
  VideoWrapper,
  LikeDislikeTotalWrapper,
  LikeDislikeWrapper,
  DislikeWrapper,
  DislikeEmoticon,
  DislikeNumber,
  LikeWrapper,
  LikeEmoticon,
  LikeNumber,
  RouterButtonBigWrapper,
  RouterListButton,
  RouterFixButton,
  RouterButtonSmallWrapper,
  Hr2LineWrapper,
  Hr2Line,
  CommentBigWrapper,
  CommentWrapper,
  CommentBox,
  CommentText,
  CommentImage,
  RatingBigWrapper,
  RatingSmallWrapper,
  WriterBox,
  RatingMiddleWrapper,
  PasswordBox,
  StarBox,
  StarImage1,
  StarImage2,
  StarImage3,
  StarImage4,
  StarImage5,
  CommentBoxBigWrapper,
  CommentBoxSmallWrapper,
  CommentBoxBigInput,
  CommentBoxSmallInputWrapper,
  CommentBoxSmallLimitBox,
  CommentLimitBox,
  RegisterBox,
  RatingBigWrapper2,
  RatingMiddleWrapper2,
  RatingSmallWrapper2,
  WriterBox2,
  PasswordBox2,
  StarBox2,
  StarImage6,
  StarImage7,
  StarImage8,
  StarImage9,
  StarImage10,
  CommentBoxBigWrapper2,
  CommentBoxSmallWrapper2,
  CommentBoxBigInput2,
  CommentBoxSmallInputWrapper2,
  CommentBoxSmallLimitBox2,
  CommentLimitBox2,
  RegisterBox2
} from './Detail.styles'

interface Iprops {
  data: any
  Year: any
  Month: any
  Day: any
}

export default function DetailBoardUI (props: Iprops) {
  return (
    <>
      <Header>
        <LogoWrapper>
          <CodeCampWrapper>
            <CodeCampImage src="/logo (1).png"></CodeCampImage>
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
                <ProfileImageBox src="/Vector (1).png"></ProfileImageBox>
                <NameDateWrapper>
                  <NameText>
                    {props.data && props.data.fetchBoard.writer}
                  </NameText>
                  <DateText>{`Date: ${props.Year}.${props.Month}.${props.Day}`}</DateText>
                </NameDateWrapper>
              </ProfileLefterWrapper>
              <AddressEmoticonWrapper>
                <AddressImageBox>
                  <AddressImage src="/주소알림 box.png"></AddressImage>
                  <AddressTextBox>
                    <AddressText1Box>
                      <AddressText1>서울특별시 영등포구 양산로200</AddressText1>
                    </AddressText1Box>
                    <AddressText2Box>
                      <AddressText2>
                        (영등포동5가, 영등포시장역)영등포 타임스퀘어2층
                      </AddressText2>
                    </AddressText2Box>
                  </AddressTextBox>
                </AddressImageBox>
                <EmoticonBox>
                  <EmoticonBox2>
                    <ClipEmoticon src="/Vector (2).png"></ClipEmoticon>
                    <AddressEmoticon src="/Vector (3).png"></AddressEmoticon>
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
              <MainText>
                {props.data && props.data.fetchBoard.contents}
              </MainText>
            </MainTextWrapper>
          </MainTextTotalWrapper>
          <VideoTotalWrapper>
            <VideoWrapper></VideoWrapper>
          </VideoTotalWrapper>
          <LikeDislikeTotalWrapper>
            <LikeDislikeWrapper>
              <LikeWrapper>
                <LikeEmoticon src="/Vector (4).png"></LikeEmoticon>
                <LikeNumber>1920</LikeNumber>
              </LikeWrapper>
              <DislikeWrapper>
                <DislikeEmoticon src="/Vector (5).png"></DislikeEmoticon>
                <DislikeNumber>1920</DislikeNumber>
              </DislikeWrapper>
            </LikeDislikeWrapper>
          </LikeDislikeTotalWrapper>
        </MainBodyBox>
      </MainBoxWrapper>
      <RouterButtonBigWrapper>
        <RouterButtonSmallWrapper>
          <RouterListButton>목록으로</RouterListButton>
          <RouterFixButton>수정하기</RouterFixButton>
        </RouterButtonSmallWrapper>
      </RouterButtonBigWrapper>
      <Hr2LineWrapper>
        <Hr2Line></Hr2Line>
      </Hr2LineWrapper>
      <CommentBigWrapper>
        <CommentWrapper>
          <CommentBox>
            <CommentImage src="/Vector (7).png"></CommentImage>
            <CommentText>댓글</CommentText>
          </CommentBox>
        </CommentWrapper>
      </CommentBigWrapper>
      <RatingBigWrapper>
        <RatingMiddleWrapper>
          <RatingSmallWrapper>
            <WriterBox type = "text" placeholder = "작성자"></WriterBox>
            <PasswordBox type = "password" placeholder = "비밀번호"></PasswordBox>
            <StarBox>
              <StarImage1 src = "/Star.png"></StarImage1>
              <StarImage2 src = "/Star.png"></StarImage2>
              <StarImage3 src = "/Star.png"></StarImage3>
              <StarImage4 src = "/Star.png"></StarImage4>
              <StarImage5 src = "/Star.png"></StarImage5>
            </StarBox>
          </RatingSmallWrapper>
        </RatingMiddleWrapper>
      </RatingBigWrapper>
      <CommentBoxBigWrapper>
        <CommentBoxSmallWrapper>
          <CommentBoxBigInput type = "input" placeholder = "개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentBoxBigInput>
          <CommentBoxSmallInputWrapper>
            <CommentBoxSmallLimitBox>
              <CommentLimitBox>0/100</CommentLimitBox>
            </CommentBoxSmallLimitBox>
            <RegisterBox>등록하기</RegisterBox>
          </CommentBoxSmallInputWrapper>
        </CommentBoxSmallWrapper>
      </CommentBoxBigWrapper>
      <RatingBigWrapper2>
        <RatingMiddleWrapper2>
          <RatingSmallWrapper2>
            <WriterBox2 type = "text" placeholder = "작성자"></WriterBox2>
            <PasswordBox2 type = "password" placeholder = "비밀번호"></PasswordBox2>
            <StarBox2>
              <StarImage6 src = "/Star.png"></StarImage6>
              <StarImage7 src = "/Star.png"></StarImage7>
              <StarImage8 src = "/Star.png"></StarImage8>
              <StarImage9 src = "/Star.png"></StarImage9>
              <StarImage10 src = "/Star.png"></StarImage10>
            </StarBox2>
          </RatingSmallWrapper2>
        </RatingMiddleWrapper2>
      </RatingBigWrapper2>
      <CommentBoxBigWrapper2>
        <CommentBoxSmallWrapper2>
          <CommentBoxBigInput2 type = "input" placeholder = "개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentBoxBigInput2>
          <CommentBoxSmallInputWrapper2>
            <CommentBoxSmallLimitBox2>
              <CommentLimitBox2>46/100</CommentLimitBox2>
            </CommentBoxSmallLimitBox2>
            <RegisterBox2>수정하기</RegisterBox2>
          </CommentBoxSmallInputWrapper2>
        </CommentBoxSmallWrapper2>
      </CommentBoxBigWrapper2>
      </>
  )
}
