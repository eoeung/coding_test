/**
 * 제목: 문자열을 정수로 바꾸기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12925?language=javascript
 */

function solution(s) {
    if(s[0] === '+' || s[0] === '-'){
        return s[0] === '+' ? Number(s.slice(1)) : Number(s.slice(1)) * -1;
    } else{
        return Number(s);
    }
}

/**
 * 다른 분의 풀이
function solution(s){
    return s/1;
}
 * Javascript는 약한 타입 언어기 때문에, 자동 형변환을 이용해서 간단하게 1로 나눠주면 Number형이 됨
 */