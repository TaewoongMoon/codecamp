import ListPageUI from './List.presenter'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS, FETCH_BOARDSCOUNT } from './List.queries'
import { useRouter } from 'next/router'

const ListPage = () => {
  const router = useRouter()
  const boardId = router.query._id
  const [pencilColor, setPencilColor] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [arrowClick, setArrowClick] = useState(0)
  const [pageNumberCount, setPageNumberCount] = useState(0)

  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: currentPage + pageNumberCount }
  })

  const { data: countData } = useQuery(FETCH_BOARDSCOUNT)

  console.log(countData)
  const dataBundle = Math.floor(countData?.fetchBoardsCount / 100)

  function onClickRegisterPage() {
    router.push(`/board/detailwrite/${boardId}`)
  }

  function onClickRegisterPageThroughText(event: any) {
    router.push(`/board/detailwrite/${String(event.target.id)}`)
    console.log(event.target.id)
  }
  const onClickpage = (event: any) => {
    setCurrentPage(Number(event.target.id))
  }

  const onClickRightArrowButton = () => {
    if (arrowClick === dataBundle) return
    setArrowClick((prev) => prev + 1)
    setPageNumberCount((prev) => prev + 10)
  }

  const onClickLeftArrowButton = () => {
    if (arrowClick === 0) return
    setArrowClick((prev) => prev - 1)
    setPageNumberCount((prev) => prev - 10)
  }

  function onMouseoverRegisterPage() {
    setPencilColor(true)
  }

  function onMouseoutRegisterPage() {
    setPencilColor(false)
  }

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
      onClickRightArrowButton={onClickRightArrowButton}
      arrowClick={arrowClick}
      onClickLeftArrowButton={onClickLeftArrowButton}
      dataBundle={dataBundle}
      countData={countData}
    />
  )
}

export default ListPage
