/**
 * 제목: 두 수의 나눗셈
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120806?language=javascript
 */

function solution(num1, num2) {
    return Math.trunc( num1/num2*1000 ); // 정수부분만 반환
}