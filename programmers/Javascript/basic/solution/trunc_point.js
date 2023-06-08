/**
 * 제목: 정수 부분
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181840?language=javascript
 */

function solution(flo) {
    return Math.floor(flo);
}


/**
 * Math.trunc() -> 정수 부분만 반환
 * Math.floor() -> 소수점을 버리고 같거나 작은 정수 반환
 * 
 * 문제는 양수만을 대상으로 하기 때문에 floor를 사용해도 trunc과 결과가 같다.
 * 음수를 적용하게 되면 trunc가 맞는 정답임
 * Ex) Math.trunc(-3.9) = -3 / Math.floor(-3.9) = -4
 */