/**
 * 제목: k의 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript
 */

function solution(i, j, k) {
    let answer = 0;
    let reg = new RegExp(`${k}+?`, 'g'); // +? = {1} = (1 or +infinity) && (0 or 1)
    
    for(let a=i; a<=j; a++){
        let matchArr = a.toString().match(reg);
        if(matchArr) answer += matchArr.length;
    }
    
    return answer;
}