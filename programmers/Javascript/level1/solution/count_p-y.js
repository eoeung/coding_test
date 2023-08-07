/**
 * 제목: 완주하지 못한 선수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
 */

function solution(participant, completion) {
    // 1. completion에 없는 명단
    // 2. 동명이인 처리 → Set 객체 사용하면 안됨
    // 3. Object 객체 사용? → 카운트를 빼는 방법으로 진행해야할 듯
    
    let parObj = participant.reduce((acc, val) => {
        if(!acc[val]) acc[val] = 1;
        else acc[val] += 1;
        
        return acc;
    }, {});
    
    for(let person of completion){
        parObj[person] -= 1;
        
        if(parObj[person] === 0) delete parObj[person];
    }
    
    return Object.keys(parObj)[0];
}