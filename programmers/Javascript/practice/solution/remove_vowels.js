/**
 * 제목: 모음 제거
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120849?language=javascript
 */

function solution(my_string) {
    let reg = /[a,e,i,o,u]+/g; // /[aeiou]/g로 해도 문제없음
	return my_string.replaceAll(reg, ''); // replaceAll은 무조건 전역 검색인(g)를 포함해야함
}