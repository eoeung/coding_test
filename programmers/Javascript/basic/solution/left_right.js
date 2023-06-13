/**
 * 제목: 왼쪽 오른쪽
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181890?language=javascript
 */

function solution(str_list) {
    const l1 = str_list.includes("l");
    const l2 = str_list.indexOf("l");
    const r1 = str_list.includes("r");
    const r2 = str_list.indexOf("r");

    if(l1+r1 === 2){ // l과 r이 모두 존재
        if(l2 > r2){ // r2가 먼저 나왔으므로 오른쪽 문자열 반환
            return str_list.slice(r2+1); // r은 제외
        } else{ // l2가 먼저 나왔으므로 왼쪽 문자열 반환 
            return str_list.slice(0, l2); // l은 제외
        }
    } else if(l1+r1 === 1){ // l과 r중 하나만 존재
        if(l1 > 0){ // l이 존재
            return str_list.slice(0, l2);
        } else{ // r이 존재
            return str_list.slice(r2+1);
        }
    } else{ // 모두 없음
        return [];
    }
}


/**
 * 다른 분의 풀이
function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}
 * 처음부터 l이나 r을 찾아서 slice()하여 반환하면 됐었던 문제였다..
 * ※ array.slice(0)은 array를 반환한다!
 * l이나 r이 없다면 빈 문자열을 반환
 */