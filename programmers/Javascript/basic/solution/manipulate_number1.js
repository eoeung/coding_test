/**
 * 제목: 수 조작하기 1
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181926?language=javascript
 */

const operations = {
    'w': 1,
    's': -1,
    'd': +10,
    'a': -10,
};

function solution(n, control) {
let answer = n;

for(let i of control){
    answer += operations[i];
}

return answer;
}


/**
 * 다른 분의 풀이
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
 * 애초에 object내에 함수를 만들어서 적용하고 싶었으나 실패.. 마침 적용하신 분의 코드가 있어서 가지고 옴
 * object에는 변화시킬 값인 n과 wasd로 인한 연산을 함수로 만들어 준다.
 * control을 깊은 복사 시킨 후에 초기값을 n으로 놓고, control 배열 안에 있는 wasd값으로 reduce()를 적용한다.
 */