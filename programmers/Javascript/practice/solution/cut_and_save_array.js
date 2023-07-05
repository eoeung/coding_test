/**
 * 제목: 잘라서 배열로 저장하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript
 */

function solution(my_str, n) {
    let answer = [];
    let temp = '';
    
    for(let idx in my_str){
        temp += my_str[idx];
        
        if(temp.length === n || Number(idx) === my_str.length-1){
            answer.push(temp);
            temp = '';
        }
    }
    
    return answer;
}


/**
 * 다른 분의 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
 * 사실 딱 보자마자 정규식이 생각이 났는데, 구현을 하지 못했다.
 * .은 모든 문자를 의미하며, x{n,m}은 최소 n개, 최대 m개를 찾아내라는 뜻이다.
 */