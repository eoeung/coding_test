/**
 * 제목: A로 B 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120886?language=javascript
 */

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}