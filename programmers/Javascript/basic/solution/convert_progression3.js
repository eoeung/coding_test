/**
 * 제목: 조건에 맞게 수열 변환하기 3
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181835?language=javascript
 */

function solution(arr, k) {
    return arr.map((v) => k%2 ? v*k : v+k);
}