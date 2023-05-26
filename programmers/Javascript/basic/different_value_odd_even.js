/**
 * 제목: 홀짝에 따라 다른 값 반환하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181935?language=javascript
 */

function solution(n) {
    let i;
    let total = 0;
    
    if(n % 2 == 0){ // 짝수: n이하의 모든 짝수의 제곱의 합
        i = 2;
        while(i <= n){
            total += Math.pow(i,2);
            i += 2;
        }
    } else{ // 홀수: n이하의 모든 홀수의 합
        i = 1;
        while(i <= n){
            total += i;
            i += 2;
        }
    }
    
    return total;
}