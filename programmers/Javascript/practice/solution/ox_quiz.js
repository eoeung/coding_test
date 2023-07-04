/**
 * 제목: OX퀴즈
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120907?language=javascript
 */

const operObj = {
    '-': (x, z) => +x - +z,
    '+': (x, z) => +x + +z,
}
    
function solution(quiz) {
    let answer = quiz.reduce((acc, val) => {
        let [x, op, y, _, z] = val.split(' '); // Ex) 3 - 4 = -3
        
        const oper = operObj[op];
        acc.push(oper(x,y) === +z ? 'O' : 'X');
        
        return acc;
    }, []);

    return answer;
}