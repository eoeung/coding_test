/**
 * 제목: 같은 숫자는 싫어
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
 */

function solution(arr){
    let temp = arr[0];
    let answer = [arr[0]];
    
    for(let i=1; i<arr.length; i++){
        if(temp !== arr[i]){
            answer.push(arr[i]);
        }
        
        temp = arr[i];
    }
    
    return answer;
}


/**
 * 다른 분의 풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
 * 마지막에 없는 index(초과하는 인덱스)를 비교 못할 것 같아서 안되는 줄 알았지만,
 * 초과하는 인덱스에 대해서는 filter()메소드가 비교하지 않고 배열의 길이만큼 돌다 끝남
 */