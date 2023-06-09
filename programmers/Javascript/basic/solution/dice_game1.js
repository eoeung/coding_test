/**
 * 제목: 주사위 게임 1
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181839?language=javascript
 */

function solution(a, b) {
    if((a+b) % 2 != 0){ // 하나만 홀수
        return 2*(a+b);
    } else{
        if(a % 2 == 0){ // 모두 짝수
            return Math.abs(a-b);
        } else{ // 모두 홀수
            return a*a + b*b;
        }
    }
}