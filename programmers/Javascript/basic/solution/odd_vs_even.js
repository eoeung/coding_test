/**
 * 제목: 홀수 vs 짝수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181887?language=javascript
 */

function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;
    
    num_list.map((num, idx) => {
        if(idx % 2 == 0){ // 홀수 번째 원소(0인덱스 = 1번째)
            oddSum += num;
        } else{ // 짝수 번째 원소
            evenSum += num;
        }
    });
    
    return Math.max(evenSum, oddSum);
}