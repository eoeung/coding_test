/**
 * 제목: 문자열 정렬하기 (1)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120850?language=javascript
 */

function solution(my_string) {
    let reg = /[^0-9]/g;
    return my_string.replace(reg, '')
                    .split('')
                    .sort((a,b) => (a-b))
                    .map(x => Number(x));
}