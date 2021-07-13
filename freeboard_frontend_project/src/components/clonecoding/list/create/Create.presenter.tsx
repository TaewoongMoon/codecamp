import withAuth from '../../../../commons/hocs/withAuth'
import HeaderPart from '../header/Header.container'
import {
  CreateItemNameInputWrapper,
  CreateItemNameWrapper,
  CreateRegisterWrapper,
  CreateWrapper,
  CreateLineSummaryNameWrapper,
  CreateLineSummaryNameInputWrapper
} from './Create.styles'

const CreateUI = () => {
  return (
    <>
      <HeaderPart></HeaderPart>
      <CreateWrapper>
        <CreateRegisterWrapper>상품 등록하기</CreateRegisterWrapper>
        <CreateItemNameWrapper>상품명</CreateItemNameWrapper>
        <CreateItemNameInputWrapper placeholder="상품명을 작성해주세요."></CreateItemNameInputWrapper>
        <CreateLineSummaryNameWrapper>한줄요약</CreateLineSummaryNameWrapper>
        <CreateLineSummaryNameInputWrapper placeholder="상품명을 작성해주세요."></CreateLineSummaryNameInputWrapper>
      </CreateWrapper>
    </>
  )
}

export default withAuth(CreateUI)
