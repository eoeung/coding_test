/**
 * 제목: 핸드폰 번호 가리기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
 */

function solution(phone_number) {
    let regExp = /[0-9]{4}$/;
    let before = '*'.repeat(phone_number.length-4);
    let after = phone_number.match(regExp)[0];
    
    return before + after;
}

/**
 * 다른 사람의 풀이 1) 정규표현식
function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}
 * Assertions(어설션)이라고 한다.
 * x(?=y)는 x뒤에 y가 오는 경우에만 x가 일치하는 경우를 찾는다.
 * 즉, \d 뒤에 \d{4}가 오는 경우만 찾아서 '*'로 replace를 한다.
 */


/**
 * 다른 사람의 풀이 1) 각각 자르기
 function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }
 */