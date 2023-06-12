/**
 * 제목: 문자열 잘라서 정렬하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181866?language=javascript
 */

function solution(myString) {
    let answer = myString.split("x").filter(val => val); // split() 후, 빈 문자열 제거
    return answer.sort();
}