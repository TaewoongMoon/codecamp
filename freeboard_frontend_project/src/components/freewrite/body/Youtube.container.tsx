import ReactPlayer from 'react-player'

interface Iprops {
  data: any
}
export default function YoutubePage(props: Iprops) {
  console.log(props?.data?.fetchBoard.youtubeUrl)
  return (
    <ReactPlayer
      url={props?.data?.fetchBoard.youtubeUrl}
      playing={true}
      controls={true}
      width={486}
      height={240}
    />
  )
}
