/**
 * 제목: 배열의 유사도
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120903?language=javascript
 */

function solution(s1, s2) {
    return s2.filter(val => s1.includes(val)).length;
}