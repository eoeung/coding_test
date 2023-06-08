/**
 * 제목: 문자열 여러 번 뒤집기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181913?language=javascript
 */

function solution(my_string, queries) {
    let answer = my_string;
    
    [...queries].map(([s, e], i) => {
        let temp = answer.substring(s, e+1).split('').reverse().join('');
        answer = answer.substring(0, s) + temp + answer.substring(e+1);
    });
    
    return answer;
}