// // import axios from 'axios'
// import { useEffect, useRef, useState } from 'react'
// import BoardMain from '../../src/components/units/list/Board.List.container'

// export default function Openapi() {
//   const inputRef = useRef<HTMLInputElement>(null)
//   //   const [image, SetImage] = useState('')

//   useEffect(() => {
//     inputRef.current.focus()
//     // const getDogs = async () => {
//     //   const result = await axios.get('https://dog.ceo/api/breeds/image/random')
//     //   SetImage(result.data.message)
//     // }
//     // getDogs()
//   }, [])

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="이메일을 입력해 주세요."
//       ></input>
//       <button id={Board.number} onClick={onClickButton(Board.number)}>
//         로그인
//       </button>
//       {/* <img src={image} /> */}
//     </div>
//   )
// }
