/**
 * 제목: 짝수의 합
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120831?language=javascript
 */

function solution(n) {
    let answer = 0;
    
    for(let i=2; i<=n; i+=2){
        answer += i;
    }
    
    return answer;
}