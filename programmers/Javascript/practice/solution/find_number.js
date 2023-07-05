/**
 * 제목: 숫자 찾기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120904?language=javascript
 */

function solution(num, k) {
    let answer = num.toString().indexOf(k);
    return answer > -1 ? answer +1 : answer; // 번째를 반환해야하므로 index+1을 반환
}