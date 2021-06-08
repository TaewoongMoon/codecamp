import BodyPage from '../body/Body.container'
import CommentPage from '../comment/Comment.container'
import styled from '@emotion/styled'
export default function DetailBoardUI() {
  return (
    <TempWrapper>
      <BodyPage />
      <CommentPage />
    </TempWrapper>
  )
}

export const TempWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
`
