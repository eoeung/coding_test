/**
 * 제목: 문자 리스트를 문자열로 변환하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181941?language=javascript
 */

function solution(arr) {
    var answer = '';
    for(let str of arr){
        answer += str;
    }
    return answer;
    
    // Array.prototype.join()
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    
    // arr.join([separator]): 배열의 모든 요소들을 연결한 하나의 문자열을 반환
    // -> arr.length가 0이라면, 빈 문자열을 반환
    
    // separator: 배열의 각 요소를 구분할 문자열을 지정
    // * 생략하면 배열의 요소들이 쉼표로 구분
    // ** separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됨
    
    // return arr.join("");
}