/**
 * 제목: 배열에서 문자열 대소문자 변환하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181875?language=javascript
 */

function solution(strArr) {
    return [...strArr].map((v, i) => {
        return (i%2) ? v.toUpperCase() : v.toLowerCase(); // 홀수(대문자) : 짝수(소문자)
    });
}