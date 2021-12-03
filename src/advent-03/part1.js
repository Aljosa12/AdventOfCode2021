import { inputs, qwert } from './inputs.js';

let counter = 0;

function calc(input) {
    let gamma = '';
    let epsilon = '';
    for (let i = 0; i < input[0].length; i++) {
        let one = 0,
            zero = 0;
        for (let k = 0; k < input.length; k++) {
            // console.log(input[k][i], k);
            input[k][i] == 0 ? zero++ : one++;
            counter++;
        }
        zero > one ? (gamma += '0') : (gamma += '1');
    }

    for (let i = 0; i < gamma.length; i++) {
        gamma[i] === '1' ? (epsilon += '0') : (epsilon += '1');
    }

    console.log(gamma, epsilon);
    let res = parseInt(gamma, 2) * parseInt(epsilon, 2);
    return res;
}

calc(inputs);

// res 1916 2179