/**
 * 제목: 이진수 더하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120885?language=javascript
 */

function solution(bin1, bin2) {
    // 파라미터로 받은 문자열(bin1(string))을 2진수(2(radix))로 읽어 10진수 숫자형으로 변환(parseInt)해준다.
    // ※ parseInt("2", 2) => NaN이 나오는데, 2라는 문자열은 2진수(0과 1)로는 읽을 수 없어서 NaN을 반환함
    // 파라미터로 오는 문자열(string)이 읽어 들일 진수 값(radix)으로 읽을 수 있어야 한다.
    let result = parseInt(bin1, 2) + parseInt(bin2, 2);
    return result.toString(2); // 10진수로 반환 된 값을 2진수로 변환
}