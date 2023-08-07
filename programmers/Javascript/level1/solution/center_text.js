/**
 * 제목: 문자열 내 p와 y의 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 */

function solution(s){
    let regExpP = /[^p]/ig;
    let regExpY = /[^y]/ig;
    
    let p = s.replaceAll(regExpP, '');
    let y = s.replaceAll(regExpY, '');
    
    return p.length === y.length ? true : false;
}