import styled from '@emotion/styled'

interface Iprops {
  isActive: any
  delay: any
}

interface IpropsSakura {
  data: any
}

interface IpropsFirstBody {
  isActive: any
  data?: any
}

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
  cursor: pointer;
  animation: animation-plwpox 0.75s 0.25s ease both;
  @keyframes animation-plwpox {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
  animation: animation-plwpox 0.75s 0.25s ease both;
  @keyframes animation-plwpox {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const HeaderTextWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 470px;
  display: block;
  color: white;
`
export const HeaderTextTop = styled.h2`
  position: relative;
  box-sizing: border-box;
  margin: 143px 0 0;
  font-size: 66px;
  line-height: 78px;
  letter-spacing: -1.72px;
  color: #ffffff;
  display: block;
  font-family: 'GothicA1';
  animation: animation-10ng5g2 0.75s 0.5s ease-out both;
  @keyframes animation-10no5g2 {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const HeaderTextTopPink = styled.span`
  color: #ff31a2;
  letter-spacing: -1.72px;
`
export const HeaderTextMiddle = styled.h3`
  visibility: visible;
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
  font-family: 'GothicA1';
  letter-spacing: -0.56px;
  opacity: 0.4;
  animation: animation-11hq6ew 0.75s 0.75s ease-out both;
  @keyframes animation-11hq6ew {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 0.4;
      transform: translateY(0px);
    }
  }
`

export const HeaderTextBottomWrapper = styled.div`
  position: relative;
  display: flex;
  height: 150px;
  margin-top: 33px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  animation: animation-plwpox 1s 1s ease both;
  @keyframes animation-plwpox {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const HeaderTextQrCodeWrapper = styled.div`
  display: inline-block;
  width: 112px;
  background-color: transparent;
`
export const HeaderTextQrCodeText = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  font-family: 'GothicA1';
  font-size: 13px;
  line-height: 2.15;
  letter-spacing: -0.36px;
  color: #ffffff;
`
export const HeaderTextQrCodeImage = styled.div`
  width: 112px;
  height: 112px;
  background-size: 112px;
  background-image: url('https://zigzag.kr/_next/static/images/qrcode@3x-20d2cdc56d81b9315f8579e164a14f3b.png');
`
export const HeaderTextLineDivider = styled.div`
  display: inline-block;
  width: 1px;
  margin: 0 29px;
  background-color: #372d2c;
`
export const HeaderAppStoreWrapper = styled.div`
  width: 154px;
  display: block;
`
export const HeaderAppStoreText = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  font-family: 'GothicA1';
  font-size: 13px;
  line-height: 2.15;
  letter-spacing: -0.36px;
  color: #ffffff;
`

export const HeaderAppStoreImageWrapper = styled.a`
  display: inline-block table-cell;
  text-decoration: none;
`
export const HeaderAppStoreImage = styled.figure`
  width: 154px;
  height: 47px;
  background-size: 154px 47px;
  background-image: url('https://zigzag.kr/_next/static/images/app-store-black-9f6a5a2ae6b300eb11ed3eedf61a575c.svg');
  cursor: pointer;
  margin-bottom: 18px;
`
export const HeaderGooglePlayImageWrapper = styled.a`
  display: inline-block table-cell;
  text-decoration: none;
`
export const HeaderGooglePlayImage = styled.figure`
  width: 154px;
  height: 47px;
  background-size: 154px 47px;
  background-image: url('https://zigzag.kr/_next/static/images/google-play-black-faf820f03920a111eb12868018348da0.svg');
  cursor: pointer;
  margin-bottom: 18px;
`

export const FirstBodyWrapper = styled.div`
  height: 696px;
  min-width: 750px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-color: #f9f6f7;
`
export const FirstBodySakuraWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  display: block;
`
export const FirstBodyFirstSakura = styled.div`
  position: absolute;
  left: 0;
  width: 10px;
  height: 10px;
  content: '';
  background-color: #fe85c0;
  animation-name: animation-15244lf;
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${(props: IpropsSakura) => props.data.delay};
  top: ${(props: IpropsSakura) => props.data.top};
  z-index: 1;
  @keyframes animation-15244lf {
    100% {
      transform: translateY(${(props: IpropsSakura) => props.data.translateY})
        translateX(${(props: IpropsSakura) => props.data.translateX})
        translateZ(${(props: IpropsSakura) => props.data.translateZ})
        rotate3d(${(props: IpropsSakura) => props.data.rotate3d});
    }
  }
`

export const FirstBodyMiddleWrapper = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
  display: block;
  text-align: left;
`
export const FirstBodyMenuWrapper = styled.ul`
  font-size: 18px;
  line-height: 1.15;
  list-style: none;
  text-align: center;
  font-family: 'GothicA1';
  position: relative;
  z-index: 2;
`

export const FirstBodyMenuList = styled.li`
  margin-right: 37px;
  cursor: pointer;
  display: inline-block;
  color: ${(props: Iprops) => (props.isActive ? '#ff349c' : '#a5a5a5')};
  position: relative;
  animation: animation-16qvz7w 0.75s ${(props: Iprops) => props.delay} ease both;
  @keyframes animation-16qvz7w {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`
export const MenuLineDivider = styled.li`
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  left: 0;
  bottom: -4px;
  background-color: #ff349c;
`
export const FirstBodyContentWrapper = styled.div`
  position: relative;
  margin-top: 176px;
  margin-left: 500px;
  color: #212529;
  z-index: 2;
  display: block;
`
export const FirstBodyContentTextWrapper = styled.div`
  position: relative;
  margin-top: 94px;
  height: 300px;
  display: block;
`
export const FirstBodyContentTextTypeOneWrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  transition: ${(props: IpropsFirstBody) =>
    props.isActive ? 'all 750ms ease' : 'all 750ms ease 0s'};
  transition-delay: ${(props: IpropsFirstBody) =>
    props.isActive ? '200ms' : '0ms'};
  width: 100%;
  transform: ${(props: IpropsFirstBody) =>
    props.isActive ? null : 'translateX(-75px)'};
  opacity: ${(props: IpropsFirstBody) => (props.isActive ? 1 : 0)};
`

export const FirstBodyContentTextTypeOneHead = styled.h2`
  font-size: 46px;
  line-height: 1.2;
  letter-spacing: -2px;
  font-family: 'GothicA1';
  animation: animation-10no5g2 0.75s 0.5s ease-out both;
  @keyframes animation-10no5g2 {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`

export const FirstBodyContentTextTypeOneBody = styled.p`
  margin-top: 17px;
  font-size: 18px;
  line-height: 1.56;
  font-family: 'GothicA1';
  color: #aaa;
`
export const FirstBodyImageWrapper = styled.div`
  position: absolute;
  top: -155px;
  left: -400px;
  width: 320px;
  height: 529px;
  margin-top: 76px;
  overflow: hidden;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  display: block;
`

export const FirstBodyImage = styled.div`
  width: 320px;
  height: 529px;
  background-size: 320px 529px;
  position: absolute;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  ${(props: IpropsFirstBody) =>
    `background-image: url(${props.data.backgroundImage});`}
  opacity: ${(props: IpropsFirstBody) => (props.isActive ? 1 : 0)};
  transition: opacity 1s;
  margin: 0;
  padding: 0;
`
