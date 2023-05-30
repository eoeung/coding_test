/**
 * 제목: 문자열 겹쳐쓰기
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181943?language=javascript
 * 
 */

function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    let ms1 = my_string.slice(0, s); // 처음 부분
    let ms2 = my_string.slice(overwrite_string.length+s);
    // -> overwrite_string을 하고도 my_string이 남는 경우, 뒷 부분 문자 포함
    
    answer += ms1;
    answer += overwrite_string;
    answer += ms2;
    
    return answer;
    // 위 코드를 간단하게 작성
    // return my_string.slice(0,s) + overwrite_string + my_string.slice(s+overwrite_string.length);
}