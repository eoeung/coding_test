/**
 * 제목: 5명씩
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181886?language=javascript
 */

function solution(names) {
    let answer = [];
    
    for(let i=0; i<names.length; i+=5){
        answer.push(names[i]);
    }
    
    return answer;
}