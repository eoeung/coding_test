/**
 * 제목: 구슬을 나누는 경우의 수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120840?language=javascript
 */

let memoization_factorial = {'0': 1, '1': 1, '2': 2};

function factorial(num){
    // memoization 사용 안하는 경우
    // if(num <= 2) return num;
    // else return num * factorial(num-1);
    
    // memoization 사용
    if(num > 2){
        for(let i=3; i<=num; i++){
            memoization_factorial[i] = memoization_factorial[i-1] * i;
        }
    } else{
        return memoization_factorial[num];
    }
}

function solution(n, m) {
    factorial(Math.max(n, m));
    
    // 소수점으로 나오는 문제때문에 반올림 진행
    return Math.round(memoization_factorial[n] / (memoization_factorial[n-m] * memoization_factorial[m]) );
}
