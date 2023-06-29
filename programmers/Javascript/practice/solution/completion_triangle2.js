/**
 * 제목: 삼각형의 완성조건 (2)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120868?language=javascript
 */

function solution(sides) {
    let answer = 0;
    // 가장 긴 변이 sides 안에 있는 경우
    // Math.max(x,y) < Math.min(x,y) + z
    const min = Math.min(...sides);
    const max = Math.max(...sides);
    
    for(let i=1; i<=max; i++){ // 변의 길이는 1이상
        if(i+min > max) answer += 1;
    }
    
    // 가장 긴 변이 sides 안에 없는 경우
    // x+y < z
    for(let i=max+1; i<min+max; i++){ // 가장 긴 변 = max+1부터 ~ min+max보다 작아야한다.
        answer += 1;
    }
    
    return answer;
}