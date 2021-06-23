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
  CardHeartImage,
  HotItemList,
  HotItemText
} from './List.styles'

interface Iprops {
  bestData: any
}

const ListUI = (props: Iprops) => {
  const MENU_TEMP = [
    {
      name: '제습기',
      address: '경기도 남양주시 다산동',
      price: '2400원',
      tag: '#맛없다#싼데',
      url: 'https://dnvefa72aowie.cloudfront.net/origin/article/202106/eac32d5fc2e6f74f369410b667006ddbac8cc9cc1de69cc6b0bb267986e787b8.webp?q=82&s=300x300&t=crop',
      href: 'https://www.daangn.com/articles/251280114'
    },
    {
      name: '이케아 철제선반',
      price: '10,000원',
      address: '전북 전주시 완산구 서신동',
      tag: '#저렴하다#가성비',
      url: 'https://dnvefa72aowie.cloudfront.net/origin/article/202106/E02CCB79D7A5A2B918B1C9144172DBC5E3D6A93AA58729147A411D66AB592C38.jpg?q=82&s=300x300&t=crop',
      href: 'https://www.daangn.com/articles/251384447'
    },
    {
      name: '헬렌카민스키 마리나',
      price: '23,000원',
      address: '서울 강남구 역삼2동',
      tag: '#저렴하다#가성비',
      url: 'https://dnvefa72aowie.cloudfront.net/origin/article/202106/011cdc00979818c09ca836eae754acff861183a345d793026442868a2590c599.webp?q=82&s=300x300&t=crop',
      href: 'https://www.daangn.com/articles/251339613'
    },
    {
      name: '스토케 트립트랩',
      price: '30,000원',
      address: '대구 수성구 만촌1동',
      tag: '#신기하다#모양이',
      url: 'https://dnvefa72aowie.cloudfront.net/origin/article/202106/D85610ABE0518B6AD2CEB66D1B27F62FE7B44A93DE7C5EEFDA1ED503ED693EAD.jpg?q=82&s=300x300&t=crop',
      href: 'https://www.daangn.com/articles/251310609'
    }
  ]
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
            {props.bestData?.fetchUseditemsOfTheBest.map((data: any) => (
              <>
                <ItemCard key="">
                  <CardLink href="https://www.daangn.com/articles/250788128">
                    <CardPhotoWrapper>
                      <CardPhoto src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/930bb3072e828f709b1ea72d4577edbf99e7c9b1d864d11c50aa7c538f95019b.webp?q=82&s=300x300&t=crop"></CardPhoto>
                    </CardPhotoWrapper>
                    <CardDescriptionWrapper>
                      <CardTitle>{data.name}</CardTitle>
                      <CardPrice>{data.price}원</CardPrice>
                      <CardTag>
                        {data.tags.length
                          ? data.tags
                          : '등록된 태그가 없습니다.'}
                      </CardTag>
                      <CardLikeNameWrapper>
                        <CardHeartImage src="/heartImage.svg"></CardHeartImage>
                      </CardLikeNameWrapper>
                    </CardDescriptionWrapper>
                  </CardLink>
                </ItemCard>
              </>
            ))}
            {MENU_TEMP.map((data: any) => (
              <>
                <ItemCard key="">
                  <CardLink href={data.href}>
                    <CardPhotoWrapper>
                      <CardPhoto src={data.url}></CardPhoto>
                    </CardPhotoWrapper>
                    <CardDescriptionWrapper>
                      <CardTitle>{data.name}</CardTitle>
                      <CardPrice>{data.price}</CardPrice>
                      <CardTag>{data.address}</CardTag>
                      <CardLikeNameWrapper>
                        <CardHeartImage src="/heartImage.svg"></CardHeartImage>
                      </CardLikeNameWrapper>
                    </CardDescriptionWrapper>
                  </CardLink>
                </ItemCard>
              </>
            ))}
          </ItemCardWrapper>
          <HotItemList>
            <HotItemText href="https://www.daangn.com/hot_articles">
              인기매물 더 보기
            </HotItemText>
          </HotItemList>
        </ItemListWrapper>
      </ItemListSection>
    </Fragment>
  )
}

export default ListUI
