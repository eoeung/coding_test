/**
 * 제목: 문자열 다루기 기본
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
 */

function solution(s) {
    if(!(s.length === 4 || s.length === 6)) return false;
    
    let regExp = /[0-9]/;
    let sArr = s.split('').filter(str => str.match(regExp));
    console.log(sArr);
    
    return s.length === sArr.length ? true : false;
}

/**
 * 다른 분의 풀이
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );

 * ^\d{6}$||^\d{4}$ → 처음과 끝이 \d{6}이거나 \d{4}인 경우만 찾음 → 모두 숫자면서 길이가 4 또는 6인 것만 찾는다.
 */