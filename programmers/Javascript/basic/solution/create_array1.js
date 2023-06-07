/**
 * 제목: 배열 만들기 1
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181901?language=javascript
 */

function solution(n, k) {
    let answer = [];
    for(let i=k; i<=n; i+=k){
        answer.push(i);
    }
    
    return answer;
}