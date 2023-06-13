/**
 * 제목: 문자열이 몇 번 등장하는지 세기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181871?language=javascript
 */

function solution(myString, pat) {
    let answer = 0;
    
    for(let i=0; i<myString.length-pat.length+1; i++){
        let temp = myString.slice(i, i+pat.length);
        if(temp.includes(pat)) answer += 1;
    }
    
    return answer;
}