/**
 * 제목: 직사각형 별찍기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript
 */

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i=0; i<b; i++){ // 세로: b
        console.log('*'.repeat(a)); // 가로: a
    }
});