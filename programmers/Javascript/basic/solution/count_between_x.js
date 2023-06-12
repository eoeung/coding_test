/**
 * 제목: x 사이의 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181867?language=javascript
 */

function solution(myString) {
    return myString.split('x').map(v => v.length);
}