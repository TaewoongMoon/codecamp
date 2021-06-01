import ReactPlayer from 'react-player'

interface Iprops {
  data: any
}
export default function YoutubePage(props: Iprops) {
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
