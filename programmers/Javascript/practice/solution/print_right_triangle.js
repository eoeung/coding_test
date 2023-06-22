/**
 * 제목: 직각삼각형 출력하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript
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
    let n = Number(input[0]);
    for(let i=1; i<=n; i++){
        console.log('*'.repeat(i));
    }
});