/**
 * 제목: 다항식 더하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120863?language=javascript
 */

function solution(polynomial) {
    const x = 'x';
    let polyX = 0;
    let num = 0;
    
    polynomial.split(' + ').map((val => {
        if(val.indexOf(x) > -1){
            // x앞에 숫자가 있으면 숫자를 더하고, 없으면 0을 더함
            val.indexOf(x) > 0 ? polyX += +val.slice(0, val.length-1) : polyX += 1;
        } else{
            num += +val;
        }
    }));
    
    let result = polyX+x;
    if(polyX <= 1) result = result.replace(/[0-1]/g, '');
    
    if(polyX < 1) return num+'';
    else return num ? result + ' + ' + num : result ;
}