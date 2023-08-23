/**
 * 제목: 예산
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript
 */

function solution(d, budget) {
    // 1. 오름차순으로 sort해서 budget에서 계속 값 빼주기
    // 2. budget이 마이너스가 되기 직전의 값을 리턴
    let answer = [];
    
    d.sort((a,b) => a-b);
    for(let price of d){
        if(budget - price >= 0){
            budget -= price;
            answer.push(price);
        } else{
            break;
        }
    }
    
    return answer.length;
}