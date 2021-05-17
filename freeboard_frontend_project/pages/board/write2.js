import {Wrapper, Title, WriterWrapper, Label, Writer, Password, InputWrapper, Subject, Contents, ZipcodeWrapper, Zipcode, SearchButton, Address, Youtube, ImageWrapper, UploadButton, OptionWrapper, RadioButton, RadioLabel, CancelButton, SubmitButton, ButtonWrapper} from '../../styles/Board.write2'
import {useState} from "react";
import {useMutation, gql} from '@apollo/client';
import {useRouter} from "next/router";

export default function BoardWritePage() {

const router = useRouter();



const [boardWritePackage, setBoardWritePackage] = useState({
    headWriter:"",
    headPassword:"",
    headTitle:"",
    headContent:"",
    simpleAddress:"",
    detailAddress:"",
    headYoutube:"",
    headOption:"",
})

const CREATE_BOARD = gql`
  mutation createBoard($headWriter:String, $headPassword: String, $headTitle: String!, $headContent: String!){
    createBoard(createBoardInput : {
      writer: $headWriter,
      password: $headPassword,
      title: $headTitle,
      contents: $headContent,
    }
    )
  {
    _id,
    writer,
    title,
    contents
  }
  
  }
`

const onChangeInput = (event) => {
  const data = {
    ...boardWritePackage,
    [event.target.name] : event.target.value
    
  }

  setBoardWritePackage(data)
  console.log(data)

}

// const WriterChange = (event) => {
//   const temp = event.target.value;
//   setWriter(temp);
// }

// const PasswordChange = (event) => {
//   const temp = event.target.value;
//   setPassword(temp);
// }

// const TitleChange = (event) => {
//   const temp = event.target.value;
//   setTitle(temp);
// }

// const ContentChange = (event) => {
//   const temp = event.target.value;
//   setContent(temp);
// }

// const AddressChangeSimple = (event) =>{
//   const temp = event.target.value;
//   setSimpleAddress(temp);
// } 

// const AddressChangeDetail = (event) => {
//   const temp = event.target.value;
//   setDetailAddress(temp);
// }

// const YoutubeChange = (event) => {
//   const temp = event.target.value;
//   setYoutube(temp);
// }

// const SettingOption = (event) => {
//   // setOption(OptionBtnName)
//   console.log(event.target.value)
//   console.log(event.target.name)
// }



const[createBoard] = useMutation(CREATE_BOARD)

const RegisterButton = async() => {
  if(boardWritePackage.headWriter.length > 3 || boardWritePackage.headWriter.length < 1){
    alert("작성자 이름이 잘못되었습니다.")
  }else if(boardWritePackage.headPassword.length < 8){
    alert("비밀번호의 길이가 8자이하입니다.")
  }else if(boardWritePackage.headTitle.length < 1){
    alert("제목을 작성하여주십시오.")
  }else if(boardWritePackage.headContent.length < 20){
    alert("내용의 길이가 너무 짦습니다.")
  }else if(boardWritePackage.simpleAddress.length <1){
    alert("주소를 작성하여 주십시오.")
  }else if(boardWritePackage.detailAddress.length < 1){
    alert("주소를 작성하여 주십시오.")
  }else if(boardWritePackage.headYoutube.length < 1){
    alert("링크가정확하지않습니다.")
  }else if(boardWritePackage.headOption.length < 1){
    alert("메인설정을 선택하여 주십시오.")
  }else{
    try {
      const result = await createBoard({
        variables: {
          headWriter : boardWritePackage.headWriter,
          headPassword: boardWritePackage.headPassword,
          headTitle :boardWritePackage.headTitle,
          headContent: boardWritePackage.headContent
        }
      }) 
      const message = "입력을 완료하였습니다."
      alert(message)
      const id_val = result.data.createBoard._id
      router.push(`/board/detailwrite/${id_val}`)
            
    } catch(error){
      alert(error.message)
    }

  }
}
  return (
    <Wrapper>
         <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." name = "headWriter" onChange = {onChangeInput} />
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 입력해주세요." name = "headPassword" onChange = {onChangeInput} />
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." name = "headTitle" onChange = {onChangeInput}/>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요." name = "headContent" onChange = {onChangeInput}/>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250"/>
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address onChange ={onChangeInput} name = "simpleAddress" />
          <Address onChange ={onChangeInput} name = "detailAddress"/>
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요." onChange ={onChangeInput} name = "headYoutube"/>
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
          <RadioButton type="radio" id="youtube" name="headOption" value="유튜브" onClick ={onChangeInput} />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="headOption" value = "사진" onClick = {onChangeInput}/>
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <CancelButton>취소하기</CancelButton>
          <SubmitButton onClick = {RegisterButton}>등록하기</SubmitButton>
        </ButtonWrapper>
    </Wrapper>
  )
}
