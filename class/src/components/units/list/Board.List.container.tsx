import { useState } from 'react'
import BoardUI from './Board.List.presenter'
import { gql, useQuery } from '@apollo/client'

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

  // setChecked 자체를 false로 바꾸면 어떤 방법으로 작동이 되는가?
  // useState의 기능은 단순 데이터 저장용도 및 뿌려주기 역할인가?

  function onClickHeaderBox(event) {
    console.log(event.target.checked)
    if (event.target.checked === false) {
      let newCheck = {}
      for (let i = 0; i < data?.fetchBoards.length; i++) {
        newCheck = { ...newCheck, [data.fetchBoards[i].number]: false }
      }
      setCheckedAll(false)
      setChecked(newCheck)
    } else if (event.target.checked === true) {
      const newCheck = {}
      data?.fetchBoards.forEach((data) => {
        newCheck[data.number] = true
      })
      setCheckedAll(true)
      setChecked(newCheck)
    }
  }

  const [currentPage, setCurrentPage] = useState(1)
  const onClickpage = (event) => {
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

  function onClickCheckBox(event) {
    const values = {
      ...checked,
      [event.target.id]: event.target.checked
    }

    setChecked(values)

    const resultMap = Object.keys(values).map((props) => {
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
