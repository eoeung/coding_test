/**
 * 제목: 전국 대회 선발 고사
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181851?language=javascript
 */

function solution(rank, attendance) {
    let rankObj = [...rank].reduce((acc, val, idx) => {
        if(attendance[idx]) acc[val] = idx;
        return acc;
    }, {});
    
    let tempKeyArr = Object.keys(rankObj).sort((a,b) => a-b);
    
    return 10000 * rankObj[tempKeyArr[0]] +
           100 * rankObj[tempKeyArr[1]] +
           rankObj[tempKeyArr[2]];
}