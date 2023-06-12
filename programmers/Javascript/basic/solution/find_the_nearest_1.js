/**
 * 제목: 가까운 1 찾기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181898?language=javascript
 */

function solution(arr, idx) {
    let findOne = arr.slice(idx).indexOf(1); // idx부터 시작한 배열에서 1을 찾음
    return findOne < 0 ? findOne : findOne+idx; // indexOf == -1 → 없음
}