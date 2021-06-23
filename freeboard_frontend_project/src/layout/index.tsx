import styled from '@emotion/styled'
import { useRouter } from 'next/router'
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
  const isNavigation = [
    '/clonecoding/login',
    '/clonecoding/signup',
    '/clonecoding/main',
    '/mypage',
    '/clonecoding/list',
    '/clonecoding/list/detail'
  ]
  const router = useRouter()
  const result = isNavigation.includes(router.pathname)
  return (
    <>
      {!result ? (
        <>
          <Header></Header>
          <Body>{children}</Body>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  )
}
