import InfiniteScroll from 'react-infinite-scroll-component'

import {
  CommentBigWrapper,
  CommentWrapper,
  CommentBox,
  CommentImage,
  CommentText,
  RatingBigWrapper,
  RatingMiddleWrapper,
  RatingSmallWrapper,
  WriterBox,
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
  CommentLeftLeftWrapper,
  CommentLeftImageBox,
  CommentLeftRightWrapper,
  CommentLeftRightFirstSmallWrapper,
  CommentLeftRightNameBox,
  CommentLeftRightRatingBox,
  CommentRatingStar1,
  CommentRatingStar2,
  CommentRatingStar3,
  CommentRatingStar4,
  CommentRatingStar5,
  CommentLeftRightSecondTextBox,
  CommentLeftRightThirdDateBox,
  CommentRightBigWrapper,
  CommentPencilImageBox,
  CommentCancelImageBox
} from './Comment.styles'

interface Iprops {
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
  fetchMore: any
  onLoadMore: any
  hasMore: any
}

export default function CommentBoard(props: Iprops) {
  return (
    <>
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
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <InfiniteScroll
          dataLength={props.commentData?.fetchBoardComments.length || 0}
          next={props.onLoadMore}
          style={{ display: 'flex', flexDirection: 'column' }}
          inverse={false} //
          hasMore={true}
          loader={!props.commentData && <h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
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
                          src={
                            data.rating === 5 ? '/YellowStar.png' : '/Star.png'
                          }
                        ></CommentRatingStar5>
                      </CommentLeftRightRatingBox>
                    </CommentLeftRightFirstSmallWrapper>
                    <CommentLeftRightSecondTextBox>
                      {data.contents}
                    </CommentLeftRightSecondTextBox>
                    <CommentLeftRightThirdDateBox>
                      {`${String(
                        new Date(data.createdAt).getFullYear()
                      )}.${String(
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
        </InfiniteScroll>
      </div>
    </>
  )
}
