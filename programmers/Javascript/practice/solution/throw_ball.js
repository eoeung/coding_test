/**
 * 제목: 공 던지기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120843?language=javascript
 */

function solution(numbers, k) {
    let cnt = 1;
    let answer = [...numbers];
    
    while(answer.length < k*2){
        answer = answer.concat([...numbers]);
        cnt++;
        if(answer.length > (2*cnt)*k) break;
    }
    
    return answer[(k*2)-2];
    // k = 2 // index=2, 3번째
    // k = 5 // index=8, 9번째
    // k = 3 // index=4, 5번째
    // (k*2)-2의 인덱스 값을 구하면 됨
}


/**
 * 다른 분의 풀이
function solution(numbers, k) {
    return numbers[((2 * (k -1))) % numbers.length];
}
 * 배열을 늘리지 않고, 나머지연산을 이용해서 계산했다.
 * 내가 반환한 값인 (k*2)-2 = 2k*2 = 2*(k-1) 모두 같은 값이다.
 * 최종적으로 2(k-1)의 인덱스를 구하면 되는데, number.length로 나머지 연산을 해서 해당 인덱스를 구하는 식이다.
 */
