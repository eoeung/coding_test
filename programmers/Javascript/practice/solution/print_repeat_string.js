/**
 * 제목: 문자 반복 출력하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript
 */

function solution(my_string, n) {
    return [...my_string].reduce((acc, val) => {
        acc += val.repeat(n);
        return acc;
    }, '');
}