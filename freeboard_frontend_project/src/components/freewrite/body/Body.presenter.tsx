import YoutubePage from './Youtube.container'

import {
  MainBoxWrapper,
  MainBodyBox,
  ProfileHeaderWrapper,
  ProfileHeaderBox,
  ProfileImageBox,
  ProfileLefterWrapper,
  NameDateWrapper,
  NameText,
  DateText,
  AddressEmoticonWrapper,
  AddressImageBox,
  AddressImage,
  AddressTextBox,
  AddressText1Box,
  AddressText1,
  AddressText2Box,
  AddressText2,
  EmoticonBox,
  EmoticonBox2,
  ClipEmoticon,
  AddressEmoticon,
  HrLine,
  TitleTotalWrapper,
  TitleTextWrapper,
  TitleText,
  ImageTotalWrapper,
  ImageWrapper,
  Image1,
  MainTextTotalWrapper,
  MainTextWrapper,
  MainText,
  VideoTotalWrapper,
  VideoWrapper,
  LikeDislikeTotalWrapper,
  LikeDislikeWrapper,
  LikeWrapper,
  LikeEmoticon,
  LikeNumber,
  DislikeWrapper,
  DislikeEmoticon,
  DislikeNumber,
  RouterButtonBigWrapper,
  RouterButtonSmallWrapper,
  RouterListButton,
  RouterFixButton,
  Hr2LineWrapper,
  Hr2Line,
  HRWrapper
} from './Body.styles'

interface Iprops {
  data: any
  Year: any
  Month: any
  Day: any
  likeDislikeNumber: any
  onClickDislike: any
  onClickLike: any
  onClickFixPage: any
  onClickListPage: any
}

export default function MainBoardPage(props: Iprops) {
  return (
    <>
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
          <HRWrapper>
            <HrLine></HrLine>
          </HRWrapper>
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
            <VideoWrapper>
              <YoutubePage data={props?.data} />
            </VideoWrapper>
          </VideoTotalWrapper>
          <LikeDislikeTotalWrapper>
            <LikeDislikeWrapper>
              <LikeWrapper>
                <LikeEmoticon
                  src="/Vector (4).png"
                  onClick={props.onClickLike}
                ></LikeEmoticon>
                <LikeNumber>
                  {props.likeDislikeNumber.likeNumber ||
                    props.data?.fetchBoard.likeCount}
                </LikeNumber>
              </LikeWrapper>
              <DislikeWrapper>
                <DislikeEmoticon
                  src="/Vector (5).png"
                  onClick={props.onClickDislike}
                ></DislikeEmoticon>
                <DislikeNumber>
                  {props.likeDislikeNumber.dislikeNumber ||
                    props.data?.fetchBoard.dislikeCount}
                </DislikeNumber>
              </DislikeWrapper>
            </LikeDislikeWrapper>
          </LikeDislikeTotalWrapper>
        </MainBodyBox>
      </MainBoxWrapper>
      <RouterButtonBigWrapper>
        <RouterButtonSmallWrapper>
          <RouterListButton onClick={props.onClickListPage}>
            목록으로
          </RouterListButton>
          <RouterFixButton onClick={props.onClickFixPage}>
            수정하기
          </RouterFixButton>
        </RouterButtonSmallWrapper>
      </RouterButtonBigWrapper>
      <Hr2LineWrapper>
        <Hr2Line></Hr2Line>
      </Hr2LineWrapper>
    </>
  )
}
