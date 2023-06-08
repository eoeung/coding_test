/**
 * 제목: n개 간격의 원소들
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181888?language=javascript
 */

function solution(num_list, n) {
    let answer = [];
    
    for(let i=0; i<num_list.length; i+=n){
        answer.push(num_list[i]);
    }
    
    return answer;
}