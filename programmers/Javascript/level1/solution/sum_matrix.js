/**
 * 제목: 행렬의 덧셈
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12950?language=javascript
 */

function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr1.length; i++){
        let temp = [];
        
        for(let j=0; j<arr1[i].length; j++){
            // console.log(arr1[i][j], arr2[i][j]);
            temp.push(arr1[i][j] + arr2[i][j]);
        }
        
        answer.push(temp);
    }
    
    return answer;
}