/**
 * 제목: 두 정수 사이의 합
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
 */

function solution(a, b) {
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let answer = 0;
    
    for(let i=min; i <= max; i++){
        answer += i;
    }
    
    return answer;
}