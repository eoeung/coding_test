/**
 * 제목: 약수의 합
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
 */

function solution(n) {
    if(n <= 2) return n;
    
    let answer = n+1; // 1과 본인은 무조건 약수이므로 무조건 넣어준다.
        
    for(let i=2; i<=n/2; i++){ // 2부터 본인/2로 약수를 찾기
        if(n % i == 0) answer += i;
    }
    
    return answer;
}