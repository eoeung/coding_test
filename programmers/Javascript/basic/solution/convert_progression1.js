/**
 * 제목: 조건에 맞게 수열 변환하기 1
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181882?language=javascript
 */

function solution(arr) {
    return arr.map(v => {
        if(v >= 50 && (v % 2 == 0)) return v/2;
        else if((v < 50) && (v % 2 != 0)) return v*2;
        else return v;
    });
}