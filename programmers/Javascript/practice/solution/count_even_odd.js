/**
 * 제목: 짝수 홀수 개수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=javascript
 */

function solution(num_list) {
    return num_list.reduce((acc, val) => {
        // 짝수 = acc[0] / 홀수 = acc[1]
        if(val % 2 == 0) acc[0] += 1;
        else acc[1] += 1;
        
        return acc;
    }, [0, 0]);
}