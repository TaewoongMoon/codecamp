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


//4번 내장객체 -날짜

// function RealDate(){
//     const Now = new Date();
//     const Year = Now.getFullYear();
//     const Month = Now.getMonth();
//     const Now_Date = Now.getDate();

//     console.log(`${Year}-${Month}-${Now_Date}`);
// }

// RealDate()


//5번 내장객체 


// function RealHour(){
//     const Now = new Date();
//     const Hours = Now.getHours();
//     const Minutes = Now.getMinutes();
//     const Seconds = Now.getSeconds();

//     console.log(`${Hours}-${Minutes}-${Seconds}`);
// }

// RealHour()

//6번 내장객체
// function TodayTime(){
//     const now = new Date();
//     const past = new Date(2021, 3, 1);
    
//     const Time  = Math.floor((now.getTime() - past.getTime()) / 1000 /60)
//     const Day = Math.floor(Time / 60 /24);

//     console.log(`${Day}일전`)

// }
// TodayTime()

//7번 내장객체
// function TestCode(){

// }

//8번 조건문
// const email_01 = "chulsoo1234"
// const email_02 = "chulsoo1234@com"
// const email_03 = "chulsoo@naver.com"
// const email_04 = "chulsoo.good@"

// function validation(email){
//     if(!email.includes('@') && !email.includes('.')){
//         console.log("올바른 이메일이 아닙니다.")
//     }else{
//         console.log("올바른 이메일입니다.")
//     }
// }
const category = [
	"게임", "스포츠", "사진", "자동차", "취미", "국내여행", "세계여행",
	"맛집", "IT컴퓨터", "사회정치", "건강의학", "비즈니스경제",
	"어학/외국어", "교육", "영화"
]
function printCategory(category){
    let array_ = [];
    for(let i = 0 ; i < category.length -12 ; i++){
        array_.push(category[i])
    }
    console.log(array_.join(' '))

    array_ = [];
    for(let i = 3 ; i < category.length -9 ; i++){
        array_.push(category[i])
    }
    console.log(array_.join(' '))
    
}

printCategory(category)