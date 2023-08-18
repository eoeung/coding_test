/**
 * 제목: 자연수 뒤집어 배열로 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12932?language=javascript
 */

function solution(n) {
    return String(n).split('')
                    .map(str => Number(str))
                    .reverse();
}