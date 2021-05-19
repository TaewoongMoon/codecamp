import {useQuery, gql} from "@apollo/client";
import {useState} from "react";
import { SingleFieldSubscriptionsRule } from "graphql";
import {useRouter} from "next/router";
import {BoxWrapper, HeaderCheckBox, Wrapper, HeaderWrapper,HeaderNumber, HeaderTitle, HeaderDate, BodyWrapper, BodyCheckBox, BodyNumber, BodyTitle, BodyDate, HrLine, SelectEraseButtonWrapper, SelectEraseButton} from "../../styles/boardList"
import BoardMain from "../../src/components/list/Board.List.container"


export default function BoardPage(){
   

    return(<BoardMain />)
}
    // const [