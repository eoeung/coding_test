/**
 * 제목: 9로 나눈 나머지
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181914?language=javascript
 */

function solution(number) {
    let answer = number.split("").reduce((acc, val) => {
        return acc += Number(val);
    }, 0);
    
    return answer % 9;
}