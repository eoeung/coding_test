/**
 * 제목: 제일 작은 수 제거하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12935?language=javascript
 */

function solution(arr) {
    let minIdx = arr.indexOf(Math.min(...arr));
    arr.splice(minIdx, 1);
    
    return arr.length > 0 ? arr : [-1];
}