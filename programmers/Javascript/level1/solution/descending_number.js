/**
 * 제목: 정수 내림차순으로 배치하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12933?language=javascript
 */

function solution(n) {
    let answer =  String(n).split('')
                           .sort((a,b) => b-a)
                           .join('');
    
    return parseInt(answer, 10);
}

/**
 * 다른 분의 풀이
 var nums =[];
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)

    return nums.sort((a,b)=>b-a).join('')*1;

 * 숫자로 풀이한 방법이다.
 * 10으로 나머지 연산을 한 수(→ 일의 자리 숫자)를 배열에 넣는 형식으로 진행한다.
 * 그 다음에는 처음 값을 10으로 나눈 값을 소수점을 모두 버림으로써 온전하게 정수를 가져온다.
 */