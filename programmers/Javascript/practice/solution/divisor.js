/**
 * 제목: 약수 구하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120897?language=javascript
 */

function solution(n) {
    let answer = [n];
    
    for(let i=1; i<=Math.trunc(n/2); i++){
        if(n%i == 0) answer.push(i);
    }
    
    return answer.sort((a,b) => a-b);
}