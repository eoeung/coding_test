/**
 * 제목: 최빈값 구하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120812?language=javascript
 */

function solution(array) {
    let obj = array.reduce((acc, val) => {
        if(acc[val]) acc[val] += 1;
        else acc[val] = 1;
        
        return acc;
    }, {});
    
    let answer = [];
    let max = Math.max(...Object.values(obj)); // 최빈값을 가지고온다.
    
    for(let [key, val] of Object.entries(obj)){
        if(val === max) answer.push(+key); // 최빈값을 비교해가면서 key값을 Number형으로 저장
    }
    
    return answer.length > 1 ? -1 : answer[0]; // 최빈값이 2개 이상이면 -1 반환
}