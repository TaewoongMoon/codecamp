import Head from 'next/head'
import { useEffect } from 'react'
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
  DoubleReplyTextTwo,
  ReplyInputBox,
  ReplyWrapper,
  ReplyCountBox,
  ReplyButton,
  ReplyButtonTwo,
  ReplyBoxLine,
  DoubleCommentReplyWrapper,
  DoubleReplyInputBox,
  DoubleReplyCountBox,
  DoubleReplyButton,
  DoubleReplyBoxLine,
  DoubleReplyEmojiWrapper,
  DoubleReplyPencilImage,
  DoubleReplyCancelImage,
  DoubleReplyFixWrapper,
  DoubleReplyFixInputBox,
  DoubleReplyFixCountBox,
  DoubleReplyFixBoxLine,
  ListPageRedirectionButton,
  PurchaseButton,
  ButtonWrapper
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
  resultOne: any
  onChangeTextCount: any
  countNumber: any
  onClickReplySubmit: any
  onChangeReplyFix: any
  onClickReplyFixBoxShow: any
  replyShow: any
  inputDefaultValue: any
  fixCountNumber: any
  onClickReplyChangeSubmit: any
  onClickReplyCancel: any
  onClickDoubleReply: any
  doubleReply: any
  onChangeDoubleReply: any
  doubleReplyCountNumber: any
  onClickDoubleReplySubmit: any
  onClickDoubleReplyDelete: any
  onClickDoubleReplyFixBoxShow: any
  doubleReplyShow: any
  onChangeDoubleReplyFix: any
  doubleReplyFixCountNumber: any
  onClickDoubleReplyFixSubmit: any
  onClickMainPage: any
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    kakao: any
  }
}

