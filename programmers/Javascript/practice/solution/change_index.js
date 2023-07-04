/**
 * 제목: 인덱스 바꾸기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript
 */

function solution(my_string, num1, num2) {
    let answer = '';
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    
    for(let idx in my_string){
        if(+idx === min)      answer += my_string[max];
        else if(+idx === max) answer += my_string[min];
        else                 answer += my_string[idx];
    }
    
    return answer;
}