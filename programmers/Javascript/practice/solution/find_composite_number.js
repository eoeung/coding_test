/**
 * 제목: 합성수 찾기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120846?language=javascript
 */

function solution(n) {
    let answer = 0;
    if(n > 3){
        for(let i=1; i<=n; i++){ // 1~n까지의 수
            let temp = 0;
            
            for(let j=1; j<=i; j++){ // 1부터 주어진 수를 쭉 나눈다.
                if(i%j === 0) temp += 1;
                if(temp === 3){
                    answer += 1;
                    break;
                }
            }
        }
    }    
    
    return answer;
}