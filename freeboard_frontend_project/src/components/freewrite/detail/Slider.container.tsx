import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick'
import {
  SlickSlider,
  DogImage1,
  DogImage1Wrapper,
  DogImage2Wrapper
} from './Detail.styles'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import axios from 'axios'
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: 100
  }
  const [image, setImage] = useState('')
  useEffect(() => {
    const getDogs = async () => {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random')
      setImage(result.data.message)
    }
    getDogs()
  }, [])
  return (
    <SlickSlider {...settings}>
      <DogImage1Wrapper>
        <DogImage1 src={image} />
      </DogImage1Wrapper>
      <DogImage2Wrapper>
        <DogImage1 src={image} />
      </DogImage2Wrapper>
    </SlickSlider>
  )
}
