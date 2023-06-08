/**
 * 제목: 접두사인지 확인하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181906?language=javascript
 */

function solution(my_string, is_prefix) {
    return my_string.indexOf(is_prefix) === 0 ? 1 : 0;
}