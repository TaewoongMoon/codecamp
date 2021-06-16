import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  min-width: 750px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 40px;
  background-color: rgb(26, 19, 18);
  background-position-x: center;
  background-position-y: 158px;
  background-image: initial;
  background-repeat: no-repeat;
  background-origin: initial;
  background-clip: initial;
  height: 700px;
  color: white;
  text-align: left;
  display: block;
  overflow: hidden;
`

export const HeaderMiddleWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: block;
`
export const HeaderZigZagLogo = styled.div`
  margin: 0 0 0 58px;
  width: 102px;
  height: 36px;
  display: inline-block;
  background-size: 102px 36px;
  background-image: url('https://zigzag.kr/_next/static/images/logo-white-7684d3487ad6b73b5fcad07c0a48109e.svg');
`

export const HeaderButton = styled.div`
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-color: initial;
  cursor: pointer;
  appearance: none;
  outline-color: initial;
  outline-style: none;
  outline-width: initial;
  margin-top: 0;
  margin-right: 35px;
  width: 133px;
  height: 35px;
  line-height: 35px;
  float: right;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  @font-face {
    font-family: 'GothicA1';
    src: url('/fonts/GothicA1-ExtraBold.ttf') format('truetype');
  }
  font-family: 'GothicA1';
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.42px;
  text-align: center;
  color: #fff;
  display: inline-block;
`
export const HeaderImage = styled.div`
  position: absolute;
  width: 1030px;
  height: 638px;
  bottom: 0;
  right: 0;
  left: -410px;
  background-size: 1030px 638px;
  display: block;
  margin: 0 auto;
  background-image: url('https://zigzag.kr/_next/static/images/model@2x-a200f4689ff5037798a9e8b5a5f98b6a.png');
  /* margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px; */
`
