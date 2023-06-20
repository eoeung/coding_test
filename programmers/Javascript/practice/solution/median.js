/**
 * 제목: 중앙값 구하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120811?language=javascript
 */

function solution(array) {
    let arr = array.sort((a,b) => a-b);
    return arr[Math.trunc(arr.length/2)];
}