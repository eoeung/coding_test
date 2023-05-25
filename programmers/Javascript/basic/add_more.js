/**
 * 제목: 더 크게 합치기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181939?language=javascript
 */

function solution(a, b) {
    let ab = Number(""+a+b);
    let ba = Number(""+b+a);
    return (ab > ba) ? ab : ba;
}