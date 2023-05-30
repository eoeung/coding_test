/**
 * 제목: 수열과 구간 쿼리 3
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181924?language=javascript
 */

function solution(arr, queries) {
    for(let ij of queries){
        let temp = arr[ij[0]];
        
        arr[ij[0]] = arr[ij[1]];
        arr[ij[1]] = temp;
    }
    
    return arr;
}
// 하드코딩으로 [0]과 [1]을 가져오도록 작성했는데, 잘못했다는 것을 알면서도 도저히 방법이 떠오르지가 않아서 일단은 완성시켰다.


/**
 * 다른 분의 풀이
 * 
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}
 * array.forEach()를 사용했다.
 * forEach에 넣을 인수를 내 방식처럼 하나만 가지고 넣는 것이 아니라, queries에 들어있는 요소 처럼 [a,b](Ex. [0,3])처럼 넣는 것이 포인트이다.
 * 
 * [arr[a], arr[b]] = [arr[b], arr[a]] 부분이 이해가 가지 않았는데,
 * https://www.freecodecamp.org/news/swap-two-array-elements-in-javascript/
 * destruturing(구조 분해)라는 방법을 사용하였다.
 * 새로운 배열을 만들어 역순으로 넣어주는 방법이다.
 */