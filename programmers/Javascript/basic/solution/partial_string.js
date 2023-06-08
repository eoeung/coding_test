/**
 * 제목: 부분 문자열
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181842?language=javascript
 */

function solution(str1, str2) {
    return str2.includes(str1) ? 1 : 0;
}


/**
 * 다른 분의 풀이
function solution(str1, str2) {
    const regex = new RegExp(str1, 'g');
    return str2.match(regex) ? 1 : 0;
}
 * 정규식을 이용해서 풀고 싶었으나 실패했다.
 * 1. new RegExp()을 이용해 RegExp 객체의 생성자 함수를 호출한다.
 * 2. str1을 찾는다고 설정하고, 'g'(전역으로 찾음)
 * 3. 찾고 싶은 문자열(str2)에 match(정규식)을 이용해서 찾아낸다.
 */