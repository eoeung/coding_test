/**
 * 제목: 짝수는 싫어요
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120813?language=javascript
 */

function solution(n) {
    let answer = [];
    
    for(let i=1; i<=n; i++){
        if(i%2) answer.push(i);
    }
    
    return answer;
}