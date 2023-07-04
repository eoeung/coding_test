/**
 * 제목: 대문자와 소문자
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript
 */

function solution(my_string) {
    const Z = 'Z'.codePointAt();
    let answer = '';
    
    for(let str of my_string){
        str.codePointAt() > Z ? answer += str.toUpperCase() : answer += str.toLowerCase();
    }
    
    return answer;
}