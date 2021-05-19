import {Wrapper, Container, TitleWrapper, Title, Title2, ID_PW, Id, Pw, IdDetail, IdInput, PwDetail, PwInput, TitleDetail, TitleName, ContentBox, ContentBoxText, ContentBoxDetail, Address, AddressText, AddressTextFind, AddressTextBlock, AddressButton, AddressBox, AddressBox2, YoutubeBox, YoutubeText, YoutubeDetail, PhotoBox, PhotoText, PhotoBoxBlock, PhotoBox1, PhotoBoxDetailText, PhotoBoxDetailText2, YoutubeSetting, YoutubeText2, YoutubeRadio, YoutubeWrapper, RegisterButtonWrapper, RegisterButton} from '../../styles/Board.write';


export default function BoardWritePage() {
    // 자바스크립트
    
    
    return (
        <Container>
            <Wrapper>
                <TitleWrapper>
                    <Title>게시물 등록</Title>
                </TitleWrapper>
                <ID_PW>
                    <Id>
                        <IdDetail>작성자</IdDetail>
                        <IdInput type= "text" placeholder = "이름을 적어주세요." />
                    </Id>
                    <Pw>
                        <PwDetail>비밀번호</PwDetail>
                        <PwInput type = "password" placeholder = "비밀번호를 입력해주세요."></PwInput>
                    </Pw>
                </ID_PW>
                <Title2>
                    <TitleName>제목</TitleName>
                    <TitleDetail type = "text" placeholder = "제목을 작성해주세요."/>
                </Title2>
                <ContentBox>
                    <ContentBoxText>내용</ContentBoxText>
                    <ContentBoxDetail type = "text" placeholder = "내용을 작성해주세요." />
                </ContentBox>
                <Address>
                    <AddressText>주소</AddressText>
                    <AddressTextBlock>
                        <AddressTextFind type = "text" placeholder = "07250" />
                        <AddressButton>우편번호 검색</AddressButton>
                    </AddressTextBlock>
                    <AddressBox></AddressBox>
                    <AddressBox2></AddressBox2>
                </Address>
                <YoutubeBox>
                    <YoutubeText>유튜브</YoutubeText>
                    <YoutubeDetail type= "text" placeholder = "링크를 복사해주세요." />
                </YoutubeBox>
                <PhotoBox>
                   <PhotoText>사진-첨부</PhotoText>
                   <PhotoBoxBlock>
                       <PhotoBox1>
                           <PhotoBoxDetailText>+</PhotoBoxDetailText>
                           <PhotoBoxDetailText2>Upload</PhotoBoxDetailText2>
                       </PhotoBox1>
                       <PhotoBox1>
                           <PhotoBoxDetailText>+</PhotoBoxDetailText>
                           <PhotoBoxDetailText2>Upload</PhotoBoxDetailText2>
                       </PhotoBox1>
                       <PhotoBox1>
                           <PhotoBoxDetailText>+</PhotoBoxDetailText>
                           <PhotoBoxDetailText2>Upload</PhotoBoxDetailText2>                           
                       </PhotoBox1>
                   </PhotoBoxBlock>
                </PhotoBox>
                <YoutubeSetting>
                    <YoutubeText2>메인 설정</YoutubeText2>
                    <YoutubeWrapper>
                    <YoutubeRadio type= "radio" name = "Setting" value= "Youtube" /> 유튜브
                    <YoutubeRadio type= "radio" name = "Setting" value= "Youtube" /> 사진
                    </YoutubeWrapper>
                </YoutubeSetting>
                <RegisterButtonWrapper>
                    <RegisterButton>등록하기</RegisterButton>
                </RegisterButtonWrapper>
            </Wrapper>
        </Container>
    )
}
