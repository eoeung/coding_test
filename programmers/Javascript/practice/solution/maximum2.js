/**
 * 제목: 최댓값 만들기 (2)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120862?language=javascript
 */

function solution(numbers) {
    // 오름차순으로 sort한 결과에서 0,1번째 인덱스를 곱한 값
    // or length-2,length-1번째 인덱스를 곱한 값을 비교한다.
    numbers.sort((a,b) => b-a);
    
    let front = numbers[0]*numbers[1];
    let last = numbers[numbers.length-2] * numbers[numbers.length-1];
    
    return front > last ? front : last;
}