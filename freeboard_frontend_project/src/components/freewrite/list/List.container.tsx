import ListPageUI from './List.presenter'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  FETCH_BOARDS,
  FETCH_BOARDSCOUNT,
  FETCH_BOARDSOFTHEBEST
} from './List.queries'
import { useRouter } from 'next/router'

const ListPage = () => {
  const router = useRouter()
  const [pencilColor, setPencilColor] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [arrowClick, setArrowClick] = useState(0)
  const [pageNumberCount, setPageNumberCount] = useState(0)
  const [search, setSearch] = useState(null)
  const imageUrl = [
    '/BestImage(1).png',
    '/BestImage(2).png',
    '/BestImage(3).png',
    '/BestImage(4).png'
  ]

  const {
    data,
    fetchMore,
    refetch: pageRefetch
  } = useQuery(FETCH_BOARDS, {
    variables: { page: 1, search: null }
  })

  const { data: countData, refetch: countRefetch } = useQuery(FETCH_BOARDSCOUNT)

  const { data: countBestData } = useQuery(FETCH_BOARDSOFTHEBEST)

  console.log(countData)
  const dataBundle = Math.floor(countData?.fetchBoardsCount / 100) // 최대 클릭할 수 있는 숫자

  function onClickRegisterPage() {
    router.push('/board/write')
  }

  function onClickSearchButton() {
    pageRefetch({
      search: search,
      page: currentPage + pageNumberCount
    })
    countRefetch({
      search: search
    })
  }

  function onChangeSearchBox(event: any) {
    setSearch(event.target.value)
  }

  function onClickRegisterPageThroughText(event: any) {
    router.push(`/board/detailwrite/${String(event.target.id)}`)
  }
  const onClickpage = (event: any) => {
    const temp = Number(event.target.id)
    pageRefetch({
      page: temp + pageNumberCount
    })
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
      countBestData={countBestData}
      imageUrl={imageUrl}
      onChangeSearchBox={onChangeSearchBox}
      onClickSearchButton={onClickSearchButton}
    />
  )
}

export default ListPage
