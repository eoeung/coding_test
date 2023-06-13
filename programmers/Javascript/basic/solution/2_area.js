/**
 * 제목: 2의 영역
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181894?language=javascript
 */

function solution(arr) {
    let [start, end] = [arr.indexOf(2), arr.lastIndexOf(2)];
    let answer = arr.slice(start, end+1);
    return answer.length > 0 ? answer : [-1];
}