/**
 * 제목: 중복된 문자 제거
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript
 */

function solution(my_string) {
    let answer = '';
    
    for(let ch of my_string){
        if(!answer.includes(ch)) answer += ch;
    }
    
    return answer;
}