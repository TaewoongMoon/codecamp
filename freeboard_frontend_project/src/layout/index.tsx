import styled from '@emotion/styled'
import Header from './header/LayoutHeader.container'
interface ILayoutProps {
  children: any
}

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header></Header>
      <Body>{children}</Body>
    </>
  )
}
