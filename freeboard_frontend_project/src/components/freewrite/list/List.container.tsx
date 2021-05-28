import ListPageUI from './List.presenter'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS } from './List.queries'
import { useRouter } from 'next/router'

const ListPage = () => {
  const router = useRouter()
  const boardId = router.query._id
  const [checkedAll, setCheckedAll] = useState(true)
  const [pencilColor, setPencilColor] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const onClickpage = (event: any) => {
    setCurrentPage(Number(event.target.id))
  }

  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: currentPage }
  })

  let newCheck = {}
  for (let i = 0; i < data?.fetchBoards.length; i++) {
    newCheck = { ...newCheck, [data.fetchBoards[i].number]: false }
  }
  const [checked, setChecked] = useState(newCheck)

  function onClickRegisterPage() {
    router.push(`/board/detailwrite/${boardId}`)
  }

  function onMouseoverRegisterPage() {
    setPencilColor(true)
  }

  function onMouseoutRegisterPage() {
    setPencilColor(false)
  }
  console.log(pencilColor)

  function onClickCheckBox(event: any) {
    const values = {
      ...checked,
      [event.target.id]: event.target.checked
    }

    setChecked(values)

    const resultMap = Object.keys(values).map((props: any) => {
      return [String(props), values[props]]
    })

    console.log(resultMap)
    const checkboxResult = []

    for (let i = 0; i < resultMap.length; i++) {
      if (resultMap[i][1] === true) {
        checkboxResult.push(resultMap[i][1])
      }
    }

    if (checkboxResult.length === data?.fetchBoards.length) {
      setCheckedAll(true)
    } else if (checkboxResult.length !== data?.fetchBoards.length) {
      setCheckedAll(false)
    }
  }
  return (
    <ListPageUI
      data={data}
      onClickCheckBox={onClickCheckBox}
      checkedAll={checkedAll}
      checked={checked}
      onClickPage={onClickpage}
      currentPage={currentPage}
      fetchMore={fetchMore}
      onClickRegisterPage={onClickRegisterPage}
      onMouseoverRegisterPage={onMouseoverRegisterPage}
      pencilColor={pencilColor}
      onMouseoutRegisterPage={onMouseoutRegisterPage}
    />
  )
}

export default ListPage
