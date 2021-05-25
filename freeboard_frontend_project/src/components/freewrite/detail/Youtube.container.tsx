import ReactPlayer from 'react-player'

export default function YoutubePage() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=kZC12U6EhTc&t=115s"
      playing={true}
      controls={true}
      width={486}
      height={240}
    />
  )
}
