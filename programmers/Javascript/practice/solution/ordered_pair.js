/**
 * 제목: 순서쌍의 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120836?language=javascript
 */

function solution(n) {
    let answer = 1; // (n,1)을 포함
    
    for(let i=1; i<=n/2; i++){ // 약수는 n의 절반까지만 봐도 괜찮다.
        if(n%i == 0) answer += 1;
    }
        
    return answer;
}