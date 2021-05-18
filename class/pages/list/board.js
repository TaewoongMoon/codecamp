import {useQuery, gql} from "@apollo/client";
import { SingleFieldSubscriptionsRule } from "graphql";
import {useRouter} from "next/router";
import {BoxWrapper, HeaderCheckBox, Wrapper, HeaderWrapper,HeaderNumber, HeaderTitle, HeaderDate, BodyWrapper, BodyCheckBox, BodyNumber, BodyTitle, BodyDate} from "../../styles/boardList"



export default function BoardPage(){
    
    const router = useRouter()

    const FETCH_BOARDS = gql`
        query fetchBoards{
            fetchBoards{
                number
                title
                createdAt
            }
        }
    `
    
    const {data} = useQuery(FETCH_BOARDS)
    

    const Test = data?.fetchBoards.map((data) => (
        <BodyWrapper key="">
            <BodyCheckBox></BodyCheckBox>
            <BodyNumber>{data?.number}</BodyNumber>
            <BodyTitle>{data?.title}</BodyTitle>
            <BodyDate>{String(new Date(data?.createdAt).getFullYear())}.{String(new Date(data?.createdAt).getMonth())}.{String(new Date(data?.createdAt).getDay())}</BodyDate>
        </BodyWrapper>
    ))

    
    return (
        <Wrapper>
            <BoxWrapper>
                <HeaderWrapper>
                    <HeaderCheckBox></HeaderCheckBox>
                    <HeaderNumber>번호</HeaderNumber>
                    <HeaderTitle>제목</HeaderTitle>
                    <HeaderDate>작성일</HeaderDate>
                </HeaderWrapper>
                {Test}
            </BoxWrapper>
        </Wrapper>
    )
}