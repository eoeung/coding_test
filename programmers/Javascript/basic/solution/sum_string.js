/**
 * 제목: 문자열 정수의 합
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181849?language=javascript
 */

function solution(num_str) {
    // 1. 0을 모두 제거
    // 2. split('')으로 배열로 문자열을 배열로 만들어줌
    // 3. reduce()를 통해 총 합계를 구함
    return num_str.replaceAll('0', '').split('').reduce((acc, val) => acc += Number(val), 0);
}