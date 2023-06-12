/**
 * 제목: 특별한 이차원 배열 2
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181831?language=javascript
 */

function solution(arr) {
    let answer = false;
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i == j) continue; // [0][0] 처럼 같은 건 비교할 필요가 없음
            else if(arr[i][j] !== arr[j][i]){
                return Number(answer);
            }
        }
    }
    
    return Number(!answer);
}