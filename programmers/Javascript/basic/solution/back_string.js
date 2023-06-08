/**
 * 제목: 문자열의 뒤의 n글자
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181910?language=javascript
 */

function solution(my_string, n) {
    return my_string.slice(my_string.length-n);
}