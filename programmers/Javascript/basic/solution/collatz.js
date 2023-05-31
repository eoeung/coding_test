/**
 * 제목: 콜라츠 수열 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181919?language=javascript
 */

function solution(n) {
    let answer = [n];
    
    while(n > 1){
        if(n % 2 == 0){ // 짝수: x/2
            n /= 2
        } else{ // 홀수: 3x+1
            n = 3*n+1
        }
        
        answer.push(n);
    }
    
    return answer;
}