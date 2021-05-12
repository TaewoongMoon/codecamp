import {Rectangle, StatusBar, Wrapper,Wifi, IconWrapper, Network, Battery, TimeWrapper, Timer, SearchBlock, Search, Battery2, MySectionBox, MySectionTextBox, MySectionText, MySectionImageBox, MySectionImage, MySectionNameBox, MySectionNameText, MySectionBox2, TotalMySectionBox, NoticeText, MenuSectionBox, NoticeBox, EventText, FAQText, FAQBox, EventBox, QandABox, QandAText, QandALineBox, QandALine, DashedLineBox, DashedLine, QuestionBigBox1, QuestionSmallBox, Question1, Question1Detail, ArrowBox, Arrow, QuestionBigBox2, LineRectangle, NavBarBox, HomeBarBox, HomeBarImageBox, HomeBarImage, HomeBarText, EatsRoadBox, EatsRoadImageBox, EatsRoadImage, LikeBox, LikeImageBox, LikeImage, MyBox, MyImageBox, MyImage, EatsRoadText, LikeText, MyText} from '../../styles/01-HwFaq.js';
// import {WifiOutlined} from "@ant-design/icons";
export default function Test() {
    // 자바스크립트
    
    
    return (
        <Wrapper>
            <Rectangle>
                <StatusBar>
                    <IconWrapper>
                        <Wifi></Wifi>
                        <Network></Network>
                        <Battery></Battery>
                        <TimeWrapper>
                            <Timer>12:30</Timer>
                        </TimeWrapper>
                    </IconWrapper>
                </StatusBar>
                <SearchBlock>
                    <Search>
                        <Battery2 src = "/ic-58-main-search-black.png" />
                    </Search>
                </SearchBlock>
                <TotalMySectionBox>
                    <MySectionBox>
                        <MySectionTextBox>
                            <MySectionText>마이</MySectionText>
                        </MySectionTextBox>
                    </MySectionBox>
                    <MySectionBox2>
                        <MySectionImageBox>
                            <MySectionImage src = "/img-60-profile-image.png"></MySectionImage>
                        </MySectionImageBox>
                        <MySectionNameBox>
                            <MySectionNameText>임정아</MySectionNameText>
                        </MySectionNameBox>
                    </MySectionBox2>
                </TotalMySectionBox>
                <MenuSectionBox>
                        <NoticeBox>
                            <NoticeText>공지사항</NoticeText>
                        </NoticeBox>
                        <EventBox>
                            <EventText>이벤트</EventText>
                        </EventBox> 
                        <FAQBox>
                            <FAQText>FAQ</FAQText>
                        </FAQBox>
                        <QandABox>
                            <QandAText>Q&A</QandAText>
                        </QandABox>
                </MenuSectionBox>
                <QandALineBox>
                    <QandALine></QandALine>
                </QandALineBox>
                <DashedLineBox>
                    <DashedLine></DashedLine>
                </DashedLineBox>
                <QuestionBigBox1>
                    <QuestionSmallBox>
                        <Question1>Q1</Question1>
                        <Question1Detail>리뷰 작성은 어떻게 하나요?</Question1Detail>
                    </QuestionSmallBox>
                    <ArrowBox>
                        <Arrow src = "/ic-70-arrow-right.png" />
                    </ArrowBox>
                </QuestionBigBox1>
                <QuestionBigBox2>
                    <QuestionSmallBox>
                        <Question1>Q2</Question1>
                        <Question1Detail>리뷰 수정/삭제는 어떻게 하나요?</Question1Detail>
                    </QuestionSmallBox>
                    <ArrowBox>
                        <Arrow src = "/ic-70-arrow-right.png" />
                    </ArrowBox>
                </QuestionBigBox2>
                <QuestionBigBox2>
                    <QuestionSmallBox>
                        <Question1>Q3</Question1>
                        <Question1Detail>아이디/비밀번호를 잊어버렸어요.</Question1Detail>
                    </QuestionSmallBox>
                    <ArrowBox>
                        <Arrow src = "/ic-70-arrow-right.png" />
                    </ArrowBox>
                </QuestionBigBox2>
                <QuestionBigBox2>
                    <QuestionSmallBox>
                        <Question1>Q4</Question1>
                        <Question1Detail>회원탈퇴를 하고싶어요.</Question1Detail>
                    </QuestionSmallBox>
                    <ArrowBox>
                        <Arrow src = "/ic-70-arrow-right.png" />
                    </ArrowBox>
                </QuestionBigBox2>
                <QuestionBigBox2>
                    <QuestionSmallBox>
                        <Question1>Q5</Question1>
                        <Question1Detail>출발지 설정은 어떻게 하나요?</Question1Detail>
                    </QuestionSmallBox>
                    <ArrowBox>
                        <Arrow src = "/ic-70-arrow-right.png" />
                    </ArrowBox>
                </QuestionBigBox2>
                <QuestionBigBox2>
                    <QuestionSmallBox>
                        <Question1>Q5</Question1>
                        <Question1Detail>출발지 설정은 어떻게 하나요?</Question1Detail>
                    </QuestionSmallBox>
                    <ArrowBox>
                        <Arrow src = "/ic-70-arrow-right.png" />
                    </ArrowBox>
                </QuestionBigBox2>
                <QuestionBigBox2>
                    <QuestionSmallBox>
                        <Question1>Q6</Question1>
                        <Question1Detail>비밀번호를 변경하고싶어요.</Question1Detail>
                    </QuestionSmallBox>
                    <ArrowBox>
                        <Arrow src = "/ic-70-arrow-right.png" />
                    </ArrowBox>
                </QuestionBigBox2>
                <LineRectangle></LineRectangle>
                <NavBarBox>
                    <HomeBarBox>
                        <HomeBarImageBox>
                            <HomeBarImage src = "/ic-58-main-home-unselected.png" />
                        </HomeBarImageBox>
                        <HomeBarText>홈</HomeBarText>
                    </HomeBarBox>
                    <EatsRoadBox>
                        <EatsRoadImageBox>
                            <EatsRoadImage src = "/ic-58-main-location-unselected.png" />
                        </EatsRoadImageBox>
                        <EatsRoadText>잇츠로드</EatsRoadText>
                    </EatsRoadBox>
                    <LikeBox>
                        <LikeImageBox>
                            <LikeImage src = "/ic-58-main-like-unselected.png" />
                        </LikeImageBox>
                        <LikeText>마이찜</LikeText>
                    </LikeBox>
                    <MyBox>
                        <MyImageBox>
                            <MyImage src = "/ic-58-main-my-selected.png" />
                        </MyImageBox>
                        <MyText>마이</MyText>
                    </MyBox>
                </NavBarBox>
            </Rectangle>
        </Wrapper>
    )
}
