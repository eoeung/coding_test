/**
 * 제목: 배열 회전시키기
 * URL: 
 */

function solution(numbers, direction) {
    let answer = [];
    
    if(direction === 'right'){
        let last = numbers[numbers.length-1];
        
        answer = numbers.slice(0, numbers.length-1);
        answer.unshift(last);
    } else{
        let first = numbers[0];
        
        answer = numbers.slice(1);
        answer.push(first);
    }
    
    return answer;
}


/**
 * 다른 분의 풀이
function solution(numbers, direction) {
  return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}
 * 원래 하고 싶었던 방법이었으나, 잘 되지 않아서 이상하게 풀었다.
 * 배열을 합치는 방법 중 concat을 생각하고 있었으나 하나의 값만 반환하면 되기 때문에 필요가 없다고 판단했다.
 * 이 풀이 중 핵심은 반환 값에 있는 [ ~~~ ]과 ...numbers.slice()였다.
 * → []로 선언한 array이며 numbers.lice() 결과값인 array를 ...(spread syntax) 구문을 사용해서 쭉 펼쳐 각각의 요소를 반환하도록 했다.
 * 최종적으로 하나의 값 + 쭉 펼쳐진 요소들에 []가 씌인 array를 반환하게 되는 것이다.
 */