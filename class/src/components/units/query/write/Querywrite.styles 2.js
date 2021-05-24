import styled from '@emotion/styled'
import { printIntrospectionSchema } from 'graphql'
import ProfilePage from '../../../../pages/query'

export const Name = styled.div`
    font-size: 16px;
    color: aqua;
    font-style:bold;
`

export const Button = styled.button`
    background-color:${(props) => props.disabled ? "blue" : "red" }  
`