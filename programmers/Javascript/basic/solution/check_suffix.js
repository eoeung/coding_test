/**
 * 제목: 접미사인지 확인하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181908?language=javascript
 */

function solution(my_string, is_suffix) {
    for(let str of my_string){
        if(my_string !== is_suffix) my_string = my_string.slice(1);
    }
    
    return my_string.length > 0 ? 1 : 0;
}