/**
 * 제목: 가까운 수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript
 */

function solution(array, n) {
    let opArr = array.map(val => val-n);
    let absArr = array.map(val => Math.abs(val-n)); // 절대값 배열
    let min = Math.min(...absArr); // array에 들어있는 정수와 n과 가장 가까운 값(절대값이라 무조건 양수임)
    
    opArr = opArr.filter(val => Math.abs(val) === min);
    min = Math.min(...opArr);   
    
    return n + min;
}