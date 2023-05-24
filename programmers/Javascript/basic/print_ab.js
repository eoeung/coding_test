/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181951?language=javascript
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
    // console.log(line); // 4 5 -> 입출력 예
    // console.log(input); // [ '4', '5' ]
}).on('close', function () {
    console.log(`a = ${input[0]}`);
    console.log(`b = ${input[1]}`);
});