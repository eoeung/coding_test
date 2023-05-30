/**
 * 제목: 이어 붙인 수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181928?language=javascript
 */

function solution(num_list) {
    let odd = '';
    let even = '';
    
    for(let temp of num_list){
        if(temp % 2 == 0){
            odd += temp;
        } else{
            even += temp;
        }
    }
    
    return Number(odd) + Number(even);
}