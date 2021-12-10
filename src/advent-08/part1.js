import { code, testCode } from './inputs8.js';

const input = testCode;

let cnt = 0;

for (let i = 0; i < input.length; i++) {
    for (let k = 0; k < input[i][1].length; k++) {
        switch (input[i][1][k].length) {
            case 2:
                cnt++;
                break;
            case 4:
                cnt++;
                break;
            case 3:
                cnt++;
                break;
            case 7:
                cnt++;
                break;
            default:
                // code block
        }
    }
}

console.log(cnt);