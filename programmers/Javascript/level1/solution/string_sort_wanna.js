/**
 * 제목: 문자열 내 마음대로 정렬하기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
 */

function solution(strings, n) {
    strings.sort((a,b) => {
        let tempA = a[n].codePointAt();
        let tempB = b[n].codePointAt();
        
        if(tempA === tempB){
            for(let i=0; i<Math.min(a.length,b.length); i++){
                let tempAi = a[i].codePointAt();
                let tempBi = b[i].codePointAt();
                
                if(tempAi === tempBi) continue
                else{
                    if(tempAi > tempBi) return 1;
                    else if(tempAi < tempBi) return -1;
                    else return 0;
                }
            }
            
            return a.length - b.length; // a, b가 모두 똑같은데, 길이가 다를 경우 → Ex. bed, bedroom
        } else return tempA - tempB;
    });
    
    return strings;
}

/*
 * 다른 분의 풀이
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

 * localCompare()을 사용해서 해당 인덱스의 문자열이 같은 경우에는 문자열 전체를 비교해준다.
*/