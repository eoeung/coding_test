/**
 * 제목: 직사각형 넓이 구하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120860?language=javascript
 */

function solution(dots) {
    let xArr = dots.map(el => el[0]);
    let yArr = dots.map(el => el[1]);
    
    // x,y 모두 큰 값에서 작은 값을 빼어 서로 곱하면 된다.
    return (Math.max(...xArr) - Math.min(...xArr))
           *
           (Math.max(...yArr) - Math.min(...yArr));
}