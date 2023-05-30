/**
 * 제목: flag에 따라 다른 값 반환하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181933?language=javascript
 */

function solution(a, b, flag) {
    return flag ? a+b : a-b;
}


/**
 * ※ 다른 분의 풀이
 * 화살표 함수에 익숙해지기 위해서 가지고 왔음
 * 
 * const solution = (a, b, flag) => flag ? a + b : a - b
 * 
 */