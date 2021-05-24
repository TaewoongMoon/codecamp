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
  RegisterBox2,
  CommentResultBigWrapper,
  CommentResultMiddleWrapper,
  CommentLeftBigWrapper,
  CommentRightBigWrapper,
  CommentLeftLeftWrapper,
  CommentLeftRightWrapper,
  CommentLeftRightFirstSmallWrapper,
  CommentLeftRightRatingBox,
  CommentLeftRightNameBox,
  CommentRatingStar1,
  CommentRatingStar2,
  CommentRatingStar3,
  CommentRatingStar4,
  CommentRatingStar5,
  CommentLeftRightSecondTextBox,
  CommentLeftRightThirdDateBox,
  CommentLeftImageBox,
  CommentPencilImageBox,
  CommentCancelImageBox
} from './Detail.styles'

interface Iprops {
  data: any
  Year: any
  Month: any
  Day: any
  onClickStarRating: any
  numberofStars: any
  onChangeCommentBox: any
  textNumber: any
  CommentRegisterButton: any
  onChangeNamePassword: any
  commentData: any
  commentFix: any
  onClickCommentFix: any
  onClickCommentStarRating: any
  onChangeCommentFixBox: any
  onChangeFixNamePassword: any
  commentTextNumber: any
  commentFixNumberofStars: any
  CommentFixRegisterButton: any
}

