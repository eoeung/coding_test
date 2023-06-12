/**
 * 제목: 문자 개수 세기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181902?language=javascript
 */

function solution(my_string) {
    let [start, end] = ['A'.codePointAt(0), 'z'.codePointAt(0)]; // 
    let regExp = /[a-zA-Z]/; // 특수문자 거르기
    let answer = {};
    
    for(let i=start; i<end+1; i++){
        let temp = String.fromCodePoint(i);
        if(temp.match(regExp)) answer[temp] = 0;
        else continue;
    }
    
    // console.log(Object.keys(answer).length); // 52
    
    for(let str of my_string){
        answer[str] += 1;
    }
    
    return Object.values(answer);
}