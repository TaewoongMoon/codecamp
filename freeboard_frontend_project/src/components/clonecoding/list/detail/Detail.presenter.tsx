import { ProfileLefterWrapper } from '../../../freewrite/body/Body.styles'
import HeaderPart from '../header/Header.container'
import {
  ContentArticle,
  ContentSection,
  ImageSliderMidWrap,
  ImageSliderWrapper,
  ProfileLeftImageWrapper,
  ProfilePageDirection,
  ProfileSection,
  SlickDot,
  SlickDotButton,
  SlickDotsWrapper,
  SlickDraggableWrapper,
  SlickTrackSmallWrapperOne,
  SlickTrackSmallWrapperThree,
  SlickTrackSmallWrapperTwo,
  SlickTrackWrapper,
  SlickTrackWrapperOne,
  SlickTrackWrapperOneImage,
  SlickTrackWrapperThree,
  SlickTrackWrapperThreeImage,
  SlickTrackWrapperTwo,
  SlickTrackWrapperTwoImage,
  SliderSlickInitialized,
  SliderSlickNextButton,
  SliderSlickPrevButton,
  SpaceBetweenWrapper,
  ProfileLeftImage,
  ProfileRightWrapper,
  ProfileRightFirstText,
  ProfileRightSecondText,
  TemperatureWrapper,
  TemperatureMiddleWrapper,
  TemperatureText,
  Temperature,
  TemperatureDegree,
  MetersWrapper,
  MetersPercentageBar,
  SmileImage,
  ContentWrapper,
  ContentTitle,
  ContentCategory,
  ContentTime,
  ContentPrice,
  ContentDetailWrapper,
  ContentDetailText,
  ContentCounts,
  ReplySection,
  ReplyImageWrapper,
  ReplyInfoWrapper,
  ReplyImage,
  ReplyInfoTextOne,
  ReplyInfoTextTwo,
  ReplyInfoDate,
  ReplyEmojiWrapper,
  ReplyPencilImage,
  ReplyCancelImage,
  ReplyMessageImage,
  DoubleReplyWrapper,
  DoubleReplyArrowWrapper,
  DoubleReplyImageWrapper,
  DoubleReplyTextWrapper,
  DoubleReplyArrowImage,
  DoubleReplyImage,
  DoubleReplyTextOne,
  DoubleReplyTextTwo
} from './Detail.styles'

interface Iprops {
  translateChange: any
  onClickTranslateChangePlus: any
  onClickTranslateChangeMinus: any
  slickDot: any
  onClickSlickDot: any
  fetchData: any
  timeDifference: any
  fetchUsedItemReplyData: any
  onClickReplyButton: any
  replyButton: any
  fetchUserLoggedIn: any
}

