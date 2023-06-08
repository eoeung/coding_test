/**
 * 제목: 원하는 문자열 찾기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181878?language=javascript
 */

function solution(myString, pat) {
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}