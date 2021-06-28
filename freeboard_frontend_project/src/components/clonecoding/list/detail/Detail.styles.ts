import styled from '@emotion/styled'

interface Iprops {
  translateChange?: any
  slickDot?: any
  id?: any
}

export const ContentArticle = styled.article`
  margin-top: 110px;
  padding-bottom: 0;
  display: block;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
  -webkit-font-smoothing: antialiased;
`

export const ContentSection = styled.section`
  position: relative;
  width: 729px;
  margin: 0 auto;
  display: block;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
  -webkit-font-smoothing: antialiased;
`

export const ImageSliderWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
  -webkit-font-smoothing: antialiased;
`
export const ImageSliderMidWrap = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
  -webkit-font-smoothing: antialiased;
`

export const SliderSlickInitialized = styled.div`
  border: none;
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
  -webkit-font-smoothing: antialiased;
`
export const SliderSlickPrevButton = styled.button`
  display: block;
  position: absolute;
  top: 240px;
  left: 0;
  border: none;
  z-index: 99;
  background: url('https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-4c0e713bfa2cd12bd959e6dd9ef456cd6fc094953c41e605f6b9a59bc1680686.svg')
    no-repeat;
  outline: none;
  width: 11px;
  height: 21px;
  text-indent: -9999px;
  cursor: pointer;
`
export const SlickDraggableWrapper = styled.div`
  /* transform: translate3d(0, 0, 0); */
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`

export const SlickTrackWrapper = styled.div`
  opacity: 1;
  width: 2187px;
  ${(props: Iprops) => `transform: translateX(${props.translateChange}px);`}
  height: 500px;
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: none;
  margin-right: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform 500ms ease 0s;
`

export const SlickTrackWrapperOne = styled.div`
  width: 729px;
  display: block;
  float: left;
  height: 100%;
  min-height: 1px;
`

export const SlickTrackSmallWrapperOne = styled.div`
  position: relative;
  width: 677px;
  margin: 0 auto;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`

export const SlickTrackWrapperOneImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  position: relative;
  min-width: 100%;
  /* left: 50%;
  top: 50%; */
  transform: (-50%, -50%);
  color: transparent;
`

export const SlickTrackWrapperTwo = styled.div`
  width: 729px;
  display: block;
  float: left;
  height: 100%;
  min-height: 1px;
`
export const SlickTrackSmallWrapperTwo = styled.div`
  position: relative;
  width: 677px;
  margin: 0 auto;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`

export const SlickTrackWrapperTwoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  position: relative;
  min-width: 100%;
  /* left: 50%;
  top: 50%; */
  transform: (-50%, -50%);
  color: transparent;
`

export const SlickTrackWrapperThree = styled.div`
  width: 729px;
  display: block;
  float: left;
  height: 100%;
  min-height: 1px;
`
export const SlickTrackSmallWrapperThree = styled.div`
  position: relative;
  width: 677px;
  margin: 0 auto;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`

export const SlickTrackWrapperThreeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  position: relative;
  min-width: 100%;
  /* left: 50%;
  top: 50%; */
  transform: (-50%, -50%);
  color: transparent;
`

export const SliderSlickNextButton = styled.button`
  display: block;
  position: absolute;
  right: 0;
  top: 240px;
  -webkit-appearance: none;
  border: none;
  background: url('https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-134c53f44716c3bef227ec30da385b4b09c9c068d339a617a23093718f379d02.svg')
    no-repeat;
  outline: none;
  width: 11px;
  height: 21px;
  text-indent: -9999px;
  cursor: pointer;
`

export const SlickDotsWrapper = styled.ul`
  display: block;
  position: absolute;
  bottom: 3px;
  left: 26px;
  right: 26px;
  width: 677px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  list-style: none;
  text-align: center;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-blend-mode: multiply;
`
export const SlickDot = styled.li`
  position: relative;
  bottom: 0;
  display: inline-block;
  cursor: pointer;
  text-align: -webkit-match-parent;
  list-style: none;
  width: 16px;
  height: 12px;
`
export const SlickDotButton = styled.button`
  display: block;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background-color: #fff;
  opacity: ${(props: Iprops) => (props.id === props.slickDot ? 0.8 : 0.3)};
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  appearance: auto;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  text-align: center;
  align-items: flex-start;
`
export const ProfileSection = styled.section`
  width: 677px;
  height: 68px;
  margin: 0 auto;
  display: block;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
  -webkit-font-smoothing: antialiased;
`

export const ProfilePageDirection = styled.a`
  text-decoration: none;
  display: block;
  position: relative;
  border-bottom: 1px solid #e9ecef;
  color: -webkit-link;
  cursor: pointer;
`
export const SpaceBetweenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 677px;
  height: 68px;
  margin-top: 25px;
  margin-bottom: 23px;
`

export const ProfileLeftWrapper = styled.div``

export const ProfileLeftImageWrapper = styled.div`
  display: inline-block;
`
export const ProfileLeftImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  -webkit-border-radius: 50%;
`

export const ProfileRightWrapper = styled.div`
  display: inline-block;
  margin-left: 8px;
`
export const ProfileRightFirstText = styled.div`
  font-size: 15px;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #212529;
