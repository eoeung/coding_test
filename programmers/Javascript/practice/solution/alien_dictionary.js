/**
 * 제목: 외계어 사전
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript
 */

function solution(spell, dic) {
    let arr = dic.filter(val => {
        // spell에 있는 단어가 무조건 1개씩 들어가야 하므로, spell의 길이보다 작은 건 패스한다.
        if(val.length >= spell.length){
            for(let char of spell){
                val = val.replace(char, '');
            }
        }
        
        return val.length === 0;
    });
    
    return arr.length > 0 ? 1 : 2;
}


/**
 * 다른 분의 풀이
 function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
 * array.some()을 이용해 풀은 코드이다.
 * array.some()은 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.
 * 비슷한 메서드로 array.every()가 있는데, 이 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다.
 * [풀이]
 * spell 배열에 있는 요소를 문자열로 변환하고 정렬한 값을 주어진 문자열을 정렬시킨 값과 똑같은지 확인해서 하나라도 똑같으면 1, 모두 다르면 2를 반환하는 풀이이다.
 */