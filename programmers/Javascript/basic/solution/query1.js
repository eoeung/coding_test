/**
 * 제목: 수열과 구간 쿼리 1
 * URL: 
 */

function solution(arr, queries) {
    return queries.reduce((acc, [s,e]) => {
        for(let i=s; i<e+1; i++){
            acc[i] += 1;
        }
        
        return acc;
    }, arr);
}