/**
 * 제목: 배열의 길이에 따라 다른 연산하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181854?language=javascript
 */

function solution(arr, n) {
    let idx = (arr.length % 2 == 0) ? 1 : 0;
    
    while(true){
        arr[idx] += n;
        idx+=2;
        
        if(idx > arr.length) break;
    }
    
    return arr;
}