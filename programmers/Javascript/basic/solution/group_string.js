/**
 * 제목: 문자열 묶기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181855?language=javascript
 */

function solution(strArr) {
    let obj = strArr.reduce((acc, val) => {
        if(acc[val.length]) acc[val.length] += 1;
        else acc[val.length] = 1;
        
        return acc;
    }, {});
    
    return Object.values(obj).sort((a,b) => b-a)[0];
}