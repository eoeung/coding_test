/**
 * 제목: 문자열 바꿔서 찾기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181864?language=javascript
 */

function solution(myString, pat) {
    let str = myString.split('').reduce((acc, val) => {
        if(val === 'A') return acc += 'B';
        else return acc += 'A';
    }, '');
    
    return str.includes(pat) ? 1 : 0;
}