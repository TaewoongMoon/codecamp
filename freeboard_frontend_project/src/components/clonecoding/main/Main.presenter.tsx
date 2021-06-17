import {
  FirstBodyFirstSakura,
  FirstBodyMenuWrapper,
  FirstBodyMiddleWrapper,
  FirstBodySakuraWrapper,
  FirstBodyWrapper,
  HeaderAppStoreImage,
  HeaderAppStoreImageWrapper,
  HeaderAppStoreText,
  HeaderAppStoreWrapper,
  HeaderButton,
  HeaderGooglePlayImage,
  HeaderGooglePlayImageWrapper,
  HeaderImage,
  HeaderMiddleWrapper,
  HeaderTextBottomWrapper,
  HeaderTextLineDivider,
  HeaderTextMiddle,
  HeaderTextQrCodeImage,
  HeaderTextQrCodeText,
  HeaderTextQrCodeWrapper,
  HeaderTextTop,
  HeaderTextTopPink,
  HeaderTextWrapper,
  HeaderWrapper,
  HeaderZigZagLogo,
  MenuLineDivider,
  FirstBodyMenuList
} from './Main.styles'

interface Iprops {
  onClickMenuList: any
  selectedId: any
}

const ANIMATION = [
  {
    delay: '1.25s',
    top: '10%',
    rotate3d: '1, 0.25, 0.25, 220deg',
    translateY: '150px',
    translateX: '2560px',
    translateZ: '500px'
  },
  {
    delay: '4.65s',
    top: '25%',
    rotate3d: '0.25, 1, 1, 420deg',
    translateY: '150px',
    translateX: '2560px',
    translateZ: '300px'
  },
  {
    delay: '1.15',
    top: '30%',
    rotate3d: '1, 1, 0.25, 720deg',
    translateY: '160px',
    translateX: '2560px',
    translateZ: '-500px'
  },
  {
    delay: '1.35s',
    top: '50%',
    rotate3d: '0.25, 1, 0.25, 820deg',
    translateY: '200px',
    translateX: '2560px',
    translateZ: '400px'
  },
  {
    delay: '2.25s',
    top: '10%',
    rotate3d: '1, 1, 1, 720deg',
    translateY: '300px',
    translateX: '2560px',
    translateZ: '-100px'
  },
  {
    delay: '3.25s',
    top: '75%',
    rotate3d: '1, 0.25, 0.25, 220deg',
    translateY: '150px',
    translateX: '2560px',
    translateZ: '500px'
  },
  {
    delay: '3.65s',
    top: '25%',
    rotate3d: '0.25, 1, 1, 420deg',
    translateY: '150px',
    translateX: '2560px',
    translateZ: '300px'
  },
  {
    delay: '0.15s',
    top: '30%',
    rotate3d: '0.25, 1, 1, 720deg',
    translateY: '160px',
    translateX: '2560px',
    translateZ: '-500px'
  },
  {
    delay: '1.75s',
    top: '50%',
    rotate3d: '0.25, 1, 0.25, 820deg',
    translateY: '200px',
    translateX: '2560px',
    translateZ: '400px'
  },
  {
    delay: '0.25s',
    top: '75%',
    rotate3d: '1, 1, 1, 720deg',
    translateY: '300px',
    translateX: '2560px',
    translateZ: '-100px'
  },
  {
    delay: '1.75s',
    top: '85%',
    rotate3d: '1, 1, 1, 720deg',
    translateY: '300px',
    translateX: '2560px',
    translateZ: '-100px'
  }
]

const MENUS = [
  { id: 'favorite', name: '즐겨찾기', delay: null },
  { id: 'zPayment', name: 'Z결제', delay: '0.15s' },
  { id: 'zOnly', name: 'Z-Only', delay: '0.3s' },
  { id: 'smartSearch', name: '스마트검색', delay: '0.45s' },
  { id: 'myItem', name: '내아이템', delay: '0.6s' }
]

export default function CloneMainUI(props: Iprops) {
  return (
    <>
      <HeaderWrapper>
        <HeaderMiddleWrapper>
          <HeaderZigZagLogo></HeaderZigZagLogo>
          <HeaderButton>중고마켓 안내</HeaderButton>
          <HeaderImage></HeaderImage>
          <HeaderTextWrapper>
            <HeaderTextTop>
              니 맘대로
              <br />
              <HeaderTextTopPink>중고마켓</HeaderTextTopPink>
              &nbsp;이네요
            </HeaderTextTop>
            <HeaderTextMiddle>
              3천만이 선택할 국민 중고마켓
              <br />
              4,000개 이상 혼성 브랜드를 한 번에!
            </HeaderTextMiddle>
            <HeaderTextBottomWrapper>
              <HeaderTextQrCodeWrapper>
                <HeaderTextQrCodeText>QR코드 다운로드</HeaderTextQrCodeText>
                <HeaderTextQrCodeImage></HeaderTextQrCodeImage>
              </HeaderTextQrCodeWrapper>
              <HeaderTextLineDivider></HeaderTextLineDivider>
              <HeaderAppStoreWrapper>
                <HeaderAppStoreText>앱스토어 다운로드</HeaderAppStoreText>
                <HeaderAppStoreImageWrapper
                  href="https://apps.apple.com/KR/app/id976131101?mt=8"
                  target="_blank"
                >
                  <HeaderAppStoreImage></HeaderAppStoreImage>
                </HeaderAppStoreImageWrapper>
                <HeaderGooglePlayImageWrapper
                  href="https://play.google.com/store/apps/details?id=com.croquis.zigzag&referrer=af_tranid%3DOBqQUJek70xvezx00BfAlw%26shortlink%3D189189a0%26pid%3Dzigzag_website_aos%26af_click_lookback%3D1d%26af_web_id%3Dda3697a4-f9a5-4298-b8c3-a71d218fcc5b-p%26utm_source%3Dzigzag_website_aos"
                  target="_blank"
                >
                  <HeaderGooglePlayImage></HeaderGooglePlayImage>
                </HeaderGooglePlayImageWrapper>
              </HeaderAppStoreWrapper>
            </HeaderTextBottomWrapper>
          </HeaderTextWrapper>
        </HeaderMiddleWrapper>
      </HeaderWrapper>
      <FirstBodyWrapper>
        <FirstBodySakuraWrapper>
          {ANIMATION.map((data) => (
            <FirstBodyFirstSakura key="" data={data} />
          ))}
        </FirstBodySakuraWrapper>
        <FirstBodyMiddleWrapper>
          <FirstBodyMenuWrapper>
            {MENUS.map((data) => (
              <FirstBodyMenuList
                onClick={props.onClickMenuList}
                id={data.id}
                isActive={props.selectedId === data.id}
                delay={data.delay}
                key=""
              >
                {data.name}
                {props.selectedId === data.id && (
                  <MenuLineDivider></MenuLineDivider>
                )}
              </FirstBodyMenuList>
            ))}
          </FirstBodyMenuWrapper>
        </FirstBodyMiddleWrapper>
      </FirstBodyWrapper>
    </>
  )
}
