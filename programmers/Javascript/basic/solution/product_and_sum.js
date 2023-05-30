/**
 * 제목: 원소들의 곱과 합
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181929?language=javascript
 */

function solution(num_list) {
    let mulVal = num_list.reduce((acc, curVal) => {
        return acc *= curVal;
    }, 1);
    
    let sumVal = num_list.reduce((acc, curVal) => {
        return acc += curVal;
    }, 0);
    sumVal = Math.pow(sumVal, 2);
    
    return mulVal < sumVal ? 1 : 0;
}