// // Algorithm 고장난 시계문제
// function startClock(){
//     setInterval(function(){
//         const Now = new Date()
//         const Year = String(Now.getFullYear())
//         const Month = String(Now.getMonth()).padStart(2, '0')
//         const Day = String(Now.getDay()).padStart(2, '0')
//         const Hours = String(Now.getHours()).padStart(2, '0')
//         const Minutes = String(Now.getMinutes()).padStart(2, '0')
//         const Seconds = String(Now.getSeconds()).padStart(2, '0')

//         console.log(`${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`)
//     },1000)
// }

// startClock()

// // 2.인증시간 만료

// function phoneExpire(seconds) {
// 	for (let i = seconds; i >= 1; i--) {
// 		console.log(i);
// 		if (i === 1) {
// 			return "인증시간이 만료되었습니다.";
// 		}
// 	}
// }

// 3.셧다운
// function autoClose(){
//     let time = 11;
//     const TimeOut = setInterval(function(){
//         time = time -1
//         if(time === 10){
//             console.log("10초남았습니다.")
//         }
//         if(time ===5){
//             console.log('5초 남았습니다.')
//         }else if(time <= 3 && time > 0){
//             console.log(`${time}초 남았습니다.`)
//         }else if(time < 0){
//             clearInterval(TimeOut)
//             console.log("컴퓨터를 종료합니다.")
//         }
//     },1000)
// }

// autoClose()