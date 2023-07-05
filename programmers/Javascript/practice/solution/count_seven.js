/**
 * 제목: 7의 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120912?language=javascript
 */

function solution(array) {
    let reg = /7/g;
    let sevenArr = array.join('').match(reg);
    return sevenArr ? sevenArr.length : 0;
}