export default function DetailBoardUI(props: Iprops) {
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
            <WriterBox
              type="text"
              placeholder="작성자"
              name="writer"
              onChange={props.onChangeNamePassword}
            ></WriterBox>
            <PasswordBox
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={props.onChangeNamePassword}
            ></PasswordBox>
            <StarBox>
              {/* {['1', '2', '3', '4', '5'].map((data) => (
                <StarImage1
                  src={
                    Number(props.rating) >= data
                      ? '/YellowStar.png'
                      : '/Star.png'
                  }
                  id={data}
                  key={data}
                  onClick={props.handleRating}
                ></StarImage1>
              ))} */}
              <StarImage1
                src={
                  props.numberofStars[0] === true
                    ? '/YellowStar.png'
                    : '/Star.png'
                }
                id="1"
                onClick={props.onClickStarRating}
              ></StarImage1>
              <StarImage2
                src={
                  props.numberofStars[1] === true
                    ? '/YellowStar.png'
                    : '/Star.png'
                }
                id="2"
                onClick={props.onClickStarRating}
              ></StarImage2>
              <StarImage3
                src={
                  props.numberofStars[2] === true
                    ? '/YellowStar.png'
                    : '/Star.png'
                }
                id="3"
                onClick={props.onClickStarRating}
              ></StarImage3>
              <StarImage4
                src={
                  props.numberofStars[3] === true
                    ? '/YellowStar.png'
                    : '/Star.png'
                }
                id="4"
                onClick={props.onClickStarRating}
              ></StarImage4>
              <StarImage5
                src={
                  props.numberofStars[4] === true
                    ? '/YellowStar.png'
                    : '/Star.png'
                }
                id="5"
                onClick={props.onClickStarRating}
              ></StarImage5>
            </StarBox>
          </RatingSmallWrapper>
        </RatingMiddleWrapper>
      </RatingBigWrapper>
      <CommentBoxBigWrapper>
        <CommentBoxSmallWrapper>
          <CommentBoxBigInput
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
            onChange={props.onChangeCommentBox}
            name="contents"
          ></CommentBoxBigInput>
          <CommentBoxSmallInputWrapper>
            <CommentBoxSmallLimitBox>
              <CommentLimitBox>{`${props.textNumber.contents}/100`}</CommentLimitBox>
            </CommentBoxSmallLimitBox>
            <RegisterBox onClick={props.CommentRegisterButton}>
              등록하기
            </RegisterBox>
          </CommentBoxSmallInputWrapper>
        </CommentBoxSmallWrapper>
      </CommentBoxBigWrapper>
      {props.commentFix === true && (
        <>
          <RatingBigWrapper2>
            <RatingMiddleWrapper2>
              <RatingSmallWrapper2>
                <WriterBox2
                  type="text"
                  placeholder="작성자"
                  name="commentFixWriter"
                  onChange={props.onChangeFixNamePassword}
                ></WriterBox2>
                <PasswordBox2
                  type="password"
                  placeholder="비밀번호"
                  name="commentFixPassword"
                  onChange={props.onChangeFixNamePassword}
                ></PasswordBox2>
                <StarBox2>
                  <StarImage6
                    src={
                      props?.commentFixNumberofStars[0] === true
                        ? '/YellowStar.png'
                        : '/Star.png'
                    }
                    id="6"
                    onClick={props.onClickCommentStarRating}
                  ></StarImage6>
                  <StarImage7
                    src={
                      props?.commentFixNumberofStars[1] === true
                        ? '/YellowStar.png'
                        : '/Star.png'
                    }
                    id="7"
                    onClick={props.onClickCommentStarRating}
                  ></StarImage7>
                  <StarImage8
                    src={
                      props?.commentFixNumberofStars[2] === true
                        ? '/YellowStar.png'
                        : '/Star.png'
                    }
                    id="8"
                    onClick={props.onClickCommentStarRating}
                  ></StarImage8>
                  <StarImage9
                    src={
                      props?.commentFixNumberofStars[3] === true
                        ? '/YellowStar.png'
                        : '/Star.png'
                    }
                    id="9"
                    onClick={props.onClickCommentStarRating}
                  ></StarImage9>
                  <StarImage10
                    src={
                      props?.commentFixNumberofStars[4] === true
                        ? '/YellowStar.png'
                        : '/Star.png'
                    }
                    id="10"
                    onClick={props.onClickCommentStarRating}
                  ></StarImage10>
                </StarBox2>
              </RatingSmallWrapper2>
            </RatingMiddleWrapper2>
          </RatingBigWrapper2>
          <CommentBoxBigWrapper2>
            <CommentBoxSmallWrapper2>
              <CommentBoxBigInput2
                name="commentFixContents"
                maxLength={100}
                onChange={props.onChangeCommentFixBox}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              ></CommentBoxBigInput2>
              <CommentBoxSmallInputWrapper2>
                <CommentBoxSmallLimitBox2>
                  <CommentLimitBox2>
                    {`${props.commentTextNumber.commentFixContents}/100`}
                  </CommentLimitBox2>
                </CommentBoxSmallLimitBox2>
                <RegisterBox2 onClick={props.CommentFixRegisterButton}>
                  수정하기
                </RegisterBox2>
              </CommentBoxSmallInputWrapper2>
            </CommentBoxSmallWrapper2>
          </CommentBoxBigWrapper2>
        </>
      )}
      {props?.commentData?.fetchBoardComments.map((data: any) => (
        <CommentResultBigWrapper key={data._id} id={data._id}>
          <CommentResultMiddleWrapper>
            <CommentLeftBigWrapper>
              <CommentLeftLeftWrapper>
                <CommentLeftImageBox src="/Vector (1).png"></CommentLeftImageBox>
              </CommentLeftLeftWrapper>
              <CommentLeftRightWrapper>
                <CommentLeftRightFirstSmallWrapper>
                  <CommentLeftRightNameBox>
                    {data.writer}
                  </CommentLeftRightNameBox>
                  <CommentLeftRightRatingBox>
                    <CommentRatingStar1
                      src={
                        data.rating === 1 ||
                        data.rating === 2 ||
                        data.rating === 3 ||
                        data.rating === 4 ||
                        data.rating === 5
                          ? '/YellowStar.png'
                          : '/Star.png'
                      }
                    ></CommentRatingStar1>
                    <CommentRatingStar2
                      src={
                        data.rating === 2 ||
                        data.rating === 3 ||
                        data.rating === 4 ||
                        data.rating === 5
                          ? '/YellowStar.png'
                          : '/Star.png'
                      }
                    ></CommentRatingStar2>
                    <CommentRatingStar3
                      src={
                        data.rating === 3 ||
                        data.rating === 4 ||
                        data.rating === 5
                          ? '/YellowStar.png'
                          : '/Star.png'
                      }
                    ></CommentRatingStar3>
                    <CommentRatingStar4
                      src={
                        data.rating === 4 || data.rating === 5
                          ? '/YellowStar.png'
                          : '/Star.png'
                      }
                    ></CommentRatingStar4>
                    <CommentRatingStar5
                      src={data.rating === 5 ? '/YellowStar.png' : '/Star.png'}
                    ></CommentRatingStar5>
                  </CommentLeftRightRatingBox>
                </CommentLeftRightFirstSmallWrapper>
                <CommentLeftRightSecondTextBox>
                  {data.contents}
                </CommentLeftRightSecondTextBox>
                <CommentLeftRightThirdDateBox>
                  {`${String(new Date(data.createdAt).getFullYear())}.${String(
                    new Date(data.createdAt).getMonth() + 1
                  ).padStart(2, '0')}.${String(
                    new Date(data.createdAt).getDate()
                  ).padStart(0, '2')}`}
                </CommentLeftRightThirdDateBox>
              </CommentLeftRightWrapper>
            </CommentLeftBigWrapper>
            <CommentRightBigWrapper>
              <CommentPencilImageBox
                id={data._id}
                src="/Pencilimage.png"
                onClick={props.onClickCommentFix}
              ></CommentPencilImageBox>
              <CommentCancelImageBox src="/Cancelimage.png"></CommentCancelImageBox>
            </CommentRightBigWrapper>
          </CommentResultMiddleWrapper>
        </CommentResultBigWrapper>
      ))}
    </>
  )
}
