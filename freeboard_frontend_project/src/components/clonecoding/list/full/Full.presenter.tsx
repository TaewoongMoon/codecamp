import InfiniteScroll from 'react-infinite-scroller'
import withAuth from '../../../../commons/hocs/withAuth'
import HeaderPart from '../header/Header.container'
import {
  CardDescriptionWrapper,
  CardHeartImage,
  CardLikeNameWrapper,
  CardLink,
  CardPhoto,
  CardPhotoWrapper,
  CardPrice,
  CardTag,
  CardTitle,
  ItemCard
} from '../List.styles'
import {
  BodyHeaderTitle,
  HotArticlesNavigation,
  HotArticlesNavSelect,
  HotArticlesOption,
  ListFullBodyWrapper,
  HotArticlesNavSelectTwo,
  HotArticlesOptionTwo,
  CardsWrap
} from './Full.styles'

interface Iprops {
  onChangeRegion: any
  regionOnChange: any
  onLoadMore: any
  usedItemsData: any
}

const ListFullUI = (props: Iprops) => {
  const optionList = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '세종특별자치시',
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주특별자치도',
    '집현동'
  ]
  const optionListTwo = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구'
  ]
  return (
    <>
      <HeaderPart></HeaderPart>
      <ListFullBodyWrapper>
        <BodyHeaderTitle>중고거래 인기매물</BodyHeaderTitle>
        <HotArticlesNavigation>
          <HotArticlesNavSelect onChange={props.onChangeRegion}>
            <HotArticlesOption>지역을 선택하세요</HotArticlesOption>
            {optionList.map((data: any) => (
              <HotArticlesOption id={data} value={data} key="">
                {data}
              </HotArticlesOption>
            ))}
          </HotArticlesNavSelect>
          <HotArticlesNavSelectTwo
            disabled={!props.regionOnChange}
            isActive={props.regionOnChange}
          >
            <HotArticlesOptionTwo>동네를 선택하세요</HotArticlesOptionTwo>
            {optionListTwo.map((data: any) => (
              <HotArticlesOption value={data} key="">
                {data}
              </HotArticlesOption>
            ))}
          </HotArticlesNavSelectTwo>
        </HotArticlesNavigation>
      </ListFullBodyWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <CardsWrap>
          {props.usedItemsData?.fetchUseditems.map((data: any) => (
            <ItemCard key="">
              <CardLink href={`/clonecoding/list/${data._id}`}>
                <CardPhotoWrapper>
                  <CardPhoto src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/930bb3072e828f709b1ea72d4577edbf99e7c9b1d864d11c50aa7c538f95019b.webp?q=82&s=300x300&t=crop"></CardPhoto>
                </CardPhotoWrapper>
                <CardDescriptionWrapper>
                  <CardTitle>{data.name}</CardTitle>
                  <CardPrice>{data.price}원</CardPrice>
                  <CardTag>{data.tags}</CardTag>
                  <CardLikeNameWrapper>
                    <CardHeartImage src="/heartImage.svg"></CardHeartImage>
                  </CardLikeNameWrapper>
                </CardDescriptionWrapper>
              </CardLink>
            </ItemCard>
          ))}
        </CardsWrap>
      </InfiniteScroll>
    </>
  )
}

export default withAuth(ListFullUI)
