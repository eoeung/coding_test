/**
 * 제목: 자릿수 더하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript
 */

function solution(n) {
    return n.toString().split('').reduce((acc, num) => acc += parseInt(num), 0);
}