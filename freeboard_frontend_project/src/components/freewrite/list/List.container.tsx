import ListPageUI from './List.presenter'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS } from './List.queries'
import { useRouter } from 'next/router'

const ListPage = () => {
  const router = useRouter()
  const boardId = router.query._id
  const [pencilColor, setPencilColor] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const onClickpage = (event: any) => {
    setCurrentPage(Number(event.target.id))
    setPageNumberCount((prev) => prev + 10)
  }
  const [pageNumberCount, setPageNumberCount] = useState(0)

  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: currentPage }
  })

  function onClickRegisterPage() {
    router.push(`/board/detailwrite/${boardId}`)
  }

  function onClickRegisterPageThroughText(event: any) {
    router.push(`/board/detailwrite/${String(event.target.id)}`)
    console.log(event.target.id)
  }

  function onMouseoverRegisterPage() {
    setPencilColor(true)
  }

  function onMouseoutRegisterPage() {
    setPencilColor(false)
  }

  console.log(data)

  return (
    <ListPageUI
      data={data}
      onClickPage={onClickpage}
      currentPage={currentPage}
      fetchMore={fetchMore}
      onClickRegisterPage={onClickRegisterPage}
      onMouseoverRegisterPage={onMouseoverRegisterPage}
      pencilColor={pencilColor}
      onMouseoutRegisterPage={onMouseoutRegisterPage}
      pageNumberCount={pageNumberCount}
      onClickRegisterPageThroughText={onClickRegisterPageThroughText}
    />
  )
}

export default ListPage
