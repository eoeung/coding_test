/**
 * 제목: 배열 비교하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181856?language=javascript
 */

function solution(arr1, arr2) {
    if(arr1.length > arr2.length) return 1;
    else if(arr1.length < arr2.length) return -1;
    else{ // 배열의 길이가 같을 때
        let arr1Sum = arr1.reduce((acc, val) => acc += val);
        let arr2Sum = arr2.reduce((acc, val) => acc += val);
        
        return arr1Sum === arr2Sum ? 0 : ((arr1Sum > arr2Sum) ? 1 : -1);
    }
}