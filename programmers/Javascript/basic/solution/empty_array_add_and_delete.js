/**
 * 제목: 빈 배열에 추가, 삭제하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181860?language=javascript
 */

function solution(arr, flag) {
    return arr.reduce((acc, val, idx) => {
        if(flag[idx]){ // true → arr[i] x 2번
            for(let i=0; i<val*2; i++) acc.push(val);
            
        } else{ // false → arr[i]개의 원소를 제거
            for(let i=0; i<val; i++) acc.pop();
        }
        
        return acc;
    }, []);
}