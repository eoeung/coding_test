/**
 * 제목: 등차수열의 특정한 항만 더하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181931?language=javascript
 */

function solution(a, d, included) {
    let answer = 0;
    let now = a;
    
    for(let boo of included){
        if(boo) answer += now;
        now += d;
    }
    
    return answer;
}


/**
 * 다른 분의 풀이
 * Array.prototype.reduce() 익숙해지기
 * 
 function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}
 * included.reduce(함수, 초기값)
-> 
 * included.reduce((최종 반환값, included에서 하나씩 가져오는 요소, 인덱스) => {함수}, 초기값(->최종 반환값의 초기값을 지정해줌))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// https://hianna.tistory.com/408
let value = arr.reduce(function(accumulator, currentValue, currentIndex, array) {
   // ... 
}, [initialValue]);
 */