// fs모듈; FileSystem의 약자로 파일 처리와 관련된 모듈.
const fs = require('fs');
// fs.readFile(filename, [options], callback)
// : 비동기식 읽기 메소드.
// fs.readFileSync(filename, [options])
// : 동기식 읽기 메소드.
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// Number(): 문자열을 숫자로 변환하는 함수.
console.log(Number(input[0]) + Number(input[1]));