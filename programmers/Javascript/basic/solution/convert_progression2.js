/**
 * 제목: 조건에 맞게 수열 변환하기 2
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181881?language=javascript
 */

function solution(arr) {
    let cnt = 0;
    let temp = [[...arr]];
    let tempArr = [...arr];
    
    while(true){
        tempArr = tempArr.map(v => {
            if((v >= 50) && (v % 2 == 0)) return v/2;
            else if((v < 50) && (v % 2 != 0)) return v*2+1;
            else return v;
        });
        
        temp.push(tempArr);
        cnt++;
        
        if(temp[cnt-1].join('') === temp[cnt].join('')) break;
    }
    
    return cnt-1;
}

/**
 * 다른 분의 풀이
function solution(arr, n = 0) {
    while(!arr.every(x => (x >= 50 && x % 2 === 1) || (x < 50 && x % 2 === 0))) {
        arr = arr.map(x => {
            if (x >= 50 && x % 2 === 0) return x / 2;
            if (x < 50 && x % 2 === 1) return x * 2 + 1;
            return x;
        })
        n++;
    }
    return n;
}
 * Array.prototype.every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다.
 * 반환 값은 Boolean값이다.
 * 배열 안의 요소 중 하나라도 통과하지 못하면 false를 반환한다.
 */