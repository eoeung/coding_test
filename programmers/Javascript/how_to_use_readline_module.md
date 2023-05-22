# \[코딩테스트를 위한 readline 모듈 설명]

<br>

```javascript
// 1) readline 모듈 호출
const readline = require('readline');
// 2) 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3) 입출력을 처리하는 코드 작성
// 3-1) ### 입력 부분 ###
// 아래에 더 자세한 설명 첨부
rl.on('line', function (line) {
    // 3-1) 입력받는 값을 처리하는 코드
    rl.close();
});

// 3-2) ### 출력 부분 ###
// 마찬가지로 아래에 더 자세한 설명 첨부
rl.on('close',function(){
    // 3-2) 입력이 끝나고 실행할 코드
    process.exit();
});

// 참고
// ** on()메서드를 연결해서 사용하는 경우
rl.on('line', function (line) {
    // 입력받는 값을 처리하는 코드
    rl.close();
}).on('close',function(){
    // 입력이 끝나고 실행할 코드
    process.exit();
});
```


<br><br>

---

# **\### 입력 부분 ###**
## 1. ***rl.on()***
- on()메서드를 이용해 이벤트와 콜백함수를 전달   
위 코드에서는 **line**이벤트와 **close**이벤트가 사용됨

## 2. ***line 이벤트***
- 입력받는 값을 한 줄씩 읽어 문자열 타입으로 전달하는 역할을 하는 이벤트

## 3. ***입력받는 값을 처리하는 코드***
- line이벤트로 받은 내용을 처리하는 코드 작성

## 4. ***rl.close()***
- 인터페이스를 종료 → rl.close()가 호출되면 입력이 끝났다는 것을 의미   
다음에 **close이벤트**를 발생시켜 입력값을 활용해 출력값을 도출하는 코드를 작성



<br><br>

---

# **\### 출력 부분 ###**
## 1. ***close 이벤트***
- 더 이상 입력되는 값이 없을 때 실행되는 이벤트

## 2. ***입력이 끝나고 실행할 코드***
- **close 이벤트**가 호출된 다음 입력값을 활용해 출력값을 도출하는 코드 작성

## 3. ***process.exit()***
- 프로세스 종료



<br><br>

## ※ ***Reference***

| __[readline 모듈에 대해 정리된 글](https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 "readline모듈 설명 글")__

| __[node.js 입출력 방법 정리](https://velog.io/@hyejin4169/%EB%B0%B1%EC%A4%80-node.js-%EC%9E%85%EC%B6%9C%EB%A0%A5-%EB%B0%A9%EB%B2%95 "fs모듈 및 readline모듈 설명 글")__