const ListDetailUI = (props: Iprops) => {
  const SlickDotNumber = ['one', 'two', 'three']

  useEffect(() => {
    if (!window.kakao) return
    window.kakao.maps.load(function () {
      const container = document.getElementById('map')
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }

      const map = new window.kakao.maps.Map(container, options)

      const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667)

      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      })
      marker.setMap(map)
      window.kakao.maps.event.addListener(
        map,
        'click',
        function (mouseEvent: any) {
          const latlng = mouseEvent.latLng

          marker.setPosition(latlng)
        }
      )
    })
  }, [window.kakao])

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=553eb7ecc2f9915f03890ff6539b13ae&autoload=false&libraries=LIBRARY&libraries=services"
        ></script>
      </Head>
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
            채팅 {props.fetchUsedItemReplyData?.fetchUseditemQuestions.length} ∙
            관심 5 ∙ 조회 141
          </ContentCounts>
          <div
            id="map"
            style={{
              width: '500px',
              height: '400px',
              display: 'flex',
              margin: '20px auto'
            }}
          ></div>
        </ContentWrapper>
        <ButtonWrapper>
          <ListPageRedirectionButton onClick={props.onClickMainPage}>
            목록으로
          </ListPageRedirectionButton>
          <PurchaseButton>구매하기</PurchaseButton>
        </ButtonWrapper>
        <ReplyWrapper>
          <ReplyInputBox
            onChange={props.onChangeTextCount}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
          ></ReplyInputBox>
        </ReplyWrapper>
        <ReplyCountBox>
          {props.countNumber}/100
          <ReplyButton onClick={props.onClickReplySubmit}>문의하기</ReplyButton>
        </ReplyCountBox>
        <ReplyBoxLine />
        {props.replyShow && (
          <>
            <ReplyWrapper key="">
              <ReplyInputBox
                onChange={props.onChangeReplyFix}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                maxLength={100}
                defaultValue={props.inputDefaultValue[0]?.contents}
              ></ReplyInputBox>
            </ReplyWrapper>
            <ReplyCountBox>
              {props.fixCountNumber ? props.fixCountNumber : '0'}/100
              <ReplyButtonTwo onClick={props.onClickReplyChangeSubmit}>
                수정하기
              </ReplyButtonTwo>
            </ReplyCountBox>
            <ReplyBoxLine />
          </>
        )}
        {props.replyButton &&
          (props.resultOne.length > 0 ? (
            props.resultOne.map((data: any) => (
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
                  {data.cocoments.length > 0 &&
                    data.cocoments.map((data: any) => (
                      <>
                        <DoubleReplyWrapper key="">
                          <DoubleReplyArrowWrapper>
                            <DoubleReplyArrowImage src="/ArrowImage.svg" />
                          </DoubleReplyArrowWrapper>
                          <DoubleReplyImageWrapper>
                            <DoubleReplyImage src="https://dnvefa72aowie.cloudfront.net/origin/profile/202010/A100F45448BF4ACD444D166B81D33CE7CC1CF5D785327C719A9028F9A2097242.jpg?q=82&s=80x80&t=crop" />
                          </DoubleReplyImageWrapper>
                          <DoubleReplyTextWrapper>
                            <DoubleReplyTextOne>
                              {data.user.name}
                            </DoubleReplyTextOne>
                            <DoubleReplyTextTwo>
                              {data.contents}
                            </DoubleReplyTextTwo>
                          </DoubleReplyTextWrapper>
                          {data.user._id ===
                            props.fetchUserLoggedIn?.fetchUserLoggedIn._id && (
                            <DoubleReplyEmojiWrapper>
                              <DoubleReplyPencilImage
                                id={data._id}
                                src="/Pencilimage.png"
                                onClick={props.onClickDoubleReplyFixBoxShow}
                              ></DoubleReplyPencilImage>
                              <DoubleReplyCancelImage
                                src="/Cancelimage.png"
                                id={data._id}
                                onClick={props.onClickDoubleReplyDelete}
                              ></DoubleReplyCancelImage>
                            </DoubleReplyEmojiWrapper>
                          )}
                        </DoubleReplyWrapper>
                        {props.doubleReplyShow[data._id] && (
                          <>
                            <DoubleReplyFixWrapper>
                              <DoubleReplyFixInputBox
                                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                                maxLength={100}
                                defaultValue={data.contents}
                                id={data._id}
                                onChange={props.onChangeDoubleReplyFix}
                              ></DoubleReplyFixInputBox>
                            </DoubleReplyFixWrapper>
                            <DoubleReplyFixCountBox>
                              {props.doubleReplyFixCountNumber[data._id]
                                ? props.doubleReplyFixCountNumber[data._id]
                                : data.contents.length}
                              /100
                              <ReplyButtonTwo
                                onClick={props.onClickDoubleReplyFixSubmit}
                                id={data._id}
                              >
                                수정하기
                              </ReplyButtonTwo>
                            </DoubleReplyFixCountBox>
                            <DoubleReplyFixBoxLine />
                          </>
                        )}
                      </>
                    ))}
                  {props.doubleReply[data._id] && (
                    <>
                      <DoubleCommentReplyWrapper>
                        <DoubleReplyInputBox
                          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                          maxLength={100}
                          onChange={props.onChangeDoubleReply}
                          id={data._id}
                        ></DoubleReplyInputBox>
                      </DoubleCommentReplyWrapper>
                      <DoubleReplyCountBox>
                        {props.doubleReplyCountNumber[data._id]
                          ? props.doubleReplyCountNumber[data._id]
                          : '0'}
                        /100
                        <DoubleReplyButton
                          id={data._id}
                          onClick={props.onClickDoubleReplySubmit}
                        >
                          댓글달기
                        </DoubleReplyButton>
                      </DoubleReplyCountBox>
                      <DoubleReplyBoxLine />
                    </>
                  )}
                </ReplyInfoWrapper>
                <ReplyEmojiWrapper>
                  {props.fetchUserLoggedIn?.fetchUserLoggedIn._id ===
                    data.user._id && (
                    <>
                      <ReplyPencilImage
                        id={data._id}
                        onClick={props.onClickReplyFixBoxShow}
                        src="/Pencilimage.png"
                      />
                      <ReplyCancelImage
                        id={data._id}
                        onClick={props.onClickReplyCancel}
                        src="/Cancelimage.png"
                      />
                    </>
                  )}
                  <ReplyMessageImage
                    id={data._id}
                    onClick={props.onClickDoubleReply}
                    src="/Reply.svg"
                  />
                </ReplyEmojiWrapper>
              </ReplySection>
            ))
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
