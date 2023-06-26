/**
 * 제목: 숨어있는 숫자의 덧셈 (1)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120851?language=javascript
 */

function solution(my_string) {
    let reg = /[0-9]/g;
    return my_string.match(reg).reduce((acc, val) => acc += +val, 0); // 한 자리 숫자로 취급하기때문에 가능
}