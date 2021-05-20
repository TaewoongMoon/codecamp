import styled from '@emotion/styled'

export const Name = styled.div`
  font-size: 16px;
  color: aqua;
  font-style: bold;
`

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? 'blue' : 'red')};
`
