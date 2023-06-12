/**
 * 제목: 접미사 배열
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181909?language=javascript
 */

function solution(my_string) {
    let answer = [];
    
    for(let i=0; i<my_string.length; i++){
        answer.push(my_string.slice(i, my_string.length));
    }
    
    return answer.sort();
}