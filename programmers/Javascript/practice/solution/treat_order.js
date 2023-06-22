/**
 * 제목: 진료순서 정하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120835?language=javascript
 */

function solution(emergency) {
    let answer = new Array(emergency.length);
    
    for(let i=0; i<emergency.length; i++){
        let rank = emergency.length;
        
        for(let j=0; j<emergency.length; j++){
            if(emergency[i] > emergency[j]){
                rank -= 1;
            }
        }
        
        answer[i] = rank;
    }
    
    return answer;
}