const ListDetailUI = (props: Iprops) => {
  const SlickDotNumber = ['one', 'two', 'three']
  return (
    <>
      <HeaderPart></HeaderPart>
      <ContentArticle>
        <ContentSection>
          <ImageSliderWrapper>
            <ImageSliderMidWrap>
              <SliderSlickInitialized>
                <SliderSlickPrevButton
                  onClick={props.onClickTranslateChangePlus}
                >
                  Previous
                </SliderSlickPrevButton>
                <SlickDraggableWrapper>
                  <SlickTrackWrapper translateChange={props.translateChange}>
                    <SlickTrackWrapperOne>
                      <SlickTrackSmallWrapperOne>
                        <SlickTrackWrapperOneImage src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/39d17a39a32e5fbc02029764d72f8521eb70fbd6520e9f5e8222ca60b12d795a.webp?q=95&s=1440x1440&t=inside"></SlickTrackWrapperOneImage>
                      </SlickTrackSmallWrapperOne>
                    </SlickTrackWrapperOne>
                    <SlickTrackWrapperTwo>
                      <SlickTrackSmallWrapperTwo>
                        <SlickTrackWrapperTwoImage src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/011cdc00979818c09ca836eae754acff861183a345d793026442868a2590c599.webp?q=95&s=1440x1440&t=inside"></SlickTrackWrapperTwoImage>
                      </SlickTrackSmallWrapperTwo>
                    </SlickTrackWrapperTwo>
                    <SlickTrackWrapperThree>
                      <SlickTrackSmallWrapperThree>
                        <SlickTrackWrapperThreeImage src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/499a698853ee2b6fd07311c8f4339eb09d2396e19aaf1392397007f22c4ee957.webp?q=95&s=1440x1440&t=inside"></SlickTrackWrapperThreeImage>
                      </SlickTrackSmallWrapperThree>
                    </SlickTrackWrapperThree>
                  </SlickTrackWrapper>
                </SlickDraggableWrapper>
                <SliderSlickNextButton
                  onClick={props.onClickTranslateChangeMinus}
                ></SliderSlickNextButton>
                <SlickDotsWrapper>
                  {SlickDotNumber.map((data: any) => (
                    <SlickDot key="">
                      <SlickDotButton
                        id={data}
                        slickDot={props.slickDot}
                        onClick={props.onClickSlickDot}
                      ></SlickDotButton>
                    </SlickDot>
                  ))}
                </SlickDotsWrapper>
              </SliderSlickInitialized>
            </ImageSliderMidWrap>
          </ImageSliderWrapper>
        </ContentSection>
        <ProfileSection>
          <ProfilePageDirection>
            <SpaceBetweenWrapper>
              <ProfileLefterWrapper>
                <ProfileLeftImageWrapper>
                  <ProfileLeftImage src="https://dnvefa72aowie.cloudfront.net/origin/profile/202010/A100F45448BF4ACD444D166B81D33CE7CC1CF5D785327C719A9028F9A2097242.jpg?q=82&s=80x80&t=crop"></ProfileLeftImage>
                </ProfileLeftImageWrapper>
                <ProfileRightWrapper>
                  <ProfileRightFirstText>
                    {props.fetchData?.fetchUseditem.seller.name}
                  </ProfileRightFirstText>
                  <ProfileRightSecondText>순천시 서면</ProfileRightSecondText>
                </ProfileRightWrapper>
              </ProfileLefterWrapper>
              <TemperatureWrapper>
                <TemperatureMiddleWrapper>
                  <TemperatureText>매너온도</TemperatureText>
                  <Temperature>
                    36.7
                    <TemperatureDegree>&nbsp;°C</TemperatureDegree>
                  </Temperature>
                </TemperatureMiddleWrapper>
                <MetersWrapper>
                  <MetersPercentageBar></MetersPercentageBar>
                </MetersWrapper>
                <SmileImage></SmileImage>
              </TemperatureWrapper>
            </SpaceBetweenWrapper>
          </ProfilePageDirection>
        </ProfileSection>
        <ContentWrapper>
          <ContentTitle>{props.fetchData?.fetchUseditem.name}</ContentTitle>
          <ContentCategory>
            {props.fetchData?.fetchUseditem.remarks} ∙
            <ContentTime>
              {props.timeDifference > 24
                ? `${' '}${Math.floor(props.timeDifference / 24)}일 전`
                : `${props.timeDifference}시간 전`}
            </ContentTime>
          </ContentCategory>
          <ContentPrice>{props.fetchData?.fetchUseditem.price}원</ContentPrice>
          <ContentDetailWrapper>
            <ContentDetailText>
              {props.fetchData?.fetchUseditem.contents}
            </ContentDetailText>
          </ContentDetailWrapper>
          <ContentCounts onClick={props.onClickReplyButton}>
            {' '}
            채팅 20 ∙ 관심 5 ∙ 조회 141
          </ContentCounts>
        </ContentWrapper>
        {props.replyButton &&
          (props.fetchUsedItemReplyData?.fetchUseditemQuestions.length > 0 ? (
            props.fetchUsedItemReplyData?.fetchUseditemQuestions.map(
              (data: any) => (
                <ReplySection key="">
                  <ReplyImageWrapper>
                    <ReplyImage src="https://dnvefa72aowie.cloudfront.net/origin/profile/202010/A100F45448BF4ACD444D166B81D33CE7CC1CF5D785327C719A9028F9A2097242.jpg?q=82&s=80x80&t=crop" />
                  </ReplyImageWrapper>
                  <ReplyInfoWrapper>
                    <ReplyInfoTextOne>{data.user.name}</ReplyInfoTextOne>
                    <ReplyInfoTextTwo>{data.contents}</ReplyInfoTextTwo>
                    <ReplyInfoDate>
                      {`${String(
                        new Date(data.createdAt).getFullYear()
                      )}.${String(
                        new Date(data.createdAt).getMonth() + 1
                      ).padStart(2, '0')}.${String(
                        new Date(data.createdAt).getDate()
                      ).padStart(2, '0')}`}
                    </ReplyInfoDate>
                    <DoubleReplyWrapper>
                      <DoubleReplyArrowWrapper>
                        <DoubleReplyArrowImage src="/ArrowImage.svg" />
                      </DoubleReplyArrowWrapper>
                      <DoubleReplyImageWrapper>
                        <DoubleReplyImage src="https://dnvefa72aowie.cloudfront.net/origin/profile/202010/A100F45448BF4ACD444D166B81D33CE7CC1CF5D785327C719A9028F9A2097242.jpg?q=82&s=80x80&t=crop" />
                      </DoubleReplyImageWrapper>
                      <DoubleReplyTextWrapper>
                        <DoubleReplyTextOne>노원두</DoubleReplyTextOne>
                        <DoubleReplyTextTwo>가격이 조금...</DoubleReplyTextTwo>
                      </DoubleReplyTextWrapper>
                    </DoubleReplyWrapper>
                  </ReplyInfoWrapper>
                  <ReplyEmojiWrapper>
                    {props.fetchUserLoggedIn.fetchUserLoggedIn._id ===
                      data._id && (
                      <>
                        <ReplyPencilImage src="/Pencilimage.png" />
                        <ReplyCancelImage src="/Cancelimage.png" />
                      </>
                    )}
                    <ReplyMessageImage src="/Reply.svg" />
                  </ReplyEmojiWrapper>
                </ReplySection>
              )
            )
          ) : (
            <div style={{ margin: '10px auto' }}>
              <div style={{ textAlign: 'center' }}>
                등록된 게시물이 없습니다.
              </div>
            </div>
          ))}
      </ContentArticle>
    </>
  )
}

export default ListDetailUI
