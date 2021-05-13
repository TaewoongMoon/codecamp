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

// 코딩테스트 연습