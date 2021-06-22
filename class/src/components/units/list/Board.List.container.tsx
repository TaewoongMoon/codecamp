import { ChangeEvent, MouseEvent, useState } from 'react'
import BoardUI from './Board.List.presenter'
import { gql, useQuery } from '@apollo/client'
// import { BoardReturn } from '../../../commons/types/generated/types'

export default function BoardMain() {
  const [checkedAll, setCheckedAll] = useState(true)

  const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
      fetchBoards(page: $page) {
        number
        title
        createdAt
        writer
      }
    }
  `

  interface INewCheck {
    [key: number]: boolean
  }
  interface IValues {
    [key: number]: boolean
  }
  function onClickHeaderBox(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.checked)
    if (event.target.checked === false) {
      let newCheck = {}
      for (let i = 0; i < data?.fetchBoards.length; i++) {
        newCheck = { ...newCheck, [data.fetchBoards[i].number]: false }
      }
      setCheckedAll(false)
      setChecked(newCheck)
    } else if (event.target.checked === true) {
      const newCheck: INewCheck = {}
      // data?.fetchBoards.forEach((data: BoardReturn) => {
      //   newCheck[data.number as number] = true
      // })
      setCheckedAll(true)
      setChecked(newCheck)
    }
  }

  const [currentPage, setCurrentPage] = useState(1)
  const onClickpage = (event: MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setCurrentPage(Number((event.target as HTMLInputElement).id))
  }

  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: currentPage }
  })

  let newCheck = {}
  for (let i = 0; i < data?.fetchBoards.length; i++) {
    newCheck = { ...newCheck, [data.fetchBoards[i].number]: false }
  }
  const [checked, setChecked] = useState(newCheck)

  function onClickCheckBox(event: ChangeEvent<HTMLInputElement>) {
    const values: IValues = {
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

    // 이런방법으로도 가능하다.

    // for(let i = 0; i<data?.data.fetchBoards.length; i++){
    // values.push(data[data?.fetchBoards[i].number])
    // }

    if (checkboxResult.length === data?.fetchBoards.length) {
      setCheckedAll(true)
    } else if (checkboxResult.length !== data?.fetchBoards.length) {
      setCheckedAll(false)
    }
  }

  return (
    <BoardUI
      data={data}
      onClickCheckBox={onClickCheckBox}
      checkedAll={checkedAll}
      onClickHeaderBox={onClickHeaderBox}
      checked={checked}
      onClickPage={onClickpage}
      currentPage={currentPage}
      fetchMore={fetchMore}
    />
  )
}
