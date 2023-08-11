const fs = require('fs');
// input이 개행으로 구분되므로, split('\n')으로 나눔.
let input = fs.readFileSync('./input').toString().split('\n');

let num_1 = Number(input[0]);
let num_2 = Number(input[1]);

cal(num_1, num_2);

function cal(params01, params02) {
    // buf: 곱하는 숫자의 각 자릿값
    let buf = 0;
    // answer: 결과값의 총합; 즉, params01과 params02의 곱한 결과값
    let answer = 0;
    // 숫자의 길이는 number.toString().length 으로 얻을 수 있음.
    for (let i = 0; i < params02.toString().length; i++) {
        // 초기값 및 buf가 0 일 경우, params02의 보정이 필요없음.
        // 그 외의 경우, 이미 계산한 자릿값을 params02에서 뺌.
        if (buf != 0) {
            params02 -= buf * (10 ** (i - 1));
        }

        // buf = (곱하는 수) % (해당 자릿수) / (이전 자릿수)
        buf = params02 % (10 ** (i + 1)) / (10 ** i);
        console.log(params01 * buf);
        answer += params01 * buf * (10 ** i);
    }
    console.log(answer);
}
