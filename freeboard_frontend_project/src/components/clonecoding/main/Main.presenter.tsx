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
  FirstBodyImage,
  SecondBodyWrapper,
  SecondBodyMiddleWrapper,
  SecondBodyH2Text,
  SecondBodyPText,
  SecondBodyImage,
  SecondBodyButtonWrapper,
  SecondBodyFirstButton,
  SecondBodyFirstButtonText,
  SecondBodySecondButton,
  SecondBodySecondButtonText,
  ThirdBodyWrapper,
  ThirdBodyMiddleWrapper,
  ThirdBodyTextWrapper,
  ThirdBodyFirstTextWrapper,
  ThirdBodyFirstTextSpanOne,
  ThirdBodyFirstTextSpanTwo,
  ThirdBodyFirstTextSpanThree,
  ThirdBodyMonthIndicationText,
  FourthBodyWrapper,
  FourthBodyMiddleWrapper,
  FourthBodySmallWrapper,
  FourthBodyFirstText,
  FourthBodyButtonWrapper,
  FourthBodyQrCodeWrapper,
  FourthBodyQrCodeText,
  FourthBodyQrImage,
  FourthBodyButtonDivider,
  FourthBodyAppDownloadWrapper,
  FourthBodyAppDownloadText,
  FourthBodyAppStoreDownload,
  FourthBodyAppStoreDownloadButton,
  FourthBodyGooglePlayDownload,
  FourthBodyGooglePlayDownloadButton,
  FooterWrapper,
  FooterMiddleWrapper,
  FooterSmallWrapper,
  TextEmoticonWrapper,
  FirstLineFirstText,
  FirstLineSecondText,
  FooterImageWithLink,
  FooterImageWrapper,
  SecondLineFirstText,
  SecondLineSecondText,
  ThirdLineText,
  FourthLineText,
  FourthLineSecondText,
  FifthLineText,
  FifthLineSecondText
} from './Main.styles'

interface Iprops {
  onClickMenuList: any
  selectedId: any
  observer: any
  setNode: any
  entry: any
  onClickListPage: any
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
  { id: 'favorite', name: '????????????', delay: null },
  { id: 'zPayment', name: 'Z??????', delay: '0.15s' },
  { id: 'zOnly', name: 'Z-Only', delay: '0.3s' },
  { id: 'smartSearch', name: '???????????????', delay: '0.45s' },
  { id: 'myItem', name: '????????????', delay: '0.6s' }
]

const CONTENTS = [
  {
    divBr: true,
    pBr: false,
    divHeadOne: '4000??? ?????? ????????????',
    divHeadTwo: '???????????????',
    divHeadThree: '??? ?????? ????????????',
    pHeadOne: '4000??? ?????? ??????????????? ?????? ????????????',
    pHeadTwo: '??? ????????? ???????????? ??????',
    pHeadThree: null,
    name: 'favorite',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display1@2x-4e469970eedd506d52c0d09f1156e6f9.png'
  },
  {
    divBr: false,
    pBr: false,
    divHeadOne: '????????? ??? ??????',
    divHeadTwo: '???????????? ??? ??????',
    divHeadThree: null,
    pHeadOne: '4,000??? ?????????, ????????? ????????? ??? ??????',
    pHeadTwo: '????????? ?????? ?????????, ???????????? ??? ??????',
    pHeadThree: null,
    name: 'zPayment',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display2@2x-984fd0d549262e6acf8df57e71bc17bf.png'
  },
  {
    divBr: true,
    pBr: true,
    divHeadOne: '????????????',
    divHeadTwo: '???????????????',
    divHeadThree: '??????????????????',
    pHeadOne: '?????????????????? ?????? ???????????? ????????????',
    pHeadTwo: '?????? ????????? ???????????? ???????????? ??????',
    pHeadThree: '?????? ???????????? ?????? ??????!',
    name: 'zOnly',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display3@2x-46379a6a2b5592e15fb22342bb427804.png'
  },
  {
    divBr: false,
    pBr: true,
    divHeadOne: '???????????? ?????????',
    divHeadTwo: '????????? ??? ??????',
    divHeadThree: null,
    pHeadOne: '????????????, ??????, ??????, ????????????',
    pHeadTwo: '??? ???????????? ?????? ?????? ?????????',
    pHeadThree: '?????? ?????? ??? ??? ?????????.',
    name: 'smartSearch',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display4@2x-133c098d8647b8f42d80a804163134be.png'
  },
  {
    divBr: false,
    pBr: true,
    divHeadOne: '?????? ????????????',
    divHeadTwo: '??? ????????? ??????!',
    divHeadThree: null,
    pHeadOne: '?????? ???????????? ????????? ???????????? ??????!',
    pHeadTwo: '????????? ???????????? ????????? ????????? ?????????',
    pHeadThree: '??????????????? ??????????????????!',
    name: 'myItem',
    backgroundImage:
      'https://zigzag.kr/_next/static/images/display5@2x-086029f54a3d31df542f68c31d5a5e01.png'
  }
]

