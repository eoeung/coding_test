/**
 * 제목: 나누어 떨어지는 숫자 배열
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
 */

function solution(arr, divisor) {
    let answer = arr.filter(val => val % divisor === 0);
    return answer.length > 0 ? answer.sort((a,b) => a-b) : [-1];
}