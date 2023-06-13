/**
 * 제목: 배열 조각하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181893?language=javascript
 */

function solution(arr, query) {
    return query.reduce((acc, val, idx) => {
        if(idx % 2){ // 홀수 인덱스 → 앞 부분 자르기
            return acc.slice(val); // query[i]번 인덱스 제외
        } else{ // 짝수 인덱스 → 뒷 부분 자르기
            return acc.slice(0, val+1); // query[i]번 인덱스 제외
        }
    }, arr);
    
    // return query.reduce((acc, val, idx) => {
    //     return (idx % 2) ? acc.slice(val) : acc.slice(0, val+1);
    // }, arr);
}