`

export const ProfileRightSecondText = styled.div`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #212529;
`

export const TemperatureWrapper = styled.div`
  position: absolute;
  right: 0;
  padding-right: 36px;
`

export const TemperatureMiddleWrapper = styled.dl`
  display: block;
  width: 100px;
`

export const TemperatureText = styled.dt`
  position: absolute;
  top: 36px;
  right: 0px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.6px;
  color: #868e96;
`

export const Temperature = styled.dd`
  color: #1561a9;
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -0.5px;
  margin-top: 1px;
  width: 100px;
  text-align: right;
`

export const TemperatureDegree = styled.span`
  color: #1561a9;
`

export const MetersWrapper = styled.div`
  clear: both;
  display: block;
  width: 100px;
  background-color: #e9ecef;
  height: 4px;
  -webkit-border-radius: 100px;
  position: relative;
  margin-top: 24px;
`

export const MetersPercentageBar = styled.div`
  width: 37%;
  background-color: #1561a9;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 4px;
  -webkit-border-radius: 100px;
`
export const SmileImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  display: inline-block;
  overflow: hidden;
  text-indent: -9999px;
  text-align: left;
  background: url('https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set-0cffc52be32961b0bb4a308c272d8f526ddcdeda66dbde6eb32618eeb22b74e6.png')
    no-repeat;
  background-position-x: 0px;
  background-position-y: -75px;
  background-size: 29px 147px;
`

export const ContentWrapper = styled.section`
  padding: 32px 0;
  width: 677px;
  margin: 0 auto;
  border-radius: 1px solid #e9ecef;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-bottom: 1px solid #e9ecef;
`

export const ContentTitle = styled.h1`
  margin-top: 0px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
`

export const ContentCategory = styled.p`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
  padding: 0;
`

export const ContentTime = styled.span`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`

export const ContentPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
  line-height: 1.76;
  letter-spacing: -0.6px;
`
export const ContentDetailWrapper = styled.div`
  margin-bottom: 16px;
  margin-top: 8px;
`

export const ContentDetailText = styled.p`
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: -0.6px;
  margin: 16px 0;
  word-break: break-all;
`
export const ContentCounts = styled.p`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
  cursor: pointer;
`

export const ReplyWrapper = styled.div`
  margin: 0px auto;
  width: 677px;
  margin-top: 10px;
`

export const ReplyInputBox = styled.input`
  width: 677px;
  height: 70px;
  font-size: 14px;
  text-align: left;
  color: #000000;
  border: 1px solid #bdbdbd;
  outline: none;
  ::placeholder {
    color: #bdbdbd;
    font-size: 11px;
  }
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const ReplyCountBox = styled.div`
  width: 677px;
  height: 30px;
  font-size: 14px;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  border-top: none;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`
export const ReplyBoxLine = styled.div`
  width: 677px;
  height: 1px;
  background-color: #e9e9e9;
  margin: 10px auto;
`

export const ReplyButton = styled.button`
  width: 91px;
  height: 30px;
  font-size: 14px;
  color: #ffffff;
  background-color: #000000;
  position: absolute;
  left: calc(100% - 91px);
  outline: none;
`
export const ReplyButtonTwo = styled.button`
  width: 91px;
  height: 30px;
  font-size: 14px;
  color: #000000;
  background-color: yellow;
  position: absolute;
  left: calc(100% - 91px);
  outline: none;
  border: none;
  border-bottom: 1px solid #bdbdbd;
`

export const ReplySection = styled.section`
  width: 677px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
  -webkit-font-smoothing: antialiased;
  border-bottom: 1px solid #e9ecef;
  position: relative;
`
export const ReplyImageWrapper = styled.div`
  display: inline-block;
`
export const ReplyInfoWrapper = styled.div`
  display: inline-block;
  margin-left: 8px;
`
export const ReplyImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export const ReplyInfoTextOne = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.46;
  letter-spacing: -0.6px;
`

export const ReplyInfoTextTwo = styled.div`
  font-size: 16px;
  line-height: 1.46;
  letter-spacing: -0.6px;
`

export const ReplyInfoDate = styled.div`
  font-size: 12px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  margin-top: 10px;
  color: #bdbdbd;
`
export const DoubleReplyWrapper = styled.div`
  width: 600px;
  margin-bottom: 10px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-bottom: 1px solid #e9ecef;
`
export const DoubleReplyArrowWrapper = styled.div`
  margin-top: 10px;
  display: inline-block;
`
export const DoubleReplyArrowImage = styled.img`
  width: 15px;
  height: 15px;
`
export const DoubleReplyImageWrapper = styled.div`
  margin-left: 8px;
`
export const DoubleReplyImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export const DoubleReplyTextWrapper = styled.div`
  margin-left: 8px;
  margin-bottom: 10px;
`

export const DoubleReplyTextOne = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.46;
  letter-spacing: -0.6px;
`

export const DoubleReplyTextTwo = styled.div`
  font-size: 16px;
  line-height: 1.46;
  letter-spacing: -0.6px;
`
export const ReplyEmojiWrapper = styled.div`
  position: absolute;
  left: 590px;
  display: flex;
  flex-direction: row;
`
export const ReplyPencilImage = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`
export const ReplyCancelImage = styled.img`
  margin-left: 18px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`

export const ReplyMessageImage = styled.img`
  margin-left: 18px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`
