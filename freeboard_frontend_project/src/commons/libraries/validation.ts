export const checkImage = (image: File) => {
  if (!image) {
    alert('이미지가 없습니다.확인해주세요')
    return false
  }
  if (image.size > 5 * 1024 * 1024) {
    alert('이미지 크기가 5MB를 초과하였습니다.')
    return false
  }

  if (!image.type.includes('png')) {
    alert('파일 종류가 PNG파일인지 확인해주세요')
    return false
  }

  return true
}
