/**
 * 제목: 글자 지우기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181900?language=javascript
 */

function solution(my_string, indices) {
    return my_string.split('').filter((val, idx) => {
        return !indices.includes(idx);
    }).join('');
}