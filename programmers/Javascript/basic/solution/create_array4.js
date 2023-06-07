/**
 * 제목: 배열 만들기 4
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181918?language=javascript
 */

function solution(arr) {
    let stk = [];
    let i = 0;
    
    while(i < arr.length){
        if((!stk.length) || (arr[i] > stk[stk.length-1])){ // 빈 배열 및 'stk의 마지막 원소'가 'arr[i]'보다 작은 경우
            stk.push(arr[i]);
            i++;
        } else if(arr[i] <= stk[stk.length-1]){
            stk.pop(i);
        }
    }
    
    return stk;
}