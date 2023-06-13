/**
 * 제목: 커피 심부름
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181837?language=javascript
 */

const menu = {
    'iceamericano': 4500,
    'americanoice': 4500,
    'hotamericano': 4500,
    'americanohot': 4500,
    'icecafelatte': 5000,
    'cafelatteice': 5000,
    'hotcafelatte': 5000,
    'cafelattehot': 5000,
    'americano'   : 4500,
    'cafelatte'   : 5000,
    'anything'    : 4500
};

function solution(order) {
    return order.reduce((acc, val) => {
        return acc += menu[val];
    }, 0);
}