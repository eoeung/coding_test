/**
 * 제목: 특별한 이차원 배열 1
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181833?language=javascript
 */

function solution(n) {
    let answer = [];
    
    for(let i=0; i<n; i++){
        let tempArr = [];
        
        for(let j=0; j<n; j++){
            if(i == j) tempArr.push(1);
            else tempArr.push(0);
        }
        
        answer.push(tempArr);
    }
    
    return answer;
}