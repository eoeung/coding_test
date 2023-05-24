/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181949?language=javascript
 * 
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    // console.log(input); // 저장한 모든 문자열
    let answer = '';
    
    for(let str of input){ // 주어진 문자열이 여러 줄일 경우 사용
        // console.log(str); // 배열에 저장한 모든 문자열
        
        // for...in vs for...of
        // https://buzzcoder.gitbooks.io/codecraft-javascript/content/string/loop-through-a-string.html
        
        // for...in
        // for...in loop에서 변수 i는 자동으로 인덱스를 수신 -> str[i]를 사용하여 각 문자에 액세스할 수 있음
        // for(let i in str){
        //     // console.log(str[i]);
        //     if(str[i] === str[i].toUpperCase()){
        //         // str[i] = str[i].toLowerCase(); // TypeError: Cannot assign to read only property // 깊은 복사 적용해야함
                                                     // 참고글: https://velog.io/@rkio/React-TypeError-Cannot-assign-to-read-only-property-0-of-object-object-Array
        //         answer += str[i].toLowerCase();
        //     } else{
        //         answer += str[i].toUpperCase();
        //     }
        // }
        
        // for...of
        // for...of loop에서 변수 char는 문자를 직접 수신 -> 인덱스를 사용할 필요가 없음
        // 코드에 각 문자의 인덱스 값이 필요하지 않은 경우 이 루프 형식이 훨씬 더 간단함
        for(let char of str){
            // console.log(char);
            if(char === char.toUpperCase()){
                answer += char.toLowerCase();
            } else{
                answer += char.toUpperCase();
            }
        }
        
        console.log(answer);
    }
});