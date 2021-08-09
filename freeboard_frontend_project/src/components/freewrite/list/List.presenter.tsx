import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

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
  RegisterTextWrapper,
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
  BottomRegisterButtonMiddleRightWrapper,
  BestListWrapper,
  BestList,
  TotalWrapper,
  BestCards,
  CardBigWrapper,
  CardMiddleWrapper,
  BestTitleWrapper,
  BestRealTitle,
  BestTitleBlock1,
  LikeNameWrapper,
  LikeNameLeftWrapper,
  LikeNameRightWrapper,
  PersonImage,
  PersonName,
  DateWrapper,
  DateLeftWrapper,
  DateRightWrapper,
  SearchSecWrapper,
  SearchMiddleWrapper,
  SearchBoxWrapper,
  SearchImageWrapper,
  SearchImage,
  SearchInputBox,
  CalendarWrapper,
  SearchButton
} from './List.styles'

import { useState } from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
const useStyles = makeStyles({
  root: {
    width: 282,
    height: 257
  },
  media: {
    maxWidth: 282,
    height: 120
  }
})
const ListPageUI = (props: any) => {
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  console.log(props.countBestdata?.fetchBoardsOfTheBest)

  return (
    <>
      <TotalWrapper>
        <BestListWrapper>
          <BestList>베스트 게시글</BestList>
        </BestListWrapper>
        <CardBigWrapper>
          <CardMiddleWrapper>
            {props.countBestData?.fetchBoardsOfTheBest?.map(
              (data: any, index: any) => (
                <BestCards className={classes.root} key="">
                  <CardActionArea>
                    {typeof window !== 'undefined' && (
                      <CardMedia
                        className={classes.media}
                        image={props.imageUrl[index]}
                        title="Contemplative Reptile"
                      />
                    )}
                  </CardActionArea>
                  <BestTitleWrapper>
                    <BestTitleBlock1></BestTitleBlock1>
                    <BestRealTitle>{data.title}</BestRealTitle>
                  </BestTitleWrapper>
                  <LikeNameWrapper>
                    <LikeNameLeftWrapper>
                      <PersonImage src="/Person.png"></PersonImage>
                      <PersonName>{data.writer}</PersonName>
                    </LikeNameLeftWrapper>
                    <LikeNameRightWrapper src="/YellowLike.png"></LikeNameRightWrapper>
                  </LikeNameWrapper>
                  <DateWrapper>
                    <DateLeftWrapper>{`Date: ${String(
                      new Date(data.createdAt).getFullYear()
                    ).padStart(2, '0')}.${String(
                      new Date(data.createdAt).getMonth() + 1
                    ).padStart(2, '0')}.${String(
                      new Date(data.createdAt).getDate()
                    ).padStart(2, '0')}`}</DateLeftWrapper>
                    <DateRightWrapper>{data.likeCount}</DateRightWrapper>
                  </DateWrapper>
                </BestCards>
              )
            )}
          </CardMiddleWrapper>
        </CardBigWrapper>
        <SearchSecWrapper>
          <SearchMiddleWrapper>
            <SearchBoxWrapper>
              <SearchImageWrapper>
                <SearchImage src="/SearchImage.png"></SearchImage>
              </SearchImageWrapper>
              <SearchInputBox
                type="text"
                placeholder="제목을 검색해주세요"
                onChange={props.onChangeSearchBox}
              ></SearchInputBox>
            </SearchBoxWrapper>
            <CalendarWrapper>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid
                  container
                  justify="space-around"
                  style={{
                    height: '52px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <KeyboardDatePicker
                    style={{ height: '52px', margin: '10px' }}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </CalendarWrapper>
            <SearchButton onClick={props.onClickSearchButton}>
              검색하기
            </SearchButton>
          </SearchMiddleWrapper>
        </SearchSecWrapper>
        <Wrapper>
          <BoxWrapper>
            <HeaderWrapper>
              <HeaderNumber>번호</HeaderNumber>
              <HeaderTitle>제목</HeaderTitle>
              <HeaderWriter>작성자</HeaderWriter>
              <HeaderDate>날짜</HeaderDate>
            </HeaderWrapper>
            {props.data?.fetchBoards?.map((data: any, index: any) => (
              <BodyWrapper key={data?._id}>
                <BodyNumber>
                  <BodyNumberText
                    id={data?._id}
                    onClick={props.onClickRegisterPageThroughText}
                  >
                    {(props.currentPage - 1) * 10 +
                      props.pageNumberCount * 10 +
                      (index + 1)}
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
                  <BottomRegisterButtonLeftArrow
                    src="/LeftArrow.png"
                    onClick={props.onClickLeftArrowButton}
                  ></BottomRegisterButtonLeftArrow>
                  {new Array(
                    props.arrowClick < props.dataBundle
                      ? 10
                      : Math.ceil(props.countData?.fetchBoardsCount / 10) %
                          10 || 10
                  )
                    .fill(1)
                    .map((_, index) => (
                      <Page
                        key=""
                        id={String(index + 1)}
                        onClick={props.onClickPage}
                        isActive={props.currentPage === index + 1}
                      >
                        {index + 1 + props.arrowClick * 10}
                      </Page>
                    ))}
                  <BottomRegisterButtonRightArrow
                    src="/RightArrow.png"
                    onClick={props.onClickRightArrowButton}
                  ></BottomRegisterButtonRightArrow>
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
      </TotalWrapper>
    </>
  )
}

export default ListPageUI
