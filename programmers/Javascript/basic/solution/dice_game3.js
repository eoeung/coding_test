/**
 * 제목: 주사위 게임 3
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181916?language=javascript
 */

function solution(a, b, c, d) {
    const set = new Set([a,b,c,d]);
    let obj = [a,b,c,d].reduce((acc, val) => {
        if(acc[val]) acc[val] += 1;
        else acc[val] = 1;

        return acc;
    }, {});
    
    switch(set.size){
        case 1: // 4개 숫자 모두 같은 경우 → `1111 x p`
            return 1111 * Math.max(Array.from(set));
            break;
            
        case 2:
            const tempKeySet = new Set(Object.keys(obj));   // 3-1과 2-2를 구분
            const tempValSet = new Set(Object.values(obj)); // 3-1과 2-2를 구분
            let p = 0; // 3개의 같은 숫자
            let q = 0;
            
            if(tempValSet.size === 1){ // 2개씩 같은 숫자인 경우 → `(p + q) × |p - q|`
                const iterator = tempKeySet.values();
                p = +iterator.next().value;
                q = +iterator.next().value;
                
                return (p+q) * Math.abs(p-q);
            }
            else if(tempValSet.size === 2){ // 3개의 숫자가 같은 경우 → (10 × p + q)^2
                for(let [key, val] of Object.entries(obj)){
                    if(val === 3) p = +key;
                    else          q = +key;
                }    
                
                return Math.pow(10*p+q, 2);
            }
            break;
            
        case 3: // 2개의 숫자가 같고, 나머지 하나씩 숫자가 다른 경우 → `q x r`
            let tempArr = [];
            
            for(let [key, val] of Object.entries(obj)){
                if(val === 1) tempArr.push(+key);
            }
            
            return tempArr.reduce((acc, val) => acc *= val, 1);
            break;
            
        case 4: // 모두 다른 경우 → 최소값
            return Math.min(a,b,c,d);
            break;
    }
}