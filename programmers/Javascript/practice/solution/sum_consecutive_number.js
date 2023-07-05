/**
 * 제목: 연속된 수의 합
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript
 */

function solution(num, total) {
    let answer = [];
    
    if(num % 2 == 0){ // 짝수만큼의 개수인 경우
        // Ex) num=6, total=45, result=[5,6,7,8,9,10]
        // num/2=3개의 쌍이 존재하는데, 이 쌍의 합이 모두 같음 → 5,10 / 6,9 / 7,8 = 15 / 15 / 15
        // 즉, 처음+마지막 값 = 중앙에 위치한 2개의 값 이 되는 것을 이용
        // total/(num/2) = 45/(6/2) = 45/3 = 15인데, 연속된 수의 합이므로 15/2와 (15/2)+1이 중앙값이 된다. (소수점 제외)
        // 7과 8이 중앙값이라는 것을 알아냈다면 아까 num/2개의 쌍만큼 값이 같으니, 앞의 값을 알아낼 수 있음
        // 5,10 / 6,9 / 7,8 3쌍 중에 7이 포함되어 있으므로 아래의 식이 맨 앞의 값이 된다.
        // total/(num/2) - (num/2)-1 => 중앙값2개 중 앞의 수(7) - 총 쌍의 개수-1(2, 이미 7이 포함되어있으므로 1개 감소)
        
        let pairCnt = num/2; // 쌍의 개수
        let pairSum = total/pairCnt; // 쌍의 합 → 5,10 / 6,9 / 7,8 = 15 / 15 / 15
        let medianFirst = Math.trunc(pairSum/2); // Math.ceil(pairSum/2)은 medianSecond가 됨 (각각 7,8)
        
        for(let i=( medianFirst - (pairCnt-1)) ;; i++){
            if(answer.length === num) break;
            answer.push(i);
        }
        
    } else{ // 홀수만큼의 개수인 경우
        // total / num 값이 중앙값이 됨
        // num-1개 만큼 와야하므로(중앙값을 뺀 나머지 자리) (num-1)/2를 median에서 뺀 값부터 시작하는 반복문 사용
        let median = total/num;
        
        for(let i=median-((num-1)/2);; i++){
            if(answer.length === num) break;
            answer.push(i);            
        }
    }
    
    return answer;
}