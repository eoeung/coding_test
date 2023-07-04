/**
 * 제목: 한 번만 등장한 문자
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120896?language=javascript
 */

function solution(s) {
    let answer = [];
    let strObj = s.split('').reduce((acc, val) => {
        if(!acc[val]) acc[val] = 1;
        else acc[val] += 1;
        
        return acc;
    }, {});
    
    for(let [k,v] of Object.entries(strObj)){
        if(v === 1) answer.push(k);
    }
    
    return answer.sort().join('');
}