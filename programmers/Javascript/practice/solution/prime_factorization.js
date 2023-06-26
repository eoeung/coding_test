/**
 * 제목: 소인수분해
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120852?language=javascript
 */

function solution(n) {
    // 4,6,9 같이 소수가 아닌 숫자는 걱정할 필요가 없음
    // 4,6은 2로, 9는 3으로 나눠지기 때문에
    // 4,6은 각각 n%2에서 미리 걸러져서 n%4, n&6 연산을 하지 않는다.
    // 마찬가지로 9는 미리 n%3에서 걸러져서 n%9 연산을 하지 않는다.
    // -> 이 원리로 module연산을 수행해서 소수만 걸러낼 수 있게 된다.
    let pnArr = [];
    let num = 2;
    
    while(n !== 1){ // 무조건 n은 마지막에 1이 된다.
        if(n%num === 0) {
            n /= num;
            pnArr.push(num);
        } else{
            num += 1;
        }
    }
    
    return Array.from(new Set(pnArr)); // Set을 이용해 중복을 제거해준다.
}