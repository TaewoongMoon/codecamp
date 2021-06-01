import styled from '@emotion/styled'
import Header from './header/LayoutHeader.container'
interface ILayoutProps {
  children: any
}

const Body = styled.div`
  margin-right: 360px;
  margin-left: 360px;
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
