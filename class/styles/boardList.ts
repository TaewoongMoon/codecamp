import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
`


export const BoxWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
`

export const HeaderWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #D3D3D3;
    border-top: 1px solid black;
    padding-left: 10px;
`

export const HeaderCheckBox = styled.input`
    max-width: 15px;
    width: 100%;
    height: 15px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
`

export const HeaderNumber = styled.div`
    max-width: 100px;
    width: 100%;
    font-size: 18px;
    font-style: bold;
    color: #000000;
    text-align: center;
`
export const HeaderTitle = styled.div`
    max-width: 1000px;
    width: 100%;
    font-size: 18px;
    font-style: bold;
    color: #000000;
    text-align: center;
`
export const HeaderDate = styled.div`
    max-width: 170px;
    width: 100%;
    font-size: 18px;
    font-style: bold;
    color: #000000;
`



export const BodyWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid black;
    padding-left: 10px;
`

export const BodyCheckBox = styled.input`
    max-width: 15px;
    width: 100%;
    height: 15px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
`

export const BodyNumber = styled.div`
    max-width: 100px;
    width: 100%;
    font-size: 18px;
    font-style: bold;
    color: #000000;
    text-align: center;
`
export const BodyTitle = styled.div`
    max-width: 1000px;
    width: 100%;
    font-size: 18px;
    font-style: bold;
    color: #000000;
    text-align: left;
`
export const BodyDate = styled.div`
    max-width: 170px;
    width: 100%;
    font-size: 18px;
    font-style: bold;
    color: #000000;
`

export const HrLine = styled.div`
    border-top: 1px solid black;
    max-width: 1200px;
`


export const SelectEraseButtonWrapper = styled.div`
    padding-top: 30px;
    max-width: 250px;
    width: 100%;
    height: 100px;
    display: flex;
`

export const SelectEraseButton = styled.button`
    max-width: 250px;
    width: 100%;
    height: 40px;
    background-color: red;
    text-align:center;
    color: white;
    font-style: bold;
    border-collapse: collapse;
    border: 0px;
    font-size: 20px;
    border-radius: 125px;
    cursor: pointer;
`