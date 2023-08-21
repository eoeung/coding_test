/**
 * 제목: 최대공약수와 최소공배수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
 */

function solution(n, m) {
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    
    // 최대공약수
    // console.log(GCD(min, max));
    
    // 최소공배수
    // console.log(LCM(min, max));
    
    return [GCD(min, max), LCM(min, max)];
    
}

// 최대공약수
function GCD(min, max){
    let gcd = 1;
    
    for(let i=2; i<=min; i++){ // 작은 값이 제일 큰 최대공약수로 기대되므로, min까지만 설정해도 됨
        if(max%i === 0 && min%i === 0) gcd = i;
    }
    
    return gcd;
}

// 최소공배수
function LCM(min, max){
    let lcm = 1;
    let temp = 2;
    
    while(temp <= min){
        // console.log(lcm, temp, min, max);
        if(max%temp===0 && min%temp===0){
            lcm*=temp;
            max/=temp;
            min/=temp;
        } else{
            temp++;
        }
    }
    
    // console.log('-------');
    // console.log(lcm, temp, min, max);
    return lcm * max * min; // 최종적으로 모두 곱해준다.
}