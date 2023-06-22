/**
 * 제목: 피자 나눠 먹기 (2)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120815?language=javascript
 */

function solution(n) {
    // 최소공배수
    // 6명, 6조각 -> 6 / 6조각 = 1
    // 10명, 6조각 -> 30 / 6조각 = 5
    // 4명, 6조각 -> 12 / 6조각 = 2
    // 즉, 인원수와 6조각의 최소공배수를 구해준 다음에 6조각으로 나눠준 값이 정답
    const PIZZAPIECE = 6;
    if(n > 3) return LCM(n, PIZZAPIECE) / PIZZAPIECE;
    else return 1 // 3명 이하는 피자 1판으로 충분하다.
}

function LCM(a, b){
    let lcm = 1;
    
    for(let i=lcm; i<Math.min(a,b); i++){
        if(a % i == 0 && b % i == 0) lcm *= i;
    }
    
    return lcm * (a/lcm) * (b/lcm);
}