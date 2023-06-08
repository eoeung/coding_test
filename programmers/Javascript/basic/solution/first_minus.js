/**
 * 제목: 첫 번째로 나오는 음수
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181896?language=javascript
 */

function solution(num_list) {
    let answer = -1;
    
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] < 0){
            answer = i;
            break;
        }
    }
    
    return answer
}


/**
 * 다른 분의 풀이 
function solution(num_list) {
    let a = num_list.filter(c=> {if(c<0) return c})
    return num_list.indexOf(a[0])
}
 * filter를 사용해서 하고자 했으나 실패하였음
 * filter 결과로는 새로운 배열이 반환됨
 * 음수인 모든 수를 배열로 반환해서 그 배열의 값에서 처음으로 받아온 값을 num_list.indexOf() 메서드를 통해 인덱스를 구한다.
 */