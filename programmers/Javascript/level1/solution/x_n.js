/**
 * 제목: x만큼 간격이 있는 n개의 숫자
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
 */

function solution(x, n) {
    let idx = 1;
    let answer = [x];
    
    while(idx < n){
        answer.push(answer[answer.length-1]+x);
        idx++;
    }
    
    return answer;
}