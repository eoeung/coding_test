/**
 * 제목: 공백으로 구분하기 2
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181868?language=javascript
 */

function solution(my_string) {
    return my_string.replaceAll((/\s+/g), ' ').trim().split(' '); // \s : 공백
}