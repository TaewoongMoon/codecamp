import DaumPostcode from 'react-daum-postcode'

export default function PostcodePage() {
  const handleComplete = (data) => {
    console.log(data)
  }

  return (
    <DaumPostcode
      onComplete={handleComplete}
      animation={true}
      autoClose={true}
    />
  )
}
