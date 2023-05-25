/**
 * 제목: 문자열 반복해서 출력하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181950?language=javascript
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let answer = '';
    // console.log(typeof(input[1])); // string
    for(let i=0; i<input[1]; i++){ // input[1]을 Number로 바꿔주어야 좋은 코드가 됨
        answer += input[0];
    }
    console.log(answer);
});