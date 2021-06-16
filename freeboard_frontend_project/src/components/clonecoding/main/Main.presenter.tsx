import {
  HeaderButton,
  HeaderImage,
  HeaderMiddleWrapper,
  HeaderWrapper,
  HeaderZigZagLogo
} from './Main.styles'

export default function CloneMainUI() {
  return (
    <>
      <HeaderWrapper>
        <HeaderMiddleWrapper>
          <HeaderZigZagLogo></HeaderZigZagLogo>
          <HeaderButton>신규 입점 안내</HeaderButton>
          <HeaderImage></HeaderImage>
        </HeaderMiddleWrapper>
      </HeaderWrapper>
    </>
  )
}
