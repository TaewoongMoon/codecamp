import styled from '@emotion/styled'

export const ContentArticle = styled.article`
  margin-top: 100px;
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
  transform: translate3d(0, 0, 0);
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
  width: 5103px;
  transform: translate3d(-729px, 0px 0px);
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: none;
  margin-right: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
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
  left: 50%;
  top: 50%;
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
  left: 50%;
  top: 50%;
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
  left: 50%;
  top: 50%;
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

export const SlickDotsWrapper = styled.div`
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
`
export const SlickDotButton = styled.button`
  display: block;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
  margin: 0 4px;
  width: 8px;
  appearance: auto;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  text-align: center;
  align-items: flex-start;
`
