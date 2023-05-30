/**
 * 제목: 코드 처리하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181932?language=javascript
 */

function solution(code) {
    let mode = false; // 시작할 때 mode는 0부터 시작
    let answer = '';
    
    for(let i=0; i<code.length; i++){
        if(code[i] === '1'){ // code[idx]가 1이면 mode 변경
            mode = !mode;
            continue;
        }
        
        if(mode){ // mode가 1인 경우
            // idx가 홀수일 때만 추가
            if(i % 2 != 0) answer += code[i];
            
        } else{ // mode가 0인 경우
            // idx가 짝수일 때만 추가
            if(i % 2 == 0) answer += code[i];
            
        }
    }
    
    return (answer.length > 0) ? answer : 'EMPTY';
    
}