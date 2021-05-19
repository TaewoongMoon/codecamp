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


// 코딩테스트 연습()// 


function solution(array, commands){
    var answer = [];

    answer = commands.map(a => {
        return array.slice(a[0]-1, a[1]).sort((b,c) => b-c)[a[2]-1] // slice의 기능 
    })

    return answer;
}

//코딩테스트연습(나누어 떨어지는 숫자배열)

function solution(arr, divisor) {
    var answer = [];
    


    answer = arr.filter((data) => !(data % divisor === 0)).sort(function(a,b) {return a-b})

    if(answer.length === 0){
        return [-1]
    }
               
    return answer;
}

//코딩테스트 연습(약수의 합)

function solution(n) {
    var answer = 0;
    for(let i = 1 ; i < n + 1; i++){
        if(n % i === 0){
            answer = answer + i
        }
    }
    return answer;
}

//코딩테스트 연습(두 정수 사이의 합)
function solution(a, b) {
    const c = a
    const d = b
    var answer = 0;
    if(a > b){
        a = d
        b = c
    }
    for(let i = a; i < b + 1 ; i++){
        answer = answer + i 
    }
    return answer;
}

//코딩테스트 연습(서울에서 김서방 찾기)
function solution(seoul) {
    const SeoulNumber = seoul.filter((data) => data === "Kim")
    var answer = `김서방은 ${SeoulNumber.length}에 있다`;
    return answer;
}