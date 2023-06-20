/**
 * 제목: 분수의 덧셈
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120808?language=javascript
 */

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    const max = Math.max(denom1, denom2);
    
    if((max % denom1 == 0) && (max % denom2 == 0)){ // 둘 중에 큰 수로 맞춰주면 됨
        answer.push((numer1 * (max / denom1)) + (numer2 * (max / denom2)));
        answer.push(max); // 어차피 큰 값을 분모로 취하면 됨
    } else{ // 최소공배수를 구해서 맞춰줘야 함 => 일단 서로 다른 분모값을 곱해줌
        answer.push((numer1 * denom2) + (numer2 * denom1));
        answer.push(denom1 * denom2); // 분모는 똑같기 때문에, 하나만 넣어줘도 됨
    }
    
    // 마지막으로 기약 분수로 만들 수 있다면, 만들어준다.
    return [answer[0] / gcd(answer), answer[1] / gcd(answer)];
}

// 최대공약수를 구하는 함수
function gcd(array){
    const arrMin = Math.min(...array); // spread operator(전개 연산자) → 배열의 값이 하나씩 꺼내어져서 들어감
    let [numer, denom] = array;
    let gcd = 1;
    
    for(let i=gcd; i<=arrMin; i++){
        if((numer % i == 0) && (denom % i == 0)) gcd = i;
    }
    
    return gcd;
}


/**
 * 다른 분의 풀이
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}
 * 최대공약수를 구하기 위해 재귀함수를 사용했음
 * denum이 분자, num이 분모라고 생각됨
 */