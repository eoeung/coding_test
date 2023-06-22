/**
 * 제목: 양꼬치
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120830?language=javascript
 */

function solution(n, k) {
    return (12000 * n) + (2000 * k) - (2000 * Math.floor(n/10));
}