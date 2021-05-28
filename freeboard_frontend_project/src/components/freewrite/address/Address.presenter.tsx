import DaumPostcode from 'react-daum-postcode'

export default function DaumPostCodeUI(props: any) {
  //   console.log(props.handleTest(), 'asdhasjdaskj')
  return (
    <DaumPostcode
      onComplete={(e) => {
        props.handleComplete(e)
        props.handleClose()
      }}
      animation={true}
      autoClose={true}
      style={{ width: '600px' }}
    />
  )
}
