/**
 * 제목: 평균 구하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
 */

function solution(arr) {
    let total = arr.reduce((acc, val) => acc += val, 0);
    return total / arr.length;
}