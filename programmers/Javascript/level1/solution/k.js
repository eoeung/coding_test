/**
 * 제목: K번째수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 */

function solution(array, commands) {
    let answer = [];
    
    commands.map(([start, end, idx]) => {
        // 1. start부터 end까지 자르기(slice는 start-1로 가지고 와야 함)
        let sliceArr = array.slice(start-1, end);
        
        // 2. 자른 배열을 오름차순으로 정렬
        sliceArr.sort((a,b) => a-b);
        
        // 3. 정렬된 자른 배열에서 idx번째(= 인덱스는 idx-1)값을 가지고 오기
        answer.push(sliceArr[idx-1]);
    })
    
    return answer;
}