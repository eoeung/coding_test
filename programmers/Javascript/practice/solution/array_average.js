/**
 * 제목: 배열의 평균값
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120817?language=javascript
 */

function solution(numbers) {
    let sum = numbers.reduce((acc, val) => acc += val, 0);
    return sum / numbers.length;
}