/**
 * 제목: 두 수의 연산값 비교하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181938?language=javascript
 */

function solution(a, b) {
    var answer = 0;
    
    let ab = Number(`${a}${b}`);
    let ab2 = 2*a*b; // 2*a*b
    
    return Math.max(ab, ab2);
}