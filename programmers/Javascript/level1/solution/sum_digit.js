/**
 * 제목: 자릿수 더하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
 */

function solution(n){
    let answer = 0;
    String(n).split('').map(val => answer += Number(val));
    
    return answer;
};