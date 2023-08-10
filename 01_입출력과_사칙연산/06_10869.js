const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// 덧셈: +
console.log(Number(input[0]) + Number(input[1]));
// 뺄셈: -
console.log(Number(input[0]) - Number(input[1]));
// 곱셈: *
console.log(Number(input[0]) * Number(input[1]));
// 나누기: /
// Math.floor(): 주어진 숫자의 정수부분을 반환
// parseInt(): 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
console.log(Math.floor(Number(input[0]) / Number(input[1])));
// 나누기(나머지): %
// 모듈러 연산
console.log(Number(input[0]) % Number(input[1]));