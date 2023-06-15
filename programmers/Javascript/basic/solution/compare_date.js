/**
 * 제목: 날짜 비교하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181838?language=javascript
 */

function solution(date1, date2) {
    return Number( Number(addZero(date1)) < Number(addZero(date2)) );
}

function addZero(date){
    let year =  String(date[0]);
    let month = String(date[1]);
    let day =   String(date[2]);
    
    if(year.length < 4){
        year = '0'.repeat(4-year.length) + year;
    }
    
    if(month.length < 2){
        month = '0'.repeat(2-month.length) + month;
    }
    
    if(day.length < 2){
        day = '0'.repeat(2-day.legnth) + day;
    }
    
    return year + month + day;
}

// 다른 분의 풀이
// const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0
// Date 객체를 사용해서 날짜를 비교