import styled from '@emotion/styled'
import { createContext, useState } from 'react'
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
export const LayOutContext = createContext({
  test: ''
})
export default function Layout({ children }: ILayoutProps) {
  const [test, setTest] = useState('')

  return (
    <>
      <LayOutContext.Provider value={{ test }}>
        <Header></Header>
        <Body>{children}</Body>
      </LayOutContext.Provider>
    </>
  )
}
