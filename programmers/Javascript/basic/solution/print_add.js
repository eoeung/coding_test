/**
 * 제목: 덧셈식 출력하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181947?language=javascript
 * 
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    // console.log(input); // [ '4', '5' ]
}).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    console.log(`${a} + ${b} = ${a+b}`);
});