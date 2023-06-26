/**
 * 제목: 주사위의 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120845?language=javascript
 */

function solution(box, n) {
    return box.reduce((acc, val) => {
        return acc *= Math.trunc(val/n);
    }, 1);
}