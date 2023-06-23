/**
 * 제목: 가위 바위 보
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120839?language=javascript
 */

function solution(rsp) {
    return [...rsp].reduce((acc, val) => acc += rspFunc[val], '');
}

const rspFunc = {
    '2': '0', // 가위 -> 바위로 이긴다.
    '0': '5', // 바위 -> 보로 이긴다.
    '5': '2' // 보 -> 가위로 이긴다.
}