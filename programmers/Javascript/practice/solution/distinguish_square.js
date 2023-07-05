/**
 * 제목: 제곱수 판별하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120909?language=javascript
 */

function solution(n) {
    return n % Math.sqrt(n) == 0 ? 1 : 2;
}


/**
 * 다른 분의 풀이
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
 * Number.isInteger(value)는 인수가 정수인지 아닌지 판별한다.
 */