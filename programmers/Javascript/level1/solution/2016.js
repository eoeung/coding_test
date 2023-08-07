/**
 * 제목: 2016년
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
 */

const dayObj = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
};

function solution(a, b) {
    let date = new Date(2016, a-1, b);
    return dayObj[date.getDay()];
}