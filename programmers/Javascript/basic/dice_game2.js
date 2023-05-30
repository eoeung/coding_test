/**
 * 제목: 주사위 게임2
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181930
 */

function solution(a, b, c) {
    let pow;
    let answer = 1;
    let dice_arr = [a, b, c];
    let dice_obj = {};
    dice_arr.reduce((acc, curVal) => { // 중복 개수를 구한다.
        return dice_obj[curVal] = (dice_obj[curVal] || 0) + 1; // object에 주사위 숫자가 없으면 undefined이므로 || 0 추가
    }, {});
    
    pow = Math.max(...Object.values(dice_obj)); // 총 몇 제곱까지 할 지를 구해준다.
    for(let i=1; i<(pow+1); i++){
        let temp = dice_arr.map(x => Math.pow(x,i)); // 기존 배열에 pow만큼 제곱한 배열을 반환한다.
        answer *= temp.reduce((acc, curVal) => { // 쭉 누적해서 더해준 다음, 최종 결과에는 곱한 값을 반환해준다.
            return acc += curVal;
        }, 0);
    }
    
    return answer;
}