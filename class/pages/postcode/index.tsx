import DaumPostcode from 'react-daum-postcode'
function PostcodePage() {
  const handleComplete = (data: any) => {
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

export default PostcodePage
