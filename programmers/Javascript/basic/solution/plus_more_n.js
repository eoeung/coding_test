/**
 * 제목: n보다 커질 때까지 더하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181884?language=javascript
 */

function solution(numbers, n) {
    let answer = 0;
    
    for(let i of numbers){
        answer += i;
        if(answer > n) return answer;
    }
}