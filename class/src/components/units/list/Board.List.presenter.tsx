import { BoardReturn } from '../../../commons/types/generated/types'
import {
  BoxWrapper,
  HeaderCheckBox,
  Wrapper,
  HeaderWrapper,
  HeaderNumber,
  HeaderTitle,
  HeaderDate,
  BodyWrapper,
  BodyCheckBox,
  BodyNumber,
  BodyTitle,
  BodyDate,
  HrLine,
  SelectEraseButtonWrapper,
  Page
} from './Board.List.styles'

interface IProps {
  checkedAll: any
  onClickHeaderBox: any
  onClickCheckBox: any
  checked: any
  onClickPage: any
  currentPage: any
  fetchMore: any
  data: any
}
export default function BoardUI(props: IProps) {
  return (
    <>
      <Wrapper>
        <BoxWrapper>
          <HeaderWrapper>
            <HeaderCheckBox
              type="checkbox"
              id="myCheck"
              checked={props.checkedAll}
              onClick={props.onClickHeaderBox}
            ></HeaderCheckBox>
            <HeaderNumber>번호</HeaderNumber>
            <HeaderTitle>제목</HeaderTitle>
            <HeaderDate>작성일</HeaderDate>
          </HeaderWrapper>
          {props.data?.fetchBoards.map((data: BoardReturn) => (
            <BodyWrapper key={data?.number}>
              <BodyCheckBox
                type="checkbox"
                // id={data?.number as number}
                onChange={props.onClickCheckBox}
                checked={props.checked[data?.number as number]}
              ></BodyCheckBox>
              <BodyNumber>{data?.number}</BodyNumber>
              <BodyTitle>{data?.title}</BodyTitle>
              <BodyDate>
                {String(new Date(data?.createdAt).getFullYear())}.
                {String(new Date(data?.createdAt).getMonth())}.
                {String(new Date(data?.createdAt).getDay())}
              </BodyDate>
            </BodyWrapper>
          ))}
          <HrLine></HrLine>
          <SelectEraseButtonWrapper>
            {new Array(10).fill(1).map((_, index) => (
              <Page
                key=""
                id={String(index + 1)}
                onClick={props.onClickPage}
                isActive={props.currentPage === index + 1}
              >
                {index + 1}
              </Page>
            ))}
          </SelectEraseButtonWrapper>
        </BoxWrapper>
      </Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.fetchMore}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {
          <>
            <HeaderNumber>번호</HeaderNumber>
            <HeaderTitle>제목</HeaderTitle>
            <HeaderDate>작성일</HeaderDate>
          </>
        }
      </InfiniteScroll>
    </>
  )
}
