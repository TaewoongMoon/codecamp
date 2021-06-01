import DaumPostcode from 'react-daum-postcode'
function PostcodePage() {
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

export default PostcodePage
