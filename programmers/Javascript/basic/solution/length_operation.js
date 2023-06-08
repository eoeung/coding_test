/**
 * 제목: 길이에 따른 연산
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181879?language=javascript
 */

function solution(num_list) {
    return num_list.length > 10 ? sum(num_list) : mul(num_list);
}

// 리스트의 길이가 11이상 -> 모든 원소의 합
function sum(list){
    return list.reduce((acc, val) => acc += val);
}

// 리스트의 길이가 10이하 -> 모든 원소의 곱
function mul(list){
    return list.reduce((acc, val) => acc *= val);
}


/**
 * 다른 분의 풀이
 const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v)
 * reduce() 안에서 길이가 10인지 확인한 다음, 다른 연산을 3항 연산자로 적용해준다.
 */
