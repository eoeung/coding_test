/**
 * 제목: 배열 만들기 2
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181921?language=javascript
 */

function solution(l, r) {
    let answer = [];
    const FIVE = 5;
    
    for(let i=l; i<=r; i++){
        if(String(i)[0] == FIVE){ // 0과 5로만 이루어지려면 맨 앞 숫자가 5로 되어야 함
            if(/[^0-1]+/.exec(String(i/FIVE))){ // 맨 앞 숫자가 5인데 5로 나눴을 때, 0이나 1이외의 다른 수가 나오면 제외
                continue;
            } else{
                answer.push(i);
            }
        }
    }
    
    return (answer.length > 0) ? answer : [-1];
}

// ps: l이 5, r이 555일 때의 예제에서 result를 보면 [5, 50, 55, 500, 505, 550, 555]이라고 되어있다.
// 결과를 5로 나눠보면 [1, 10, 11, 100, 101, 110, 111]이 되는데, 이 수들은 이진법으로 1, 2, 3, 4, 5, 6, 7이 된다.
// l부터 시작, l을 5로 나눴을 때 시작하는 이진법의 수(5/5=1(10)=1(2))부터 r을 l로 나눈 몫(555/5 = 111) 이하까지의 모든 이진수가 해당한다.
// 다만 이것을 코드로는 구현하지 못해서 5로 나눈 값을 정규표현식을 활용해서 풀었다.