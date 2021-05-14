// 코딩테스트 연습 (같은 숫자는 싫어)
function solution(arr)
{
    let answer = [arr[0]];
    
    for(let i = 1; i < arr.length; i++){
        if(answer[answer.length - 1] != arr[i]){
            answer.push(arr[i]);
        }
    }
    return answer;
}

// 코딩테스트 연습 (문자열 내 p와 y 갯수)
function solution(s){
    s.toLowerCase();
    let p_array = [];
    let y_array = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === "p"){
            p_array.push(s[i])
        }else if(s[i] === "y"){
            y_array.push(s[i])
        }
    }
    if(p_array.length === 0 && y_array.length === 0){
        return true;
    }else if(p_array.length === y_array.length){
        return true;
    }else{
        return false;
    }
}