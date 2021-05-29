import {
  BodyDateText,
  BodyNumberText,
  BodyText,
  BodyWriterText,
  BottomRegisterButtonLeftArrow,
  BottomRegisterButtonMiddleLeftWrapper,
  BottomRegisterButtonRightArrow,
  BottomRegisterButtonSmallLeftWrapper,
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
  Page,
  HeaderWrapper,
  HeaderNumber,
  HeaderTitle,
  HeaderWriter,
  HeaderDate,
  BodyWriter,
  BottomRegisterButtonBigWrapper,
  BottomRegisterButtonMiddleRightWrapper
} from './List.styles'
const ListPageUI = (props: any) => {
  return (
    <>
      <Wrapper>
        <BoxWrapper>
          <HeaderWrapper>
            <HeaderNumber>번호</HeaderNumber>
            <HeaderTitle>제목</HeaderTitle>
            <HeaderWriter>작성자</HeaderWriter>
            <HeaderDate>날짜</HeaderDate>
          </HeaderWrapper>
          {props.data?.fetchBoards.map((data: any, index) => (
            <BodyWrapper key={data?._id}>
              <BodyNumber>
                <BodyNumberText
                  id={data?._id}
                  onClick={props.onClickRegisterPageThroughText}
                >
                  {props.pageNumberCount + (index + 1)}
                </BodyNumberText>
              </BodyNumber>
              <BodyTitle>
                <BodyText
                  id={data?._id}
                  onClick={props.onClickRegisterPageThroughText}
                >
                  {data.title}
                </BodyText>
              </BodyTitle>
              <BodyWriter>
                <BodyWriterText
                  id={data?._id}
                  onClick={props.onClickRegisterPageThroughText}
                >
                  {data.writer}
                </BodyWriterText>
              </BodyWriter>
              <BodyDate>
                <BodyDateText
                  id={data?._id}
                  onClick={props.onClickRegisterPageThroughText}
                >{`${String(new Date(data?.createdAt).getFullYear())}.
                ${String(new Date(data?.createdAt).getMonth() + 1).padStart(
                  2,
                  '0'
                )}.
                ${String(new Date(data?.createdAt).getDate()).padStart(
                  2,
                  '0'
                )}`}</BodyDateText>
              </BodyDate>
            </BodyWrapper>
          ))}
          <HrLine></HrLine>
          <BottomRegisterButtonBigWrapper>
            <BottomRegisterButtonMiddleLeftWrapper>
              <BottomRegisterButtonSmallLeftWrapper>
                <BottomRegisterButtonLeftArrow src="/LeftArrow.png"></BottomRegisterButtonLeftArrow>
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
                <BottomRegisterButtonRightArrow src="/RightArrow.png"></BottomRegisterButtonRightArrow>
              </BottomRegisterButtonSmallLeftWrapper>
            </BottomRegisterButtonMiddleLeftWrapper>
            <BottomRegisterButtonMiddleRightWrapper>
              <RegisterButton
                onMouseOver={props.onMouseoverRegisterPage}
                onMouseOut={props.onMouseoutRegisterPage}
              >
                <RegisterTextWrapper>
                  <RegisterPencilImage
                    src={
                      props.pencilColor === true
                        ? '/YellowStar.png'
                        : '/RegisterPencil(2).png'
                    }
                  ></RegisterPencilImage>
                  <RegisterText onClick={props.onClickRegisterPage}>
                    게시물 등록하기
                  </RegisterText>
                </RegisterTextWrapper>
              </RegisterButton>
            </BottomRegisterButtonMiddleRightWrapper>
          </BottomRegisterButtonBigWrapper>
        </BoxWrapper>
      </Wrapper>
    </>
  )
}

export default ListPageUI
