/**
 * 제목: 글자 이어 붙여 문자열 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181915?language=javascript
 */

function solution(my_string, index_list) {
    let answer = '';
    for(let num of index_list){
        answer += my_string[num];
    }

    return answer;
}