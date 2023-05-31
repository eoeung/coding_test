/**
 * 제목: 수열과 구간 쿼리 4
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181922?language=javascript
 */

function solution(arr, queries) {
    queries.forEach(([startIndex, endIndex, modNum]) => {
        for(let i=startIndex; i<endIndex+1; i++){
            if(i % modNum == 0){
                arr[i] += 1;
            }
        }
    });
    
    return arr;
}