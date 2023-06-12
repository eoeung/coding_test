/**
 * 제목: ad 제거하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181870?language=javascript
 */

function solution(strArr) {
    return strArr.filter(val => !val.includes('ad'));
}