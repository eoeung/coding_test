/**
 * 제목: 모스부호 (1)
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120838?language=javascript
 */

function solution(letter) {
    return letter.split(' ').reduce((acc, val) => acc += morse[val], '');
}

const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}