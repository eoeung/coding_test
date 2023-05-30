/**
 * 제목: 마지막 두 원소
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181927?language=javascript
 */

function solution(num_list) {
    let answer = [...num_list];
    let lastNum = num_list.at(-1);
    let frontLastNum = num_list.at(-2);
    
    if(lastNum > frontLastNum){
        answer.push(lastNum-frontLastNum)
    } else{
        answer.push(lastNum*2)
    }
    
    return answer;
}

/**
 * 파이썬에서 array[-1] 처럼 음수 인덱스를 사용해서 접근하고 싶을 때는,
 * array.at(index)를 사용하면 된다!
 */

/**
 * 다른 분의 풀이
 * 
 function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
 * [...array]로 깊은 복사를 한 배열에서, .reverse() 메서드로 순서만 뒤집은 다음, 맨 앞에 있는 원소 2가지만 가지고 온다.

Ex) let num_list = [1,2,3,4,5,6,8,100,200,9,38,-2,-5]; 이라는 배열이 존재하는 경우, num_list.reverse()를 하게 되면 [ -5, -2, 38, 9, 200, 100, 8, 6, 5, 4, 3, 2, 1 ]라는 배열이 된다.
 */