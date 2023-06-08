/**
 * 제목: 배열 만들기 6
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181859?language=javascript
 */

function solution(arr) {
    let stk = [];
    
    [...arr].map((v, i) => {
        if(!stk.length) stk.push(v);
        else if(v === stk[stk.length-1]) stk.pop()
        else if(v !== stk[stk.length-1]) stk.push(v);
    });
    
    return !stk.length ? [-1] : stk;
}