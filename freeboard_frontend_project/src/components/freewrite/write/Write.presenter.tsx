import {
  Wrapper,
  Title,
  WriterWrapper,
  Label,
  Writer,
  Password,
  InputWrapper,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  Youtube,
  ImageWrapper,
  UploadButton,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  CancelButton,
  SubmitButton,
  ButtonWrapper,
  TotalBox
} from './Write.styles'

export const WriteUI = (props: any) => {
  return (
    <TotalBox>
      <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              name="headWriter"
              onChange={props.onChangeInput}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 입력해주세요."
              name="headPassword"
              onChange={props.onChangeInput}
            />
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            name="headTitle"
            onChange={props.onChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            name="headContent"
            onChange={props.onChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              placeholder="07250"
              type="text"
              defaultValue={props.addressDetails.zipcode}
              disabled
            />
            <SearchButton handleComplete={props.handleComplete}>
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>
          <Address
            onChange={props.onChangeInput}
            name="simpleAddress"
            defaultValue={props.addressDetails.address}
          />
          <Address onChange={props.onChangeInput} name="detailAddress" />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeInput}
            name="headYoutube"
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton
            type="radio"
            id="youtube"
            name="headOption"
            value="유튜브"
            onClick={props.onChangeInput}
          />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton
            type="radio"
            id="image"
            name="headOption"
            value="사진"
            onClick={props.onChangeInput}
          />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <CancelButton>취소하기</CancelButton>
          <SubmitButton
            onClick={props.RegisterButton}
            disabled={props.buttonColor}
          >
            등록하기
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </TotalBox>
  )
}
