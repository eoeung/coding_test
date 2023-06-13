/**
 * 제목: 1로 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181880?language=javascript
 */

function solution(num_list) {
    return num_list.reduce((acc, num) => {
        while(true){
            if(num == 1)         break;
            else if(num % 2)     num = (num-1) / 2;
            else                 num /= 2;
            
            acc += 1;
        }
        
        return acc;
    }, 0);
}