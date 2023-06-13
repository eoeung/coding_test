/**
 * 제목: 배열의 길이를 2의 거듭제곱으로 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181857?language=javascript
 */

function solution(arr) {
    let i = 0; // 거듭제곱 시작
    
    while(Math.pow(2,i) < arr.length) i++;
    
    return arr.length === Math.pow(2,i) ? arr : arr.concat(new Array(Math.pow(2,i)-arr.length).fill(0));
}