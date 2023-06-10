/**
 * 제목: 0 떼기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181847?language=javascript
 */

function solution(n_str) {
    let re = new RegExp(/0+/);
    return n_str.indexOf('0') === 0 ? n_str.replace(re, '') : n_str;
}