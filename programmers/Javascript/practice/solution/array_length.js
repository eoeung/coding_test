/**
 * 제목: 배열 원소의 길이
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120854?language=javascript
 */

function solution(strlist) {
    return strlist.reduce((acc, val) => {
        acc.push(val.length);
        return acc;
    }, []);
}