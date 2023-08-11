/**
 * 제목: 수박수박수박수박수박수?

 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
 */

function solution(n) {
    // 짝수: n/2 = 수박 → m/2만큼 수박을 반복하면 됨
    // 홀수: n/2+1 = 수, n/2 = 박 → (n+1)/2만큼 수박을 반복하고, 마지막 글자 '박'만 제외하면 됨
    // if(n % 2 === 0){ // 짝수
    //     return '수박'.repeat(n/2);
    // } else{ // 홀수
    //     return '수박'.repeat((n+1)/2).slice(0, -1);
    // }
    
    return n % 2 ? '수박'.repeat((n+1)/2).slice(0, -1) : '수박'.repeat(n/2);
}