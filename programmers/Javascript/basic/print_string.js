/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181952?language=javascript
 * 
 * 1) 문제 설명
 * - 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
 * 
 * 2) 제한사항
 * - 1 ≤ str의 길이 ≤ 1,000,000
 * - str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.
 * 
 * 3) 입출력 예
 * - 입력 #1
 * | HelloWorld!
 * 
 * - 출력 #1
 * | HelloWorld!
 */

const readline = require('readline'); // readline 모듈 호출
const rl = readline.createInterface({ // 인터페이스 생성
    input: process.stdin, // 
    output: process.stdout // 
});

// 입력 값을 받을 배열을 선언
let input = [];

rl.on('line', function (line) {
    // 입력 부분 및 입력값 처리
    // 공백이 없고 첫째 줄에 한 줄로만 주어지므로 push()사용하지 않고 바로 배열의 요소로 받아버림
    input = [line];
    rl.close(); // 입력 받는 작업을 종료
}).on('close',function(){
    // 출력 부분
    str = input[0]; // 첫 번째 인덱스에 값이 있으므로 str로 받음
    console.log(str);
    process.exit(); // 프로세스 종료
});