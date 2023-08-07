/**
 * 제목: 가운데 글자 가져오기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 */

function solution(s) {
    if(s.length % 2 == 0){ // 짝수
        return s[(s.length/2)-1] + s[s.length/2];
    } else{
        return s[Math.floor(s.length/2)];
    }
}