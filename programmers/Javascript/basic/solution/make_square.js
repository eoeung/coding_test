/**
 * 제목: 정사각형으로 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181830?language=javascript
 */

function solution(arr) {
    // 행 : arr[0].length
    // 열 : arr.length
    let row = arr[0].length;
    let column = arr.length;
    let answer = [...arr];
    
    if(row > column){
        for(let i=0; i<row-column; i++){
            answer.push(new Array(row).fill(0));
        }
    } else if(row < column){
        for(let i=0; i<answer.length; i++){
            let tempArr = new Array(column-row).fill(0);
            answer[i] = answer[i].concat(tempArr);
        }
    }
    
    return answer;    
}