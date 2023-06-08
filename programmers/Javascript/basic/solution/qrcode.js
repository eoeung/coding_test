/**
 * 제목: qr code
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181903?language=javascript
 */

function solution(q, r, code) {
    let answer = '';
    
    for(let i=0; i<code.length; i++){
        if(i%q == r){
            answer += code[i];
        }
    }
    
    return answer;
}