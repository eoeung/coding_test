/**
 * 제목: 꼬리 문자열
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181841?language=javascript
 */

function solution(str_list, ex) {
    return str_list.reduce((acc, str) => {
        return str.includes(ex) ? acc : acc += str;
    }, '');
}