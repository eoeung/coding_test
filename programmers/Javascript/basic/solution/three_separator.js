/**
 * 제목: 세 개의 구분자
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181862?language=javascript
 */

function solution(myStr) {
    let answer = myStr.replace(/[a-c]+/g, ' ').trim().split(' ').filter(r => r != '');
    return answer.length > 0 ? answer : ["EMPTY"];
}