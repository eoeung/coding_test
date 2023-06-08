/**
 * 제목: A 강조하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181874?language=javascript
 */

function solution(myString) {
    let answer = myString.split("").map((str) => {
       return str === 'a' ? 'A' : (str === 'A' ? str : str.toLowerCase()); // 'A'는 그대로 둬야함
    }).join('');
        
    return answer;
}