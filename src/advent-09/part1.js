import { heatMap, heatMapTest } from './inputs9.js';

const input = heatMapTest;

let res = 0;

for (let i = 0; i < input.length; i++) {
    for (let k = 0; k < input[i][0].length; k++) {
        let check = false;
        // chech down
        if (input[i + 1] !== undefined) {
            if (input[i + 1][0][k] < input[i][0][k]) check = true;
        }

        // chech Up
        if (input[i - 1] !== undefined) {
            if (input[i - 1][0][k] < input[i][0][k]) check = true;
        }

        // chech left
        if (input[i][0][k - 1] !== undefined) {
            if (input[i][0][k - 1] < input[i][0][k]) check = true;
        }

        // chech right
        if (input[i][0][k + 1] !== undefined) {
            if (input[i][0][k + 1] < input[i][0][k]) check = true;
        }

        if (!check) res += parseInt(input[i][0][k]) + 1;
    }
}

console.log(res);