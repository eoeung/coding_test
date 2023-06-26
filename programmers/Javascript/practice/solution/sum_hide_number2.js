/**
 * 제목: 숨어있는 숫자의 덧셈 (2)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript
 */

function solution(my_string) {
    let numReg = /[^0-9]/g;
    let spaceReg = /[' ']{2,}/g;
    
    return my_string.replace(numReg, ' ')
                    .replace(spaceReg, ' ')
                    .split(' ')
                    .reduce((acc, val) => acc += +val, 0);
}