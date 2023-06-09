/**
 * 제목: 뒤에서 5등 위로
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181852?language=javascript
 */

function solution(num_list) {
    return num_list.sort((a,b) => a-b).slice(5); // sort() 안에 a-b함수를 이용해서 작은 값 부터 정렬
}