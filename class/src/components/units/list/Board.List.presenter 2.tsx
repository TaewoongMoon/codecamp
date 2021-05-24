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
  SelectEraseButton
} from './Board.List.styles'
export default function BoardUI(props) {
  return (
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
        {props.data?.fetchBoards.map((data) => (
          <BodyWrapper key={data?.number}>
            <BodyCheckBox
              type="checkbox"
              id={data?.number}
              onClick={props.onClickCheckBox}
              checked={props.checked[data?.number]}
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
          <SelectEraseButton>선택 삭제</SelectEraseButton>
        </SelectEraseButtonWrapper>
      </BoxWrapper>
    </Wrapper>
  )
}
