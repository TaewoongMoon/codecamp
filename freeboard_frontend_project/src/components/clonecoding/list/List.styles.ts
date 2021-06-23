import styled from '@emotion/styled'

interface Iprops {
  isActive?: any
}

export const Fragment = styled.div``
export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: block;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`

export const HeaderFixedBarWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
`

export const FixedBarLogoTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  display: block;
  /* margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
`
export const LogoLink = styled.a`
  -webkit-tap-highlight-color: rgba(73, 80, 87, 0.05);
  color: -webkit-link;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
export const LogoText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`
export const LogoImage = styled.img`
  width: 120px;
  vertical-align: text-bottom;
  margin-bottom: 5px;
`

export const SearchBoxBigWrapper = styled.section`
  position: absolute;
  left: 152px;
  top: 16px;
  border-radius: 5px;
  border: ${(props: Iprops) =>
    props.isActive ? 'solid 1px black' : 'solid 1px #e9ecef'};
  text-decoration: none;
  padding: 0 1.6rem;
  height: 40px;
  box-sizing: border-box;
`
export const SearchBoxSmallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SearchAlternateText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`
export const SearchInput = styled.input`
  outline: none;
  display: block;
  width: 340px;
  height: 40px;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #212529;
  background-color: transparent;
  -webkit-appearance: none;
  border-radius: 3px;
  font-family: Arial, Helvetica, sans-serif;
  ::placeholder {
    margin: 0;
    color: lightgray;
  }
`

export const SearchImageButton = styled.button`
  border: none;
  margin: 0;
  background-color: transparent;
  -webkit-appearance: none;
  border-radius: 6px;
  box-sizing: border-box;
  color: #212529;
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`

export const SearchImage = styled.img`
  width: 19px;
  height: 19px;
  fill: #868e96;
  padding: 1rem 0;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`

export const HeaderBarMenu = styled.section`
  position: absolute;
  display: flex;
  right: 0;
  top: 16px;
  font-family: 'notoSansKR';
  color: #4d5159;
`

export const HeaderDownloadWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  font-weight: 400;
`
export const HeaderDownloadText = styled.label`
  display: inline-flex;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.02em;
  cursor: pointer;
`
export const HeaderDownloadImage = styled.svg`
  margin-left: 9px;
  margin-top: -3px;
  width: 12px;
  height: 7px;
  fill: none;
  transform: ${(props: Iprops) => props.isActive && 'rotateX(-180deg)'};
`
export const HeaderDownloadImagePath = styled.path`
  //@ts-ignore
  d: path('M 1 1 L 6 6 L 11 1');
  stroke: rgb(77, 81, 89);
  transform-origin: 0px 0px;
`

export const LogOutButton = styled.button`
  margin: 0;
  width: 120px;
  height: 40px;
  border: 1px solid #d1d3d8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0;
  cursor: pointer;
  color: #212529;
  text-align: center;
  font-weight: 700;
  background-color: #fff;
  text-decoration: none;
  outline: none;
  :hover {
    opacity: 0.7;
  }
`
export const LogOutButtonFirstText = styled.span`
  color: #4d5159;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  vertical-align: middle;
`
export const LogOutButtonSecondText = styled.span`
  margin-top: 1px;
  margin-left: 2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: #ff7e36;
  vertical-align: middle;
  font-weight: bold;
  font-style: normal;
`
export const ModalBox = styled.ul`
  display: block;
  opacity: ${(props: Iprops) => (props.isActive ? 1 : 0)};
  list-style-type: none;
  position: absolute;
  width: 200px;
  height: 114px;
  top: 46px;
  right: 0;
  border: 1px solid #868b94;
  padding: 24px;
  background-color: rgb(248, 249, 250);
  box-sizing: border-box;
  border-radius: 6px;
  transition: opacity 0.5s;
`
export const FirstModalText = styled.li`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.02em;
  display: list-item;
  text-align: -webkit-match-parent;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`
export const SecondModalText = styled.li`
  margin-top: 14px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.02em;
  display: list-item;
  font-family: Arial, Helvetica, sans-serif;
  text-align: -webkit-match-parent;
  cursor: pointer;
`

export const BodyFirstSection = styled.section`
  margin-top: 72px;
  padding-top: 24px;
  background-color: #fbf7f2;
  display: block;
  font-size: 62.5%;
`

export const BodyFirstWrapper = styled.div`
  width: 1024px;
  height: 760px;
  margin: 0 auto;
  position: relative;
  background-color: #fbf7f2;
`

export const HomeMainWrapper = styled.div`
  padding: 0;
  margin: 0;
  outline: none;
`

export const HomeMainFirstText = styled.h1`
  font-size: 48px;
  line-height: 1.3;
  padding-top: 270px;
  margin-bottom: 32px;
  letter-spacing: -0.4px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const HomeMainSecondText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #212529;
`

export const FirstBodyImageWrapper = styled.div`
  position: absolute;
  right: -84px;
  bottom: 0;
  width: 804px;
  height: 685px;
  background: #fbf7f2
    url('https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-4eb6b8642f61c5c012136597a25a7b72c705d6c6479a7270f3fb23726fddf585.png');
  background-size: 804px 685px;
`

export const BodySecondSection = styled.section`
  padding: 60px 0px;
  display: block;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const BodySecondWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BodySecondImage = styled.div`
  background-image: url('https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png');
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
  display: inline-block;
  padding: 0;
  margin: 0;
  outline: none;
`

export const BodySecondTextWrapper = styled.div`
  padding: 0;
  margin: 0;
  outline: none;
  display: block;
`
export const BodySecondFirstText = styled.h1`
  font-size: 40px;
  line-height: 1.35;
  margin-bottom: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const BodySecondSecondText = styled.p`
  font-size: 16px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
  display: block;
`
export const ButtonWrapper = styled.div`
  margin-top: 32px;
`
export const ButtonText1 = styled.a`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 14.5px 26px;
  display: inline-block;
  font-size: 18px !important;
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-weight: bold;
`
export const ButtonText2 = styled.a`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 14.5px 26px;
  display: inline-block;
  margin-left: 16px;
  font-size: 18px !important;
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-weight: bold;
`

export const ItemListSection = styled.section`
  padding: 60px 0;
  background-color: #f8f9fa;
  display: block;
  margin: 0;
  outline: none;
`

export const ItemListWrapper = styled.div`
  width: 1024px;
  margin: 60px auto 120px auto;
  padding: 0;
  outline: none;
  display: block;
`

export const ItemListTitle = styled.h1`
  margin-bottom: 80px;
  font-size: 40px;
  line-height: 1.35;
  text-align: center;
  font-weight: 700;
  padding: 0;
  outline: none;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const ItemCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  outline: none;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const ItemCard = styled.article`
  width: calc(25% - 44px);
  margin-right: 44px;
  margin-bottom: 56px;
  display: block;
  padding: 0;
  outline: none;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
`

export const CardLink = styled.a`
  text-decoration: none;
  color: #212529;
  -webkit-tap-highlight-color: rgba(73, 80, 87, 0.05);
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
`
export const CardPhotoWrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 15%);
  box-sizing: border-box;
`
export const CardPhoto = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid transparent;
`

export const CardDescriptionWrapper = styled.div`
  margin-top: 12px;
  padding: 0;
  outline: none;
  display: block;
  color: #212529;
  -webkit-tap-highlight-color: rgba(73, 80, 87, 0.05);
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const CardTitle = styled.h2`
  font-size: 16px;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
`

export const CardPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
  padding: 0;
  outline: none;
  color: #212529;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const CardTag = styled.div`
  font-size: 13px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
  padding: 0;
  outline: none;
  display: block;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
`

export const CardLikeNameWrapper = styled.div`
  color: #868e96;
  font-size: 13px;
  padding: 0;
  margin: 0;
  outline: none;
  display: block;
  -webkit-tap-highlight-color: rgba(73, 80, 87, 0.05);
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
`
export const CardHeartImage = styled.img`
  width: 16px;
  height: 16px;
`
export const HotItemList = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  outline: none;
  display: block;
`

export const HotItemText = styled.a`
  cursor: pointer;
  text-decoration: underline;
  font-size: 16px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #212529;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
