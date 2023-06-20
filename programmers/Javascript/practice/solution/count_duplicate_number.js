/**
 * 제목: 중복된 숫자 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript
 */

function solution(array, n) {
    return array.reduce((acc, val) => {
        if(val === n) acc += 1;
        return acc;
    }, 0);
}