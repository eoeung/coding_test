/**
 * 제목: l로 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181834?language=javascript
 */

function solution(myString) {
    const lowerL = 'l';
    let answer = '';
    
    for(let str of myString){
        if(lowerL.codePointAt() > str.codePointAt()) answer += lowerL;
        else answer += str;
    }
    
    return answer;
}