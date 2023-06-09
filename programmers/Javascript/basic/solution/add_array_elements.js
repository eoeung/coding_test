/**
 * 제목: 배열의 원소만큼 추가하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181861?language=javascript
 */

function solution(arr) {
    let answer = [];
    
    for(let num of arr){
        for(let i=0; i<num; i++) answer.push(num);
    }
    
    return answer;
}