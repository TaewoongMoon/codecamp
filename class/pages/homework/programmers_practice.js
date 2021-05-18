// // 코딩테스트 연습 (같은 숫자는 싫어)
// function solution(arr)
// {
//     let answer = [arr[0]];
    
//     for(let i = 1; i < arr.length; i++){
//         if(answer[answer.length - 1] != arr[i]){
//             answer.push(arr[i]);
//         }
//     }
//     return answer;
// }

// // 코딩테스트 연습 (문자열 내 p와 y 갯수)
// function solution(s){
//     s.toLowerCase();
//     let p_array = [];
//     let y_array = [];
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === "p"){
//             p_array.push(s[i])
//         }else if(s[i] === "y"){
//             y_array.push(s[i])
//         }
//     }
//     if(p_array.length === 0 && y_array.length === 0){
//         return true;
//     }else if(p_array.length === y_array.length){
//         return true;
//     }else{
//         return false;
//     }
// }

// //코딩테스트 연습 (짝수와 홀수)
// function solution(num) {
//     if(num % 2 == 0){
//         return "Even"
//     }else if(num % 2 == 1){
//         return "Odd"
//     }
// }

// //코딩 테스트 연습(평균 구하기)
// function solution(arr) {
//     var answer = 0;
//     for(let i =0 ; i < arr.length; i++){
//         answer = answer + arr[i]
//     }
//     return answer/ arr.length
// }

//코딩 테스트 연습(수박수박수박수박수)

function solution(n) {
    return ("수박").repeat(n / 2) + (n % 2 === 1 ? "수" : "")
}


// 코딩테스트 연습(가운데 글자 가져오기)
function solution(s) {
    if(s.length % 2 == 0 ){
        let a = s.length / 2
        let b = (s.length /2)  -1
        return s[b] + s[a]
    }else if(s.length % 2 ==1){
        let c = parseInt(s.length / 2)
        return s[c]
    }
}


// 코딩테스트 연습()