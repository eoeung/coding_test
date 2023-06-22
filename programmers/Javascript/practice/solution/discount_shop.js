/**
 * 제목: 옷가게 할인 받기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120818?language=javascript
 */

function solution(price) {
    if(price >= 500000) return Math.floor(price*0.8);
    else if(price >= 300000) return Math.floor(price*0.9);
    else if(price >= 100000) return Math.floor(price*0.95);
    else return price;
    
    // return price >= 500000 ? Math.floor(price*0.8) : (price >= 300000 ? Math.floor(price*0.9) : (price >= 100000 ? Math.floor(price*0.95) : price));
}