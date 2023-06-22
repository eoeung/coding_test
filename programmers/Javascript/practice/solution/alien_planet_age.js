/**
 * 제목: 외계행성의 나이
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120834?language=javascript
 */

const ageObj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    '4': 'e',
    '5': 'f',
    '6': 'g',
    '7': 'h',
    '8': 'i',
    '9': 'j'
};

function solution(age) {
    let answer = '';
    
    for(let str of String(age)){
        answer += ageObj[str];
    }
    
    return answer;
}