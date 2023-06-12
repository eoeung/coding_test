/**
 * 제목: 문자열 뒤집기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181905?language=javascript
 */

function solution(my_string, s, e) {
    let reverseStr = my_string.slice(s, e+1).split('').reverse().join('');
    return my_string.replace(my_string.slice(s, e+1), reverseStr);
}