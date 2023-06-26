/**
 * 제목: 캐릭터의 좌표
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120861?language=javascript
 */

// 방향키를 key로 받고, 배열의 x,y 좌표를 변경하는 함수를 value로 받는 객체를 정의
const arrow = {
    'left': (array) => array[0] -= 1,  // 왼쪽이면 x값을 -1
    'right': (array) => array[0] += 1, // 오른쪽이면 x값을 +1
    'up': (array) => array[1] += 1,    // 위쪽이면 y값을 +1
    'down': (array) => array[1] -= 1,  // 아래쪽이면 y값을 -1
};

function solution(keyinput, board) {
    // board 안에서 움직일 수 있는 최대 거리는 board에서 2로 나눈 몫(정수만)
    let maxBoardX = Math.trunc(board[0]/2);
    let maxBoardY = Math.trunc(board[1]/2);
    
    let answer = keyinput.reduce((acc, val) => {
        const op = arrow[val];
        
        // board안에서만 캐릭터가 이동할 수 있음 -> 이미 board끝이라면 움직이지 않는다.
        if( (val === 'left') && (-maxBoardX >= acc[0]) ) return acc;
        if( (val === 'right') && (maxBoardX <= acc[0]) )          return acc;
        if( (val === 'up') && (maxBoardY <= acc[1]) )             return acc;
        if( (val === 'down') && (-maxBoardY >= acc[1]) ) return acc;
        
        op(acc);
        return acc;
        
    }, [0, 0]); // 캐릭터는 항상 [0, 0]에서 시작한다.
    
    return answer;
}


/**
 * 다른 분의 풀이
 const CONTROL = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
}

function solution(key, [n, m]) {
    const [x1, x2] = [-(n-1)/2, (n-1)/2];
    const [y1, y2] = [-(m-1)/2, (m-1)/2];
    return key.reduce(([x, y], k) => {
        const [nx, ny] = [x + CONTROL[k][0], y + CONTROL[k][1]];
        if (x1 <= nx && nx <= x2 && y1 <= ny && ny <= y2) return [nx, ny];
        return [x, y];
    }, [0, 0]);
}
 * 1. 일단 객체에 값만을 넣어준다. (함수화 X)
 * 2. board의 각각의 x,y 최소·최대값의 값을 [x1, x2]와 [y1, y2]에 넣어준다.
 * 3. key값이 담긴 배열을 하나씩 돌리면서 key값에 대한 좌표를 일단 구해서 [nx, ny]에 넣어준다.
 * 4. board를 넘어서는 값(아까 구한 [x1, x2], [y1, y2])이 넘어서는지 확인하고, 넘어서지 않으면 방금 구한 [nx, ny]를 반환해준다.
 *** x1 <= nx && nx <= x2 는 x좌표가 board를 넘어서는지 확인하는 것이고, y1 <= ny && ny <= y2 는 y좌표가 넘어서는지 확인하는 것이다.
 * 5. board를 넘어서면 기존에 구해놨던 값인 [x, y]를 그대로 넘겨준다.
 */