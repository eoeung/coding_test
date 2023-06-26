/**
 * 제목: 컨트롤 제트
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120853?language=javascript
 */

function solution(s) {
    const Z = 'Z'
    
    let arr = s.split(' ').reduce((acc, val) => {
        if(val === Z) acc.pop();
        else acc.push(+val);
        
        return acc;
    }, []);
    
    return arr.length > 0
           ? arr.reduce((acc, val) => acc += val)
           : 0
}