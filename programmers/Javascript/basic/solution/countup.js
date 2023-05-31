/**
 * 제목: 카운트 업
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181920?language=javascript
 */

function solution(start, end) {
    let answer = [];
    
    for(let i=start; i<end+1; i++){
        answer.push(i);
    }
    
    return answer;
}