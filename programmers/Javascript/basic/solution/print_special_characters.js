/**
 * 제목: 특수문자 출력하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181948?language=javascript
 * 
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log('!@#$%^&*(\\\'"<>?:;'); // escaping
});