const THIRD_BODY = [
  { first: '?????? ?????????', second: '4,000', third: '???' },
  { first: '2020??? ?????????', second: '7,500', third: '???' },
  { first: '?????? ?????????', second: '340', third: '???' },
  { first: '??? ????????????', second: '3,000', third: '???' }
]

const FOOTER_IMAGE = [
  {
    url: 'https://zigzag.kr/_next/static/images/social_instagram-4a461158e50d6ae04b21b727603f6817.svg',
    href: 'https://www.instagram.com/zigzag_korea/'
  },
  {
    url: 'https://zigzag.kr/_next/static/images/social_kakao1boon-fc64a2b756b5c214dfc10b31de6eeea0.svg',
    href: 'https://content.v.kakao.com/3500/home'
  },
  {
    url: 'https://zigzag.kr/_next/static/images/social_kakaoplus-deb9eae5dcadeff740c07b26885a9dfa.svg',
    href: 'https://pf.kakao.com/_eddbM'
  },
  {
    url: 'https://zigzag.kr/_next/static/images/social_youtube-ea5132fd0fe70b65f29909af250d4175.svg',
    href: 'https://www.youtube.com/channel/UC5CTLf-G91F8BCEKMPQEDDg'
  }
]

export default function CloneMainUI(props: Iprops) {
  return (
    <>
      <HeaderWrapper>
        <HeaderMiddleWrapper>
          <HeaderZigZagLogo></HeaderZigZagLogo>
          <HeaderButton onClick={props.onClickListPage}>
            ???????????? ??????
          </HeaderButton>
          <HeaderImage></HeaderImage>
          <HeaderTextWrapper>
            <HeaderTextTop>
              ??? ?????????
              <br />
              <HeaderTextTopPink>????????????</HeaderTextTopPink>
              &nbsp;?????????
            </HeaderTextTop>
            <HeaderTextMiddle>
              3????????? ????????? ?????? ????????????
              <br />
              4,000??? ?????? ?????? ???????????? ??? ??????!
            </HeaderTextMiddle>
            <HeaderTextBottomWrapper>
              <HeaderTextQrCodeWrapper>
                <HeaderTextQrCodeText>QR?????? ????????????</HeaderTextQrCodeText>
                <HeaderTextQrCodeImage></HeaderTextQrCodeImage>
              </HeaderTextQrCodeWrapper>
              <HeaderTextLineDivider></HeaderTextLineDivider>
              <HeaderAppStoreWrapper>
                <HeaderAppStoreText>???????????? ????????????</HeaderAppStoreText>
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
      <SecondBodyWrapper>
        <SecondBodyMiddleWrapper
          ref={props.setNode}
          ratio={props.entry.intersectionRatio}
        >
          <SecondBodyH2Text ratio={props.entry.intersectionRatio}>
            ???????????????
            <br />
            ?????? ????????????
            <br />
            ?????? ???????????????.
          </SecondBodyH2Text>
          <SecondBodyPText ratio={props.entry.intersectionRatio}>
            ?????? 340??? ????????? ???????????? ?????? ?????????
            <br />
            ????????????, ?????? ?????? ???????????????.
          </SecondBodyPText>
          <SecondBodyImage
            ratio={props.entry.intersectionRatio}
          ></SecondBodyImage>
          <SecondBodyButtonWrapper ratio={props.entry.intersectionRatio}>
            <SecondBodyFirstButton
              href="https://zigzag.kr/partners/"
              target="_blank"
              ratio={props.entry.intersectionRatio}
            >
              <SecondBodyFirstButtonText>?????? ?????????</SecondBodyFirstButtonText>
              ????????? ?????? ??????
            </SecondBodyFirstButton>
            <SecondBodySecondButton
              href="https://shop.zigzag.kr/#!/login"
              target="_blank"
            >
              <SecondBodySecondButtonText>
                ?????? ?????????
              </SecondBodySecondButtonText>
              ????????? ?????? ??????
            </SecondBodySecondButton>
          </SecondBodyButtonWrapper>
        </SecondBodyMiddleWrapper>
      </SecondBodyWrapper>
      <ThirdBodyWrapper>
        <ThirdBodyMiddleWrapper>
          <ThirdBodyTextWrapper>
            {THIRD_BODY.map((data) => (
              <ThirdBodyFirstTextWrapper key="">
                <ThirdBodyFirstTextSpanOne>
                  {data.first}
                </ThirdBodyFirstTextSpanOne>
                <ThirdBodyFirstTextSpanTwo>
                  {data.second}
                </ThirdBodyFirstTextSpanTwo>
                <ThirdBodyFirstTextSpanThree>
                  {data.third}
                </ThirdBodyFirstTextSpanThree>
              </ThirdBodyFirstTextWrapper>
            ))}
            <ThirdBodyMonthIndicationText>
              2021??? 4??? ??????
            </ThirdBodyMonthIndicationText>
          </ThirdBodyTextWrapper>
        </ThirdBodyMiddleWrapper>
      </ThirdBodyWrapper>
      <FourthBodyWrapper>
        <FourthBodyMiddleWrapper>
          <FourthBodySmallWrapper>
            <FourthBodyFirstText>
              ?????? ?????? ???????????????
              <br />
              ???????????? ?????????.
            </FourthBodyFirstText>
            <FourthBodyButtonWrapper>
              <FourthBodyQrCodeWrapper>
                <FourthBodyQrCodeText>QR?????? ????????????</FourthBodyQrCodeText>
                <FourthBodyQrImage></FourthBodyQrImage>
              </FourthBodyQrCodeWrapper>
              <FourthBodyButtonDivider></FourthBodyButtonDivider>
              <FourthBodyAppDownloadWrapper>
                <FourthBodyAppDownloadText>
                  ???????????? ????????????
                </FourthBodyAppDownloadText>
                <FourthBodyAppStoreDownload
                  target="_blank"
                  href="https://apps.apple.com/KR/app/id976131101?mt=8"
                >
                  <FourthBodyAppStoreDownloadButton />
                </FourthBodyAppStoreDownload>
                <FourthBodyGooglePlayDownload
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.croquis.zigzag&referrer=af_tranid%3DIUp1vj0seqlZKXN8xL9sww%26shortlink%3D189189a0%26pid%3Dzigzag_website_aos%26af_click_lookback%3D1d%26af_web_id%3Dda3697a4-f9a5-4298-b8c3-a71d218fcc5b-p%26utm_source%3Dzigzag_website_aos"
                >
                  <FourthBodyGooglePlayDownloadButton />
                </FourthBodyGooglePlayDownload>
              </FourthBodyAppDownloadWrapper>
            </FourthBodyButtonWrapper>
          </FourthBodySmallWrapper>
        </FourthBodyMiddleWrapper>
      </FourthBodyWrapper>
      <FooterWrapper>
        <FooterMiddleWrapper>
          <FooterSmallWrapper>
            <TextEmoticonWrapper>
              <FirstLineFirstText>???????????????(???)</FirstLineFirstText>
              <FirstLineSecondText>
                ????????? ????????? ???????????? 521, ??????????????????, 27???
              </FirstLineSecondText>
              <br />
              <SecondLineFirstText>
                <span style={{ position: 'relative', marginRight: '6px' }}>
                  ??????
                </span>
                <span style={{ position: 'relative' }}>?????????</span>
              </SecondLineFirstText>
              <SecondLineSecondText>
                <span style={{ position: 'relative', marginRight: '6px' }}>
                  ????????? ????????????
                </span>
                <span style={{ position: 'relative' }}>214-88-91525</span>
              </SecondLineSecondText>
              <ThirdLineText>
                <span style={{ position: 'relative', marginRight: '6px' }}>
                  ???????????????
                </span>
                <span style={{ position: 'relative' }}>?????? ??????-03345</span>
              </ThirdLineText>
              <br />
              <FourthLineText>
                <span style={{ position: 'relative', marginRight: '6px' }}>
                  ?????????????????????
                </span>
                <span style={{ position: 'relative' }}>shop@zigzag.kr</span>
              </FourthLineText>
              <FourthLineSecondText>
                <span style={{ position: 'relative', marginRight: '6px' }}>
                  ?????????????????????
                </span>
                <span style={{ position: 'relative' }}>
                  marketing@zigzag.kr
                </span>
              </FourthLineSecondText>
              <br />
              <FifthLineText>
                <span style={{ position: 'relative', marginRight: '6px' }}>
                  ????????????
                </span>
                <span style={{ position: 'relative' }}>pr@zigzag.kr</span>
              </FifthLineText>
              <FifthLineSecondText>
                <span style={{ position: 'relative', marginRight: '6px' }}>
                  ????????????
                </span>
                <span style={{ position: 'relative' }}>
                  support@zigzag.kr / 1670-8050 (09:00 ~ 18:00)
                </span>
              </FifthLineSecondText>
            </TextEmoticonWrapper>
            <FooterImageWrapper>
              {FOOTER_IMAGE.map((data) => (
                <FooterImageWithLink
                  target="_blank"
                  href={data.href}
                  key=""
                  data={data}
                />
              ))}
            </FooterImageWrapper>
          </FooterSmallWrapper>
        </FooterMiddleWrapper>
      </FooterWrapper>
    </>
  )
}
