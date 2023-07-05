/**
 * 제목: 문자열 정렬하기 (2)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120911?language=javascript
 */

function solution(my_string) {
    return my_string.toLowerCase()
                    .split('')
                    .sort()
                    .join('');
}