import { crabs, testCrabs } from './inputs7.js';

const input = testCrabs;

function alignCrabs(input) {
    let bestScore = 0,
        day = 0,
        res = 0;
    while (true) {
        let curScore = 0;
        for (let k = 0; k < input.length; k++) {
            let temp = input[k] - day;

            if (temp < 0) temp *= -1;
            curScore += temp;
        }

        if (day === 0) bestScore = curScore * 1;
        if (curScore <= bestScore) {
            res = day;
            bestScore = curScore;
        } else {
            console.log(res, bestScore);
            return false;
        }
        day++;
    }
}

alignCrabs(input);