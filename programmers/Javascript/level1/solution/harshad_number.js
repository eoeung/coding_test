/**
 * 제목: 하샤드 수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
 */

function solution(x) {
    let numArr = [];
    let num = x;
    
    while(num >= 1){
        numArr.push(num % 10);
        num = Math.floor(num / 10);
    }
    
    let total = numArr.reduce((acc, val) => acc += val, 0);
    
    return !(x % total);
}