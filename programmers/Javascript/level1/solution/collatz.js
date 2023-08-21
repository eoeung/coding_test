/**
 * 제목: 콜라츠 추측
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
 */

function solution(num) {
    if(num === 1) return 0;
    let cnt = 0;
    
    while(cnt < 500){
        if(num % 2) num = (num*3) + 1;
        else num /= 2;
        
        cnt++;
        
        if(num === 1) break;
    }
    
    return cnt === 500 ? -1 : cnt;
}