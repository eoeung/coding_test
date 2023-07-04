/**
 * 제목: 가장 큰 수 찾기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=javascript
 */

function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}