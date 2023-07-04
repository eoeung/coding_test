/**
 * 제목: 영어가 싫어요
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120894?language=javascript
 */

const engToNumObj = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
    "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
}

function solution(numbers) {
    let answer = '';
    let temp = '';
    
    for(let str of numbers){
        temp += str;
        
        if(engToNumObj.hasOwnProperty(temp)){ // 해당 속성이 있는지 확인
            answer += engToNumObj[temp];
            temp = '';
        }
    }
    
    return +answer;
}