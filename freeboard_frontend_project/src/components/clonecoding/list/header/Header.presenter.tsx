import {
  FixedBarLogoTitle,
  HeaderFixedBarWrapper,
  LogoImage,
  LogoLink,
  LogoText,
  HeaderWrapper,
  SearchBoxBigWrapper,
  SearchBoxSmallWrapper,
  SearchAlternateText,
  SearchInput,
  SearchImageButton,
  HeaderBarMenu,
  HeaderDownloadWrapper,
  HeaderDownloadText,
  HeaderDownloadImage,
  HeaderDownloadImagePath,
  LogOutButton,
  LogOutButtonFirstText,
  LogOutButtonSecondText,
  SearchImage,
  ModalBox,
  FirstModalText,
  SecondModalText
} from '../List.styles'

interface Iprops {
  onClickInput: any
  searchColor: any
  onClickWholePage: any
  searchRef: any
  onClickHeaderModal: any
  handleOpen: any
  setSearchColor: any
  onClickLogOut: any
  data: any
}

const HeaderUI = (props: Iprops) => {
  return (
    <div onClick={props.onClickWholePage}>
      <HeaderWrapper>
        <HeaderFixedBarWrapper>
          <FixedBarLogoTitle>
            <LogoLink href="/clonecoding/list">
              <LogoText>당근마켓</LogoText>
              <LogoImage
                alt="당근마켓"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
              ></LogoImage>
            </LogoLink>
          </FixedBarLogoTitle>
          <SearchBoxBigWrapper isActive={props.searchColor}>
            <SearchBoxSmallWrapper onClick={props.onClickInput}>
              <SearchAlternateText>검색</SearchAlternateText>
              <SearchInput
                type="text"
                name="header-search-input"
                id="header-search-input"
                placeholder="동네 이름, 물품명 등을 검색해보세요!"
                onBlur={() => {
                  props.setSearchColor(false)
                }}
                ref={props.searchRef}
              ></SearchInput>
              <SearchImageButton>
                <SearchImage src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"></SearchImage>
              </SearchImageButton>
            </SearchBoxSmallWrapper>
          </SearchBoxBigWrapper>
          <HeaderBarMenu>
            <HeaderDownloadWrapper>
              <HeaderDownloadText>
                {props.data?.fetchUserLoggedIn.name}님
                <HeaderDownloadImage
                  viewBox="0 0 12 7"
                  xmlns="http://www.w3.org/2000/svg"
                  isActive={props.handleOpen}
                  onClick={props.onClickHeaderModal}
                >
                  <HeaderDownloadImagePath
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></HeaderDownloadImagePath>
                </HeaderDownloadImage>
              </HeaderDownloadText>
              <ModalBox isActive={props.handleOpen}>
                <FirstModalText>물건 등록하기</FirstModalText>
                <SecondModalText>자유게시판 보러가기</SecondModalText>
              </ModalBox>
            </HeaderDownloadWrapper>
            <LogOutButton onClick={props.onClickLogOut}>
              <LogOutButtonFirstText>로그아웃</LogOutButtonFirstText>
              <LogOutButtonSecondText>Beta</LogOutButtonSecondText>
            </LogOutButton>
          </HeaderBarMenu>
        </HeaderFixedBarWrapper>
      </HeaderWrapper>
    </div>
  )
}

export default HeaderUI
