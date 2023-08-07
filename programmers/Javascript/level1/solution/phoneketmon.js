/**
 * 제목: 폰켓몬
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
 */

function solution(nums) {
    // N/2마리 가능
    // 가질 수 있는 폰켓몬 종류 수의 최대값 리턴
    let numSet = new Set(nums);
    
    if(numSet.size < (nums.length/2)){
        return numSet.size;
    } else if(numSet.size > (nums.length/2)){
        return nums.length/2;
    } else{
        return numSet.size;
    }
    
}

// 다른 분의 풀이를 보고 다시 작성
/*
function solution(nums) {
    // N/2마리 가능
    // 가질 수 있는 폰켓몬 종류 수의 최대값 리턴
    let numSet = new Set(nums);
    
    // 다른 분의 풀이를 보고 다시 작성
    return numSet.size < nums.length/2 ? numSet.size : nums.length/2;
}
*/