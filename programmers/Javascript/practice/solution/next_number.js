/**
 * 제목: 다음에 올 숫자
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120924?language=javascript
 */

function solution(common) {
    if(common.length % 2 == 0){ // 요소가 짝수개 있을 경우
        if(common[0] + common[common.length-1] === common[common.length/2-1] + common[common.length/2]){ // 등차수열
            return common[common.length-1] + (common[1] - common[0]);
        } else{ // 등비수열
            return common[common.length-1] * (common[1] / common[0]);
        }
    } else{
        if(common[0] + common[common.length-1] === common[Math.trunc(common.length/2)]*2){ // 등차수열
            return common[common.length-1] + (common[1] - common[0]);
        } else{ // 등비수열
            return common[common.length-1] * (common[1] / common[0]);
        }
    }
}