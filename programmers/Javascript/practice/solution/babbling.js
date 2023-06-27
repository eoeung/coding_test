/**
 * 제목: 옹알이 (1)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript
 */

function solution(babbling) {
    let reg = /aya|ye|woo|ma/g;
    
    // 길이가 0인 것만 배열로 반환해주므로, 반환된 배열의 총 길이값이 발음할 수 있는 단어의 개수이다.
    return babbling.filter(val => val.replace(reg, '').length === 0).length;
}