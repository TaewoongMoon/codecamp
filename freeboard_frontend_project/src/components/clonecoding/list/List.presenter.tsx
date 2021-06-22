import HeaderPart from './header/Header.container'
import {
  BodyFirstSection,
  BodyFirstWrapper,
  HomeMainFirstText,
  HomeMainWrapper,
  Fragment,
  HomeMainSecondText,
  FirstBodyImageWrapper,
  BodySecondSection,
  BodySecondWrapper,
  BodySecondImage,
  BodySecondTextWrapper,
  BodySecondSecondText,
  BodySecondFirstText,
  ButtonWrapper,
  ButtonText1,
  ButtonText2,
  ItemListSection,
  ItemListWrapper,
  ItemListTitle,
  ItemCardWrapper,
  ItemCard,
  CardLink,
  CardPhotoWrapper,
  CardPhoto,
  CardDescriptionWrapper,
  CardTitle,
  CardPrice,
  CardTag,
  CardLikeNameWrapper,
  CardHeartImage
} from './List.styles'
const ListUI = () => {
  return (
    <Fragment>
      <HeaderPart></HeaderPart>
      <BodyFirstSection>
        <BodyFirstWrapper>
          <HomeMainWrapper>
            <HomeMainFirstText>
              당신 근처의
              <br />
              중고마켓
            </HomeMainFirstText>
            <HomeMainSecondText>
              좋은 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </HomeMainSecondText>
          </HomeMainWrapper>
          <FirstBodyImageWrapper></FirstBodyImageWrapper>
        </BodyFirstWrapper>
      </BodyFirstSection>
      <BodySecondSection>
        <BodySecondWrapper>
          <BodySecondImage></BodySecondImage>
          <BodySecondTextWrapper>
            <BodySecondFirstText>
              우리동네
              <br />
              중고 직거래 마켓
            </BodySecondFirstText>
            <BodySecondSecondText>
              동네 주민들과 따뜻한 거래를 지금 경험해 보세요
            </BodySecondSecondText>
            <ButtonWrapper>
              <ButtonText1 href="https://www.daangn.com/hot_articles">
                인기 매물보기
              </ButtonText1>
              <ButtonText2 href="https://www.daangn.com/trust">
                믿을 수 있는 중고거래
              </ButtonText2>
            </ButtonWrapper>
          </BodySecondTextWrapper>
        </BodySecondWrapper>
      </BodySecondSection>
      <ItemListSection>
        <ItemListWrapper>
          <ItemListTitle>중고거래 인기매물</ItemListTitle>
          <ItemCardWrapper>
            <ItemCard>
              <CardLink href="https://www.daangn.com/articles/250788128">
                <CardPhotoWrapper>
                  <CardPhoto src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/930bb3072e828f709b1ea72d4577edbf99e7c9b1d864d11c50aa7c538f95019b.webp?q=82&s=300x300&t=crop"></CardPhoto>
                </CardPhotoWrapper>
                <CardDescriptionWrapper>
                  <CardTitle>삼성제습기</CardTitle>
                  <CardPrice>60,000원</CardPrice>
                  <CardTag>
                    경기도 광주시 모포읍 내마음대로 쓴다 우하하하하
                  </CardTag>
                  <CardLikeNameWrapper>
                    <CardHeartImage src="/heartImage.svg"></CardHeartImage>
                  </CardLikeNameWrapper>
                </CardDescriptionWrapper>
              </CardLink>
            </ItemCard>
          </ItemCardWrapper>
        </ItemListWrapper>
      </ItemListSection>
    </Fragment>
  )
}

export default ListUI
