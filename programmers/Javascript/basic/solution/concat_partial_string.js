/**
 * 제목: 부분 문자열 이어 붙여 문자열 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181911?language=javascript
 */

function solution(my_strings, parts) {
    // 1번 풀이(map)
    // return [...parts].map(([s, e], i) => {
    //     return my_strings[i].slice(s, e+1);
    // }).join('');
    // map은 새로운 배열을 리턴한다.
    
    // 2번 풀이(reduce)
    return [...parts].reduce((acc, [s, e], i) => {
        return acc += my_strings[i].substring(s, e+1);
    }, '');
}