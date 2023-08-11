/**
 * 제목: 문자열 내림차순으로 배치하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
 */

function solution(s) {
    s = s.split('').sort((s1, s2) => s2.charCodeAt() - s1.charCodeAt());
    return s.join('');
}

/*
 * 다른 분의 풀이
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
* sort() 후 reverse()로 뒤집어 주었다.
*/