import HeaderPart from '../header/Header.container'
import {
  ContentArticle,
  ContentSection,
  ImageSliderMidWrap,
  ImageSliderWrapper,
  SlickDraggableWrapper,
  SlickTrackSmallWrapperOne,
  SlickTrackSmallWrapperThree,
  SlickTrackSmallWrapperTwo,
  SlickTrackWrapper,
  SlickTrackWrapperOne,
  SlickTrackWrapperOneImage,
  SlickTrackWrapperThree,
  SlickTrackWrapperThreeImage,
  SlickTrackWrapperTwo,
  SlickTrackWrapperTwoImage,
  SliderSlickInitialized,
  SliderSlickNextButton,
  SliderSlickPrevButton
} from './Detail.styles'

const ListDetailUI = () => {
  return (
    <>
      <HeaderPart></HeaderPart>
      <ContentArticle>
        <ContentSection>
          <ImageSliderWrapper>
            <ImageSliderMidWrap>
              <SliderSlickInitialized>
                <SliderSlickPrevButton>Previous</SliderSlickPrevButton>
                <SlickDraggableWrapper>
                  <SlickTrackWrapper>
                    <SlickTrackWrapperOne>
                      <SlickTrackSmallWrapperOne>
                        <SlickTrackWrapperOneImage src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/39d17a39a32e5fbc02029764d72f8521eb70fbd6520e9f5e8222ca60b12d795a.webp?q=95&s=1440x1440&t=inside"></SlickTrackWrapperOneImage>
                      </SlickTrackSmallWrapperOne>
                    </SlickTrackWrapperOne>
                    <SlickTrackWrapperTwo>
                      <SlickTrackSmallWrapperTwo>
                        <SlickTrackWrapperTwoImage src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/011cdc00979818c09ca836eae754acff861183a345d793026442868a2590c599.webp?q=95&s=1440x1440&t=inside"></SlickTrackWrapperTwoImage>
                      </SlickTrackSmallWrapperTwo>
                    </SlickTrackWrapperTwo>
                    <SlickTrackWrapperThree>
                      <SlickTrackSmallWrapperThree>
                        <SlickTrackWrapperThreeImage src="https://dnvefa72aowie.cloudfront.net/origin/article/202106/499a698853ee2b6fd07311c8f4339eb09d2396e19aaf1392397007f22c4ee957.webp?q=95&s=1440x1440&t=inside"></SlickTrackWrapperThreeImage>
                      </SlickTrackSmallWrapperThree>
                    </SlickTrackWrapperThree>
                  </SlickTrackWrapper>
                </SlickDraggableWrapper>
                <SliderSlickNextButton></SliderSlickNextButton>
              </SliderSlickInitialized>
            </ImageSliderMidWrap>
          </ImageSliderWrapper>
        </ContentSection>
      </ContentArticle>
    </>
  )
}

export default ListDetailUI
