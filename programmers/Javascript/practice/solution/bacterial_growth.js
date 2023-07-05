/**
 * 제목: 세균 증식
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120910?language=javascript
 */

function solution(n, t) {
    return n*(Math.pow(2, t));
}


/**
 * 다른 분의 풀이
function solution(n, t){
    return n << t;
}
 * 왼쪽으로 이동하는 비트연산자를 사용
 * 왼쪽으로 기존 값을 이동하면서 남은 오른쪽에는 0값을 채운다. → 결국 2배가 됨
 * Ex) 1 << 1 (1을 왼쪽으로 1번 민다.)
 * 00000001 → 00000010 (1 → 2)
 * 
 * Ex) 2 << 10 (2를 왼쪽으로 10번 민다.)
 * 00000000 00000010 → 00001000 00000000 (2 → 2048)
 */