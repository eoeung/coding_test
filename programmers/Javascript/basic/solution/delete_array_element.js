/**
 * 제목: 배열의 원소 삭제하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181844?language=javascript
 */

function solution(arr, delete_list) {
    return arr.filter(v => !delete_list.includes(v));
}