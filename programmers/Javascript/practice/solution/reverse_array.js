/**
 * 제목: 배열 뒤집기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120821?language=javascript
 */

function solution(num_list) {
    let answer = [];
    
    for(let i=num_list.length-1; i>=0; i--){
        answer.push(num_list[i]);
    }
    
    return answer;
}