/**
 * 제목: 2차원으로 만들기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120842?language=javascript
 */

function solution(num_list, n) {
    let tempArr = [];
    
    return num_list.reduce((acc, val, idx) => {
        tempArr.push(val);
        if((idx+1) % n === 0){
            acc.push(tempArr);
            tempArr = [];
        }
        
        return acc;
    }, []);
}


/**
 * 다른 분의 풀이
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}
 * array.splice(start, deleteCount)
 * start: 시작 인덱스 (*required)
 * deleteCount: 삭제할 요소의 개수 (option)
 * num_list.splice(0,n)의 결과값은 다음과 같다.
 */

/**
num_list = [1,2,3,4,5,6,7,8]
n = 2

[ 1, 2 ]
[ 3, 4 ]
[ 5, 6 ]
[ 7, 8 ]

→ 0번째 인덱스부터 n개씩 삭제하며,
새로운 배열을 반환하지 않고 기존 배열을 변경한 후, 반환한다.
 */