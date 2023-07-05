/**
 * 제목: n의 배수 고르기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript
 */

function solution(n, numlist) {
    return numlist.filter(num => num%n==0);
}