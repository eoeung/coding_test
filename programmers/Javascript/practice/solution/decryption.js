/**
 * 제목: 암호 해독
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120892?language=javascript
 */

function solution(cipher, code) {
    let answer = '';
    for(let i=code-1; i<cipher.length; i+=code) answer += cipher[i];
    
    return answer;
}