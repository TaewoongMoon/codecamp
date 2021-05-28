import {
  RegisterButton,
  RegisterPencilImage,
  RegisterText,
  RegisterTextWrapper
} from './List.styles'
import {
  BoxWrapper,
  Wrapper,
  BodyWrapper,
  BodyNumber,
  BodyTitle,
  BodyDate,
  HrLine,
  SelectEraseButtonWrapper,
  Page,
  HeaderWrapper,
  HeaderNumber,
  HeaderTitle,
  HeaderWriter,
  HeaderDate,
  BodyWriter,
  PaginationWrapper
} from './List.styles'
const ListPageUI = (props: any) => {
  return (
    <>
      <Wrapper>
        <BoxWrapper>
          <HeaderWrapper>
            <HeaderNumber>번호</HeaderNumber>
            <HeaderTitle>제목</HeaderTitle>
            <HeaderWriter>노원두</HeaderWriter>
            <HeaderDate>날짜</HeaderDate>
          </HeaderWrapper>
          {props.data?.fetchBoards.map((data: any) => (
            <BodyWrapper key={data?._id}>
              <BodyNumber>10</BodyNumber>
              <BodyTitle>{data?.title}</BodyTitle>
              <BodyWriter>노원두</BodyWriter>
              <BodyDate>
                {`${String(new Date(data?.createdAt).getFullYear())}.
                ${String(new Date(data?.createdAt).getMonth() + 1).padStart(
                  0,
                  '2'
                )}.
                ${String(new Date(data?.createdAt).getDate()).padStart(
                  0,
                  '2'
                )}`}
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
          <PaginationWrapper>
            <RegisterButton>
              <RegisterTextWrapper>
                <RegisterPencilImage src="/RegisterPencil.png"></RegisterPencilImage>
                <RegisterText onClick={props.onClickRegisterPage}>
                  게시물 등록하기
                </RegisterText>
              </RegisterTextWrapper>
            </RegisterButton>
          </PaginationWrapper>
        </BoxWrapper>
      </Wrapper>
    </>
  )
}

export default ListPageUI
