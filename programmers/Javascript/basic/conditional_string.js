/**
 * 제목: 조건 문자열
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181934?language=javascript
 */

function solution(ineq, eq, n, m) {
    if(ineq === '>'){
        if(eq === '='){ // >= 연산
            return n >= m ? 1 : 0;
        } else{ // > 연산
            return n > m ? 1 : 0;
        }
    } else{ // ineq == '<'
        if(eq === '='){ // <= 연산
            return n <= m ? 1 : 0;
        } else{ // < 연산
            return n < m ? 1 : 0;
        }
    }
}

/**
 * 원래 하고 싶었던 코드인데, 어떤 분이 멋지게 해주셨다.
 * 
 * 1) 입력받는 ineq와 eq를 object로 만든다. (추후에 제대로 된 값이 들어오는지 체크하기도 좋고, 관리하기도 편함)
 * 
 * 2) object 내에는 key값으로 ineq+eq로 설정하고, value값은 화살표 함수(익명 함수)로 n과 m을 비교하여 그 값을 return 해준다.
 * 
 * 3) 최종적으로 return 값은 Number로 변환하여 넘겨준다.
const operations = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
  };
  
  function solution(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    return Number(op(n, m));
  }
 */