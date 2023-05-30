/**
 * 제목: 수 조작하기 2
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181925?language=javascript
 */

const log = {
    '1'   : 'w',
    '-1'  : 's',
    '10'  : 'd',
    '-10' : 'a',
}

function solution(numLog) {
    let logArr = [...numLog];
    let temp = logArr[0];
    let answer = '';
    
    for(let i=0; i<logArr.length; i++){
        if(i == 0) continue;
        answer += log[logArr[i]-temp];
        temp = logArr[i];
    }
    
    console.log(numLog.slice(1));
    
    return answer;
}


/**
 * 다른 분의 풀이
 * 
function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}
 * object를 생성하는 것은 동일하게 진행했다. 하지만 살짝의 트릭을 사용한 풀이를 가지고 왔다.
 * slice(1)로 가지고 와서 1인덱스 부터 시작하는 새로운 배열에 map()메서드를 걸고, 비교 대상의 값은 v - numLog[i]로 지정해주었다. (v는 numLog.slice(1)의 현재 값이고, i는 인덱스이므로 0부터 시작 -> numLog에는 0인덱스의 값이 있으므로 1인덱스 값과 0인덱스 값 비교가 가능해진다!)
 * Array.prototype.map() 메서드는 배열을 반환해주므로, 마지막에 join('')을 사용해서 띄어쓰기 없는 문자열을 반환해준다.
 */