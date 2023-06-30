/**
 * 제목: 로그인 성공?
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120883?language=javascript
 */

function solution(id_pw, db) {
    let [id, pw] = [...id_pw];
    let answer = 2; // 0: 로그인(login), 1: 아이디 일치/비밀번호 불일치(wrong pw), 2: 아이디 불일치(fail)
    
    db.map(([db_id,db_pw]) => {
        if(id === db_id){
            if(pw === db_pw){
                answer = 0; // login
            } else{
                answer = 1; // wrong pw
            }
        }
    });
    
    return answer > 0 ? (answer === 1 ? 'wrong pw' : 'fail') : 'login';
}


/**
 * 다른 분의 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
 * Map 객체를 사용했다.
 * 1. id,pw가 저장된 db 배열을 Map으로 변환한다.
     → id가 key가 되고, pw가 value가 된다.
 * 2. Map.has(key)로 해당 키가 있는 지 확인한다.
 * 3-1. Map에 해당하는 key값(id값)이 없으면 fail을 반환한다.
 * 3-2. id가 존재하는 경우(key값이 일치하는 경우), Map.get(key)로 value값이 있는 지 확인해서 각각 login, wrong pw를 반환한다.
 */