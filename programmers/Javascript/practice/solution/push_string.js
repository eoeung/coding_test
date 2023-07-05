/**
 * 제목: 문자열 밀기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120921?language=javascript
 */

function solution(A, B) {
    let cnt = 0;
    
    for(cnt; cnt<A.length; cnt++){
        if(A === B) return cnt;
        A = A[A.length-1] + A.slice(0, A.length-1);
    }
    
    return cnt === A.length ? -1 : cnt;
}


/**
 * 다른 분의 풀이
let solution=(a,b)=>(b+b).indexOf(a);
 * 어차피 다 밀어도 1번만 밀면 되기 때문에, 결과값인 b를 2배하여 a를 찾는 방법이다.
 */