/**
 * 제목: 삼각형의 완성조건 (1)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120889?language=javascript
 */

function solution(sides) {
    let arr = sides.sort((a,b) => a-b);
    return arr.pop() < arr.reduce((acc, val) => acc += val, 0) ? 1 : 2;
}