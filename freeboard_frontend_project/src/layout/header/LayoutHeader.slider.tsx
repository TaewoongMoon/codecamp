import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SlickSlider, DogImage1, DogImage1Wrapper } from './LayoutHeader.styles'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import axios from 'axios'
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: 100,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true
  }
  // const [image, setImage] = useState<string[]>([])

  const image = [
    '/Carousel1.png',
    '/Carousel2.png',
    '/Carousel3.png',
    '/Carousel4.png'
  ]
  // useEffect(() => {
  //   // const getDogs = async () => {
  //   //   const images = await Promise.all(
  //   //     new Array(5).fill(1).map((data: any) => {
  //   //       return axios.get('https://dog.ceo/api/breeds/image/random')
  //   //     })
  //   //   ).then((res) => res.map((data) => data?.data?.message))
  //   const images = ['/']
  //     setImage(images)
  //   }
  //   getDogs()
  // }, [])
  return (
    <SlickSlider {...settings}>
      {image.map((data) => (
        <DogImage1Wrapper key={data}>
          <DogImage1 src={data} />
        </DogImage1Wrapper>
      ))}
    </SlickSlider>
  )
}
