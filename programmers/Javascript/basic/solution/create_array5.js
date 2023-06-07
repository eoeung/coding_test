/**
 * 제목: 배열 만들기 5
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181912?language=javascript
 */

function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc, curVal) => {
        // let temp = curVal.slice(s, s+l);
        // if(temp > k) acc.push(Number(temp));
        // 위에서 내가 작성한 풀이는 모두 계산한 후에 Number처리 하였으나
        // 다른 분들의 풀이를 보니 slice한 값을 먼저 Number처리한 것을 볼 수 있었음
        // 이미 비교하는 시점에서 자동 형변환 되어 Number로 변환된 것 같은데,
        // 다음 부터는 꼭 확인하고 먼저 형변환 해야할 필요가 있어보임
        let temp = +curVal.slice(s, s+l);
        if(temp > k) acc.push(temp);
        
        return acc;
    }, []);
}