/**
 * 제목: 간단한 식 계산하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181865?language=javascript
 */

function solution(binomial) {
    const oper = (a, op, b) => {
        if(op === '+') return Number(a)+Number(b);
        if(op === '-') return Number(a)-Number(b);
        if(op === '*') return Number(a)*Number(b);
    };
    
    const [a, op, b] = binomial.split(/ ([\+\-\*]) /g);
    
    return oper(a, op, b);
}


/**
 * 다른 분의 풀이
const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}
 * 원래 짜고 싶었던 코드이다.
 * 계산을 객체로 만든 다음, split하여 얻어온 op값으로 객체[op](인자1, 인자2)로 받아 계산한 결과값을 return하는 식이다.
 */