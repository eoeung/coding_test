/**
 * 제목: 정수 제곱근 판별
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12934?language=javascript
 */

function solution(n) {
    if(Number.isInteger(Math.sqrt(n))){
        return Math.pow((Math.sqrt(n)+1), 2);
    } else{
        return -1;
    }
}