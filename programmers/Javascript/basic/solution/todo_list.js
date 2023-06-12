/**
 * 제목: 할 일 목록
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181885?language=javascript
 */

function solution(todo_list, finished) {
    return todo_list.reduce((acc, val, idx) => {
        if(finished[idx]) return acc;
        else{
            acc.push(val);
            return acc;
        }
    }, []);
}