/**
 * 제목: 수열과 구간 쿼리 2
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181923?language=javascript
 */

function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([s,e,k])=>{
        let arrSlice = arr.slice(s, e+1);
        let maxArr = [];
        
        // k보다 큰 값을 가지고 온다.
        arrSlice.forEach((element) => {
            if(element > k){
                maxArr.push(element);
            }
        });
        
        // 값이 없는 경우, -1을 채워줌
        if(!maxArr.length){
            maxArr.push(-1);
        }
        answer.push(Math.min(...maxArr));
    });
    
    return answer;
}