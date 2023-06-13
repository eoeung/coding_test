/**
 * 제목: 그림 확대
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181836?language=javascript
 */

function solution(picture, k) {
    let answer = [];
    
    picture.map(val => {
        // 1. 문자열에 있는 모든 요소들을 k배
        let temp = '';
        for(const str of val.split('')){
            temp += str.repeat(k);
        }
        
        // 2. k배한 문자열을 k만큼 배열에 저장
        for(let i=0; i<k; i++) answer.push(temp);
    });
    
    return answer;
}