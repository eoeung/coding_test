/**
 * 제목: 아이스 아메리카노
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120819?language=javascript
 */

function solution(money) {
    const ICEAMERICANO = 5500;
    
    return [Math.trunc(money/ICEAMERICANO), money%ICEAMERICANO];
}