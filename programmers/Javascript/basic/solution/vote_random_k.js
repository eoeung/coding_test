/**
 * 제목: 무작위로 K개의 수 뽑기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181858?language=javascript
 */

function solution(arr, k) {
    let set = new Set(arr);
    let answer = Array.from(set).filter((_, idx) => idx < k);
    
    return answer.length === k ? answer : answer.concat(new Array(k-answer.length).fill(-1));
}