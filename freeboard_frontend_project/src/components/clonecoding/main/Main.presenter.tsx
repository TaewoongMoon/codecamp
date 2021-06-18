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
  FirstBodyMenuList,
  FirstBodyContentWrapper,
  FirstBodyContentTextWrapper,
  FirstBodyContentTextTypeOneWrapper,
  FirstBodyContentTextTypeOneHead,
  FirstBodyContentTextTypeOneBody,
  FirstBodyImageWrapper,
  FirstBodyImage
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

const CONTENTS = [
  {
    divBr: true,
    pBr: false,
    divHeadOne: '4000개 이상 쇼핑몰에',
    divHeadTwo: '브랜드까지',
    divHeadThree: '한 번에 즐겨찾기',
    pHeadOne: '4000개 이상 여성쇼핑몰 매일 업데이트',
    pHeadTwo: '내 스타일 쇼핑몰만 담기',
    pHeadThree: null,
    name: 'favorite',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display1@2x-4e469970eedd506d52c0d09f1156e6f9.png'
  },
  {
    divBr: false,
    pBr: false,
    divHeadOne: '결제는 한 번만',
    divHeadTwo: '포인트는 한 곳에',
    divHeadThree: null,
    pHeadOne: '4,000개 쇼핑몰, 가입도 결제도 한 번에',
    pHeadTwo: '쇼핑은 여러 곳에서, 포인트는 한 곳에',
    pHeadThree: null,
    name: 'zPayment',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display2@2x-984fd0d549262e6acf8df57e71bc17bf.png'
  },
  {
    divBr: true,
    pBr: true,
    divHeadOne: '고퀄리티',
    divHeadTwo: '자체제작은',
    divHeadThree: '지그재그에만',
    pHeadOne: '지그재그에만 있는 고퀄리티 자체제작',
    pHeadTwo: '제트 온리는 배송부터 반품까지 무료',
    pHeadThree: '오늘 주문하면 내일 도착!',
    name: 'zOnly',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display3@2x-46379a6a2b5592e15fb22342bb427804.png'
  },
  {
    divBr: false,
    pBr: true,
    divHeadOne: '까다로운 검색도',
    divHeadTwo: '필터로 한 번에',
    divHeadThree: null,
    pHeadOne: '카테고리, 가격, 소재, 컬러까지',
    pHeadTwo: '내 마음대로 보고 싶은 상품만',
    pHeadThree: '쏙쏙 골라 볼 수 있어요.',
    name: 'smartSearch',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display4@2x-133c098d8647b8f42d80a804163134be.png'
  },
  {
    divBr: false,
    pBr: true,
    divHeadOne: '모든 아이템을',
    divHeadTwo: '내 상품에 저장!',
    divHeadThree: null,
    pHeadOne: '내가 좋아하는 상품만 모아모아 저장!',
    pHeadTwo: '특별한 선택으로 가득한 나만의 옷장을',
    pHeadThree: '지그재그로 만들어보세요!',
    name: 'myItem',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display5@2x-086029f54a3d31df542f68c31d5a5e01.png'
  }
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
          <FirstBodyContentWrapper>
            <FirstBodyContentTextWrapper>
              {CONTENTS.map((data) => (
                <>
                  <FirstBodyContentTextTypeOneWrapper
                    isActive={data.name === props.selectedId}
                  >
                    <FirstBodyContentTextTypeOneHead key="">
                      {data.divHeadOne}
                      <br />
                      {data.divHeadTwo}
                      {data.divBr && <br />}
                      {data.divHeadThree}
                    </FirstBodyContentTextTypeOneHead>
                    <FirstBodyContentTextTypeOneBody>
                      {data.pHeadOne}
                      <br />
                      {data.pHeadTwo}
                      {data.pBr && <br />}
                      {data.pHeadThree}
                    </FirstBodyContentTextTypeOneBody>
                  </FirstBodyContentTextTypeOneWrapper>
                  <FirstBodyImageWrapper>
                    <FirstBodyImage
                      isActive={data.name === props.selectedId}
                      data={data}
                    ></FirstBodyImage>
                  </FirstBodyImageWrapper>
                </>
              ))}
            </FirstBodyContentTextWrapper>
          </FirstBodyContentWrapper>
        </FirstBodyMiddleWrapper>
      </FirstBodyWrapper>
    </>
  )
}
