/**
 * 제목: 세로 읽기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181904?language=javascript
 */

function solution(my_string, m, c) {
    let arr = '';
    
    for(let i=0; i<my_string.length; i+=m){
        arr += my_string[i+c-1]; // c번째 = 인덱스+1
    }
    
    return arr;
}