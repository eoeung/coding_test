/**
 * 제목: 머쓱이보다 키 큰 사람
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120585?language=javascript
 */

function solution(array, height) {
    return array.filter(num => height < num).length;
}