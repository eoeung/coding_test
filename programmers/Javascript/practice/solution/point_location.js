/**
 * 제목: 점의 위치 구하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=javascript
 */

const operator = (x,y) => {
    if(x > 0 && y > 0) return 1;
    if(x > 0 && y < 0) return 4;
    if(x < 0 && y > 0) return 2;
    if(x < 0 && y < 0) return 3;
}

function solution(dot) {
    return operator(...dot);
}