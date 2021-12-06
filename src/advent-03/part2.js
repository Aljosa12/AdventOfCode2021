import { inputs } from './inputs3.js';
let inp = [];
for (let i = 0; i < inputs.length; i++) {
    inp.push(inputs[i]);
}

function calcGamma(input, num, air) {
    let res = '';

    for (let i = num; i < num + 1; i++) {
        let one = 0,
            zero = 0;
        for (let k = 0; k < input.length; k++) {
            input[k][i] == 0 ? zero++ : one++;
        }

        if (air === 'oxy') {
            zero > one ? (res += '0') : (res += '1');
        } else {
            zero <= one ? (res += '0') : (res += '1');
        }
    }

    return res;
}

function oxygenGenerator(inputs, air) {
    let input = inputs;
    for (let i = 0; i < input[0].length; i++) {
        let mostCommonOxy = calcGamma(input, i, air);

        for (let k = 0; k < input.length; k++) {
            if (input[k][i] !== mostCommonOxy) {
                input.splice(k, 1);
                k--;
            }
        }

        if (input.length === 1) {
            break;
        }
    }

    return input;
}

const oxy = oxygenGenerator(inputs, 'oxy');
const air = oxygenGenerator(inp, 'air');

let res = parseInt(oxy, 2) * parseInt(air, 2);

console.log(res);