/**
 * 제목: 배열 만들기 3
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181895?language=javascript
 */

function solution(arr, intervals) {
    let answer = [];
    
    for(let i=0; i<intervals.length; i++){
        answer = answer.concat(interval_val(arr, intervals[i]));
    }
    
    return answer;
}

function interval_val(arr, interval){
    let tempArr = [];
    
    for(let i=interval.at(0); i<=interval.at(-1); i++){
        tempArr.push(arr[i]);
    }
    
    return tempArr;
}