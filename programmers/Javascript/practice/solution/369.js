/**
 * 제목: 369게임
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript
 */

function solution(order) {
    let reg = /[369]+?/g; // {1} // (1개 이상) && (0 or 1) → 무조건 1개
    let arr = String(order).match(reg);
    return arr ? arr.length : 0;
}