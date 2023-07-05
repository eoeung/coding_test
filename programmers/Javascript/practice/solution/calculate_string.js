/**
 * 제목: 문자열 계산하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120902?language=javascript
 */

const operObj = {
    '+': (a, b) => Number(a) + Number(b),
    '-': (a, b) => Number(a) - Number(b),
};

function solution(my_string) {
    let numArr = my_string.match(/\d+/g); // +안 넣으면 각각 따로 계산해버림 (1개 이상 모두 찾는 +추가)
    let operArr = my_string.match(/[\+-]/g);
    let answer = numArr.shift();
    
    operArr.map((val, idx) => {
        const oper = operObj[val];
        answer = oper(answer, numArr[idx]);
    });
    
    return answer;    
}