/**
 * 제목: 개미 군단
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120837?language=javascript
 */

function solution(hp) {
    return Math.trunc(hp/5) + Math.trunc((hp%5)/3) + Math.trunc(((hp%5)%3)/1);
}