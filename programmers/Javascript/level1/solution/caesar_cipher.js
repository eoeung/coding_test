/**
 * 제목: 시저 암호
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
 */

function solution(s, n) {
    let answer = '';
    
    for(let str of s){
        if(str.trim().length !== 0){
            let uzsc = 'Z'.charCodeAt();
            let lzsc = 'z'.charCodeAt();
            let sc = str.charCodeAt();
            const alphaCnt = 26;
            
            // 소문자, 대문자가 밀리지 않도록 처리
            if(sc > uzsc){ // 소문자
                if(sc + n > lzsc){ // 밀고나서 소문자가 아닌 ascii인 경우
                    answer += String.fromCodePoint(sc + n - alphaCnt);
                } else{ // 밀고나서도 소문자인 경우
                    answer += String.fromCodePoint(sc + n);
                }
            } else{ // 대문자
                if(sc + n > uzsc){ // 밀고나서 대문자가 아닌 ascii인 경우
                    answer += String.fromCodePoint(sc + n - alphaCnt);
                } else{ // 밀고나서도 소문자인 경우
                    answer += String.fromCodePoint(sc + n);
                }
            }
        } else{
            answer += str;
        }
    }
    
    return answer;
}