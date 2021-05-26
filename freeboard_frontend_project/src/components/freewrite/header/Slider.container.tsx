import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  SlickSlider,
  DogImage1,
  DogImage2,
  DogImage1Wrapper,
  DogImage2Wrapper
} from './Header.styles'
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
    lazyload: 100,
    arrows: true
  }
  const [image, setImage] = useState<string[]>([])

  useEffect(() => {
    const getDogs = async () => {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random')
      new Array(5)
        .fill(1)
        .forEach((data: any) => setImage([...image, result.data.message]))
    }
    getDogs()
  }, [])

  const testTemp = new Array(5).fill(1)
  console.log(testTemp)

  async function onClickSwipe1() {
    const result = await axios.get('https://dog.ceo/api/breeds/image/random')
    setImage(image.concat(result.data.message))
  }
  return (
    <SlickSlider {...settings}>
      <DogImage1Wrapper onClick={onClickSwipe1}>
        <DogImage1 src={image[0]} />
      </DogImage1Wrapper>
      <DogImage2Wrapper>
        <DogImage2 src={image[image.length - 1]} />
      </DogImage2Wrapper>
    </SlickSlider>
  )
}
