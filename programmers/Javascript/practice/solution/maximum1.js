/**
 * 제목: 최댓값 만들기(1)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript
 */

function solution(numbers) {
    // 음수가 없으므로 큰 값 2개를 곱해주면 된다.
    return numbers.sort(((a,b) => b-a)).reduce((acc, val, idx) => {
        if(idx < 2) acc *= val;
        return acc;
    }, 1);
}