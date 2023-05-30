/**
 * 제목: 홀짝 구분하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181944?language=javascript
 * 
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;

rl.on('line', function (line) {
    n = Number(line);
}).on('close', function () {
    if(n%2==0){
        console.log(`${n} is even`);
    } else{
        console.log(`${n} is odd`);
    }
});