/**
 * 제목: 팩토리얼
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120848?language=javascript
 */

function solution(n) {
    let answer = 1;
    
    while(n > answer){
        answer += 1;
        n = Math.trunc(n/answer);
    }
    
    return answer;
}


/**
 * 다른 분의 풀이
function solution(n) {
    for(let i = 1, v = 1; true; v *= ++i) if(v > n) return --i;
} 
 * 1. 변수 두 개를 선언하고, 무한loop를 실행, v에는 전위연산자로 i를 계속 곱한 값을 저장한다.
 * 2. 만약에 v가 n보다 큰 경우, 이미 1을 더한 i에서 1을 뺀 값인 --i를 반환한다. (만약 i--가 되어버리면 1을 빼기 전의 i값을 반환하므로 정답보다 1 큰 값을 반환하게 된다.)


※ 전위연산자, 후위연산자
 * 참고글: https://codingadinga.tistory.com/11

 * 전위 연산자: ++n -> n* = n + 1에서 n*의 값을 반환한다.
 * 즉, n에 1이 더해진 상태의 n의 값을 반환한다.
 * 
 * 후위 연산자: n++ -> n = n* + 1에서 n*의 값을 반환한다.
 * 즉, 1이 더해지기 전인 n의 값을 반환한다.
 */
