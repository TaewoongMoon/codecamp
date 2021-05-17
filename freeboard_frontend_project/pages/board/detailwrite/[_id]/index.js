
import DetailBoardContainer from "../../../../src/components/freewrite/detail/Detail.container";
=======
import { useQuery, gql } from "@apollo/client"
import {useRouter} from "next/router"
import {CodeCampWrapper, Header, LoginRegisterWrapper, LogoWrapper,CodeCampImage, LoginButton, RegisterButton, CarouselWrapper, MenuWrapper, MainBodyWrapper, MiniMenuWrapper2, FreeWriteMenuText, FreeWriteUsedMarketText, FreeWriteWhiteBar, FreeWriteMyPageText, MainBodyBox, MainBoxWrapper, ProfileLefterWrapper, ProfileImageBox, NameDateWrapper, NameText, DateText, ProfileHeaderBox, ProfileHeaderWrapper, AddressEmoticonWrapper, AdressImageBox, EmoticonBox, AddressEmoticon, AddressImage, AddressImageBox, ClipEmoticon, EmoticonBox2, AddressTextBox, AddressText1Box, AddressText1, AddressText2Box, AddressText2, HrLine, TitleWrapper, TitleText, RemainderWrapper, TitleTextWrapper, ImageWrapper, Image1, TitleTotalWrapper, ImageTotalWrapper, MainTextTotalWrapper, MainTextWrapper, MainText, VideoTotalWrapper, VideoWrapper, LikeDislikeTotalWrapper, LikeDislikeWrapper, DislikeWrapper, DislikeEmoticon, DislikeNumber, LikeWrapper,LikeEmoticon, LikeNumber} from "../../../../styles/Freewrite"

export default function freewriteBoard(){
    
    const router = useRouter()

    console.log(router.query)

    const FETCH_BOARD = gql`
        query fetchBoard($_id: ID!){
            fetchBoard(boardId: $_id){
                writer
                title
                contents
                createdAt
            }
        }
    `
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            _id: router.query._id
        }
    })

    console.log('data', data)

export default function freewriteBoard(){
    return<DetailBoardContainer />    
}